<script lang="ts" setup>
const history: Array<{
    en: {
        title: string;
        description: string;
        article: string;
        date: string;
        image?: string;
    };
    ru: {
        title: string;
        description: string;
        article: string;
        date: string;
        image?: string;
    };
}> = [
    {
        en: {
            title: "Silver medalist @ PROD 2023'24",
            description: "Track - Frontend",
            article: `## The stages

### Stage 1 - [General CS quiz](https://vk.com/wall-223720604_61)

This stage was a general CS quiz:
- We were given 2 hours to solve 30 questions.
- 3879 contestants attempted the quiz.
- It tested our knowledge on web fundamentals, and general CS knowledge.

### Stage 2 - Track based task

The competition was divided into frontend, backend, and mobile development.

I picked frontend. The task can be viewed [here](https://github.com/Central-University-IT/test-frontend).

In short, we were tasked to build a resume builder in pure JS/CSS following strict design guidelines and prewritten playwright tests.

I got a 98.5/100 score with a 71/100 passing score *making me top 6* in this stage of the competition.

### Stage 3.1 - Individual project

I was given the task to build a habit tracker. The task can be viewed [here](https://centraluniversity.notion.site/Frontend-71498a423396498ea874cd9cd7c48bd0).

In short, it had to implement gamification, add social mechanics. I was one of the few that hooked this up to a backend ([Supabase](https://supabase.com/)).

This allowed me to have actual friend requests, an actual library of popular habits, and actual profile pages with results.

You can check out the final result [here](https://github.com/Central-University-IT-prod/public-frontend-paranoidPhantom).

### Stage 3.2 - Team hackathon

![Location image](/_images/prod-23/location.png)

This was the only part of the competition that was hosted at a physical location. It was a 4 day hackathon, with multiple cases that could be picked.

My team picked a case about optimizing feedback collection for businesses.

We developed a prototype: it had a dashboard for businesses to manage questions, and analyze feedback. We even integrated it with a LLM called YandexGPT that would analyze questions and feedback for those questions and suggest how to improve metrics.


We had to present the result of our 4 days of work to 30 judges from the industry.

![Presentation image](/_images/prod-23/presentation.png)

---

## The results

We were judged by a cobination of scores for the individual project, and team hackathon.

The closing ceremondy was held in Moscow at the Higher School of Economics.

![Ceremony image](/_images/prod-23/ceremony.png)
`,
            date: "April 4, 2024 (Age 16)",
            image: "/_images/prod-23/cover.png",
        },
        ru: {
            title: "Призёр второй степени в PROD 2023'24",
            description: "Направление - Фронтенд",
            article: `## Этапы

### Этап 1 - [Общий опрос по информатике](https://vk.com/wall-223720604_61)

Этот этап был общим опросом по информатике:
- Нам было дано 2 часа на решение 30 вопросов.
- В опросе участвовали 3879 конкурсантов.
- Опрос проверял наши знания по основам веб-разработки и общей информатике.

### Этап 2 - Задача по направлению

Конкурс был разделён на фронтенд, бэкенд и мобильную разработку.

Я выбрал фронтенд. Задачу можно посмотреть [здесь](https://github.com/Central-University-IT/test-frontend).

Вкратце, нам нужно было создать конструктор резюме на чистом JS/CSS, соблюдая строгие дизайн-гайдлайны и предустановленные тесты Playwright.

Я набрал 98.5/100 баллов при проходном балле 71/100, *заняв топ-6* на этом этапе конкурса.

### Этап 3.1 - Индивидуальный проект

Мне дали задачу создать трекер привычек. Задачу можно посмотреть [здесь](https://centraluniversity.notion.site/Frontend-71498a423396498ea874cd9cd7c48bd0).

Вкратце, нужно было реализовать геймификацию и добавить социальные механики. Я был одним из немногих, кто подключил проект к бэкенду ([Supabase](https://supabase.com/)).

Это позволило мне реализовать настоящие запросы в друзья, библиотеку популярных привычек и страницы профилей с результатами.

Вы можете посмотреть итоговый результат [здесь](https://github.com/Central-University-IT-prod/public-frontend-paranoidPhantom).

### Этап 3.2 - Командный хакатон

![Изображение места](/_images/prod-23/location.png)

Это был единственный этап конкурса, который проводился в физическом месте. Это был четырёхдневный хакатон с несколькими кейсами на выбор.

Моя команда выбрала кейс по оптимизации сбора отзывов для бизнеса.

Мы разработали прототип: он включал в себя дашборд для управления вопросами и анализа отзывов для бизнеса. Мы даже интегрировали его с LLM под названием YandexGPT, который анализировал вопросы и отзывы, предлагая, как можно улучшить метрики.

Нам нужно было представить результат нашей четырёхдневной работы 30 судьям из индустрии.

![Изображение презентации](/_images/prod-23/presentation.png)

---

## Результаты

Нас оценивали на основе совокупности баллов за индивидуальный проект и командный хакатон.

Церемония закрытия прошла в Москве в Высшей школе экономики.

![Изображение церемонии](/_images/prod-23/ceremony.png)`,
            date: "4 апреля, 2024 (Возраст 16)",
            image: "/_images/prod-23/cover.png",
        },
    },
    {
        en: {
            title: "7th place @ VK Cup 2022'23",
            description: "Track - JS",
            article: `## Competition

The first stage had [965 contestants in the JS track](https://vk.com/wall-41208167_2648). I advanced to the second stage, which included only 256 contestants.

After that, I passed to the final round, narrowing down to just 16 people, and was invited to VK's office in Moscow.

![Photo from Moscow Office](/_images/vk-cup-22/photo.png)

## The Task

We were tasked with building a web server in pure Node.js that would:

1. Query a large JSON 'database' of emails via API.
2. Serve a fast web app to display these emails according to a Figma template.

Later, we were asked to add extra features such as filters, color themes, and internationalization (i18n).

## My Implementation

At the time, I wasn't familiar with any frontend frameworks, so I used vanilla JavaScript. In retrospect, this likely contributed to the app's high performance.

It was basically my first real project: I had no clue about what NodeJS was, and I had no idea how a web server worked.
I had to learn everything from scratch, but my hope to pass the round again and again led to success.

> Below is a demonstration of the flexibility of the theme system.

![Demo](/_images/vk-cup-22/demo.png)

You can view my full implementation on [GitHub](https://github.com/paranoidPhantom/VK-Cup-2022-JS).`,
            date: "February 5, 2023 (Age 15)",
            image: "/_images/vk-cup-22/cover.png",
        },
        ru: {
            title: "7-е место в VK Cup 2022'23",
            description: "Трек - JS",
            article: `## Конкурс

На первом этапе было [965 участников в треке JS](https://vk.com/wall-41208167_2648). Я прошел во второй этап, где осталось всего 256 участников.

Затем я прошел в финал, в который отобрали всего 16 человек, и был приглашен в офис VK в Москве.

![Фото из офиса VK в Москве](/_images/vk-cup-22/photo.png)

## Задача

Нам поручили создать веб-сервер на чистом Node.js, который должен был:

1. Выполнять запросы к большой JSON 'базе данных' с электронной почтой через API.
2. Обеспечивать быструю работу веб-приложения для отображения этих писем по шаблону из Figma.

Позже нас попросили добавить дополнительные функции, такие как фильтры, цветовые темы и интернационализация (i18n).

## Моя реализация

На тот момент я не знал никаких frontend-фреймворков, поэтому использовал чистый JavaScript. Оглядываясь назад, это, вероятно, способствовало высокой производительности приложения.

Это был по сути мой первый настоящий проект: я не знал ничего о NodeJS, я не знал ничего о веб-серверах.
Все это я изучал с нуля, при это желение пройти в следующий этап снова и снова приводило к успеху.

> Ниже - пример своеобразной костомизации тем

![Демонстрация](/_images/vk-cup-22/demo.png)

Мою полную реализацию можно посмотреть на [GitHub](https://github.com/paranoidPhantom/VK-Cup-2022-JS).`,
            date: "5 февраля, 2023 (Возраст 15)",
            image: "/_images/vk-cup-22/cover.png",
        },
    },
];

