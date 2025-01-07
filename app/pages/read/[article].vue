<script lang="ts" setup>
const { locale } = useI18n();

const {
    params: { article },
    path,
} = useRoute();
const router = useRouter();

const { data } = await useAsyncData(
    `content-list-${locale}`,
    async () => {
        const contentQuery = await queryContent(
            `${locale.value}/${article}`
        ).findOne();
        return contentQuery;
    },
    {
        watch: [locale],
    }
);

const lastArticle = ref();
const thisArticle = computed(() => {
    if (router.currentRoute.value.path === path) {
        return data.value;
    } else {
        return lastArticle.value;
    }
});

watch(thisArticle, (value) => {
    if (router.currentRoute.value.path === path) lastArticle.value = value;
});

defineOgImage({
    component: "OGImage",
    renderer: "chromium",
    emojis: "fluent-emoji",
    props: {
        title: thisArticle.value?.title,
        description: thisArticle.value?.description,
        image: thisArticle.value?.image,
    },
});
</script>

<template>
    <div class="__article pt-8 mb-32" v-if="thisArticle">
        <NuxtImg
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
        <MDFormatter>
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
                :value="thisArticle"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
            >
                <template #empty> </template>
            </ContentRenderer>
        </MDFormatter>
    </div>
</template>

<style lang="scss" scoped></style>
