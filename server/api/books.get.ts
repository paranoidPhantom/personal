import { defineCachedEventHandler } from "#imports"

type LoginResp = {
  data?: {
    login: { token: string; email: string; languages: string[]; profile: Record<string, any> }
  };
  errors?: Record<string, any>[];
};

type ReadingStatesResp = {
  data?: {
    myReadingStates: {
      id: string; status: string; bookId: string; profileId: string; createdAt: string;
      book: Record<string, any>;
    }[]
  };
  errors?: Record<string, any>[];
};

export default defineCachedEventHandler(async () => {
  const { literalAccountEmail, literalAccountPassword } = useRuntimeConfig();

  const GRAPHQL_ENDPOINT = 'https://literal.club/graphql/';

  // 1. Authenticate via the `login` mutation to obtain a JWT
  const loginQuery = `
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        email
        languages
        profile {
          id
          handle
          name
          bio
          image
        }
      }
    }
  `;

  const loginResponse = await $fetch<LoginResp>(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      query: loginQuery,
      variables: {
        email: literalAccountEmail,
        password: literalAccountPassword,
      },
    },
  });

  if (loginResponse.errors) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Literal authentication failed',
      data: loginResponse.errors,
    });
  }

  const token = loginResponse.data?.login?.token;

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Literal authentication failed: no token returned',
    });
  }

  // 2. Call `myReadingStates` with all documented fields, using the token
  const myReadingStatesQuery = `
    query MyReadingStates {
      myReadingStates {
        status
        book {
          slug
          title
          subtitle
          genre
          description
          cover
          authors {
            name
            image
          }
        }
      }
    }
  `;

  const readingStatesResponse = await $fetch<ReadingStatesResp>(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: {
      query: myReadingStatesQuery,
    },
  });

  if (readingStatesResponse.errors) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch reading states',
      data: readingStatesResponse.errors,
    });
  }

  return readingStatesResponse.data?.myReadingStates.find((book) => book.status === "IS_READING")?.book;
}, {
    maxAge: 60 * 60
})
