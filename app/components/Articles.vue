<script lang="ts" setup>
const { locale } = useI18n();

const { data: articles } = useAsyncData(
    `articles-${locale.value}`,
    async () => {
        const data = (
            await queryCollection("content").order("index", "DESC").all()
        )
            .map((item) => ({ ...item, body: undefined }))
            .filter(
                (item) =>
                    (locale.value === "en") !== item.path.startsWith("/ru")
            );
        return data;
    },
    {
        watch: [locale],
    }
);
</script>

<template>
    <div class="flex flex-col gap-4 py-16">
        <NuxtLink
            v-for="item in articles"
            :key="item.id"
            :to="item.path"
            class="flex justify-between items-center gap-2 relative overflow-hidden py-4 px-8 rounded-2xl item"
        >
            <h4 class="transition-transform">{{ item.title }}</h4>
            <img
                class="absolute inset-0 blur-[100px] -z-10 h-full w-full object-cover opacity-20"
                :src="item.image"
                :alt="item.title"
            />
            <img
                class="h-24 object-cover rounded-xl thumbnail transition-all"
                :src="item.image"
                :alt="item.title"
            />
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.item {
    &:hover {
        > h4 {
            @apply translate-x-2;
        }
        > .thumbnail {
            @apply scale-110;
        }
    }
}
</style>
