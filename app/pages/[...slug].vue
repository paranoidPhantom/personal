<script lang="ts" setup>
import type { RouteLocationNormalizedGeneric } from "vue-router";

definePageMeta({
    middleware: [
        async (
            to: RouteLocationNormalizedGeneric,
            from: RouteLocationNormalizedGeneric
        ) => {
            const page = await queryCollection("content").path(to.path).first();
            if (!page) {
                return abortNavigation({
                    statusCode: 404,
                    statusMessage: "Page not found",
                });
            }	
        },
    ],
});

const { path } = useRoute();
const contentPath = computed(() => {
    return path;
});

const { data } = useAsyncData(
    contentPath,
    async () => {
        const ast = await queryCollection("content")
            .path(contentPath.value)
            .first();

        return ast;
    },
    {
        watch: [contentPath],
    }
);
</script>

<template>
    <div
        v-if="data"
        class="mx-auto flex max-w-[1000px] w-full flex-col p-8 space-y-6"
    >
        <NuxtLink
            :to="$localePath('/')"
            class="flex items-center absolute top-4 left-4 space-x-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
        >
            <Icon name="mdi:arrow-left" class="text-lg" />
            {{ $t('back') }}
        </NuxtLink>
        <MarkdownFormatter>
            <ContentRenderer :value="data" />
        </MarkdownFormatter>
        <p class="opacity-50 mr-auto">
            <i>{{ data.date }}</i>
        </p>
    </div>
</template>

<style lang="scss" scoped></style>