const { locale } = useI18n();
</script>

<template>
    <div class="__history flex flex-col gap-4 my-4">
        <hr />
        <ClientOnly>
            <Card
                v-for="(item, index) in history"
                :key="`${locale}-${index}`"
                data-aos="fade-up"
                :data-aos-delay="200 * index"
            >
                <CardHeader>
                    <img
                        class="absolute top-0 left-0 w-full h-auto object-cover rounded-t-lg"
                        v-show="item[locale as 'en' | 'ru'].image"
                        :src="item[locale as 'en' | 'ru'].image"
                        alt="Cover graphic"
                        style="
                            mask-image: linear-gradient(
                                to bottom,
                                black 0%,
                                black 95%,
                                transparent 100%
                            );
                        "
                    />
                    <img
                        class="opacity-0"
                        v-show="item[locale as 'en' | 'ru'].image"
                        :src="item[locale as 'en' | 'ru'].image"
                        alt="Cover graphic"
                    />
                    <CardTitle>{{
                        item[locale as "en" | "ru"].title
                    }}</CardTitle>
                    <CardDescription>{{
                        item[locale as "en" | "ru"].description
                    }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <MDFormatter>
                        <MDC :value="item[locale as 'en' | 'ru'].article" />
                    </MDFormatter>
                </CardContent>
                <CardFooter class="opacity-20">{{
                    item[locale as "en" | "ru"].date
                }}</CardFooter>
            </Card>
            <template #fallback>
                <Card v-for="i in history.length" :key="i">
                    <CardHeader>
                        <CardTitle>
                            <Skeleton class="w-[200px] h-8 rounded-full" />
                        </CardTitle>
                        <CardDescription>
                            <Skeleton class="w-[150px] h-6 rounded-full" />
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="flex flex-col gap-2">
                            <Skeleton class="w-full h-4 rounded-full" />
                            <Skeleton class="w-full h-4 rounded-full" />
                            <Skeleton class="w-full h-4 rounded-full" />
                        </div>
                    </CardContent>
                    <CardFooter class="opacity-20">
                        <Skeleton class="w-[100px] h-4 rounded-full" />
                    </CardFooter>
                </Card>
            </template>
        </ClientOnly>
    </div>
</template>
