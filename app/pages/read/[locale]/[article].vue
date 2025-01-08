<script lang="ts" setup>
const { locale: localePickedByUser } = useI18n();

const {
    params: { article, locale },
    path,
} = useRoute();
const router = useRouter();

const { data: thisArticle } = useAsyncData(
    `content-list-${locale}`,
    async () => {
        const contentQuery = await queryContent(
            `${locale}/${article}`
        ).findOne();
        useContentHead(contentQuery);
        return contentQuery;
    }
);

defineOgImage({
    component: "OGImage",
    emojis: "fluent-emoji",
    props: {
        title: thisArticle.value?.title,
        description: thisArticle.value?.description,
        image: thisArticle.value?.image,
    },
});

watch(localePickedByUser, (newLocale) => {
    if (locale !== newLocale) navigateTo(`/read/${newLocale}/${article}`);
});
</script>

<template>
    <div class="__article pt-8 mb-32">
        <NuxtImg
            v-if="thisArticle?.image"
            class="w-full h-auto object-cover rounded-t-2xl mb-4"
            :src="thisArticle.image"
            alt="Cover graphic"
            width="1000px"
            data-aos="fade-up"
            data-aos-duration="500"
            style="
                mask-image: linear-gradient(
                    to bottom,
                    black 0%,
                    black 95%,
                    transparent 100%
                );
            "
        />
        <MDFormatter v-if="thisArticle">
            <h2
                class="scroll-m-20 text-2xl font-semibold tracking-tight"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                {{ thisArticle.title }}
            </h2>
            <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                class="mt-6 border-l-2 pl-6 italic"
            >
                {{ thisArticle.description }}
            </p>
            <Separator
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                class="my-4"
            />
            <ContentRenderer
                data-aos="fade-up"
                data-aos-delay="300"
                :value="thisArticle"
            />
        </MDFormatter>
    </div>
</template>

<style lang="scss" scoped></style>
