<script lang="ts" setup>
const { locale } = useI18n();

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
    <div v-if="data" class="mx-auto flex max-w-[1000px] w-full flex-col p-8">
        <NuxtLink :to="$localePath('/')" class="flex items-center">
            <Icon name="mdi:arrow-left" class="text-lg" />
            Назад
        </NuxtLink>
        <MarkdownFormatter>
            <ContentRenderer :value="data" />
        </MarkdownFormatter>
        <p class="mt-4 opacity-50 mr-auto">
            <i>{{ data.date }}</i>
        </p>
    </div>
</template>

<style lang="scss" scoped></style>
