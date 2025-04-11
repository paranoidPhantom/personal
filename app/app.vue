<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core";

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

const { y } = useWindowScroll();
</script>

<template>
    <div class="__root">
        <BaseHeader />
        <NuxtPage />
        <div
            class="fixed h-full top-0 left-0 w-full pointer-events-none repeat-infinite opacity-80 -z-10 dark:z-0"
            :style="{
                'background-position': `0 ${-y / 1.5}px`,
                'background-image': 'url(/_images/noise.png)',
            }"
            alt=""
        />
    </div>
</template>

<style lang="scss" scoped>
.__root {
    max-width: 800px;
    width: calc(100% - 2rem);
    margin: 1rem auto;
}
</style>
