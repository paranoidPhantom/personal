<script lang="ts" setup>
import type { NuxtError } from "#app";

useHead({
    link: [
        {
            rel: "icon",
            type: "image/svg",
            href: "/favicon.svg",
        },
    ],
});

const props = defineProps({
    error: Object as () => NuxtError,
});
</script>

<template>
    <div class="__root h-[90vh] flex justify-center flex-col space-y-4">
        <h2
            class="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0"
        >
            {{ $t("error") }}
        </h2>
        <pre>{{ error }}</pre>
        <Button
            class="w-fit"
            @click="clearError({ redirect: '/' })"
            variant="outline"
        >
            {{ $t("go_home") }}
        </Button>
    </div>
</template>

<style lang="scss" scoped>
.__root {
    max-width: 800px;
    width: calc(100% - 2rem);
    margin: 1rem auto;
    font-family: "Doto", monospace;
    pre {
        font-family: "Doto", monospace;
    }
}
</style>
