<script lang="ts" setup>
const server = useState("server", () => true);

onMounted(() => (server.value = false));

const { seo } = useAppConfig();

useSeoMeta({
    twitterTitle: seo.title,
    twitterCard: "summary",
});

useHead({
    link: [
        {
            rel: "icon",
            type: "image/svg",
            href: "/favicon.svg",
        },
    ],
});
</script>

<template>
    <div class="__root">
        <BaseHeader />
        <NuxtPage />
    </div>
</template>

<style lang="scss" scoped>
.__root {
    max-width: 800px;
    width: calc(100% - 2rem);
    margin: 1rem auto;
}
</style>
