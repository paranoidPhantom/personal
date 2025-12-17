<script lang="ts" setup>
import PatternSvg from "~/assets/graphics/pattern.svg?raw";
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

const hoverState = ref<Record<string, boolean>>({});
</script>

<template>
    <div class="flex flex-col gap-4 py-16">
        <NuxtLink
            v-for="(item, idx) in articles"
            :key="item.id"
            :to="item.path"
            class="border border-neutral-800 flex flex-col md:flex-row justify-between md:items-center gap-4 relative overflow-hidden py-4 px-8 rounded-2xl item !no-underline"
            @mouseenter="hoverState[item.id] = true"
            @mouseleave="hoverState[item.id] = false"
        >
            <SvgAnimator
                classes="absolute aspect-1"
                :animate="hoverState[item.id] ? 0 : 100"
                :duration="2"
                :svg="PatternSvg"
                :path-length="7000"
                width="100%"
                :style="{ rotate: `${91725 * idx}deg` }"
            />
            <div class="flex flex-col gap-2 md:w-1/2">
                <h4 class="transition-transform font-bold duration-500">
                    {{ item.title }}
                </h4>
                <p class="transition-transform text-xs opacity-50 duration-500">
                    {{ item.description }}
                </p>
            </div>
            <img
                class="absolute inset-0 blur-[100px] -z-10 h-full w-full object-cover opacity-10 grayscale glow transition-all -scale-x-100"
                :src="item.image"
                :alt="item.title"
            />
            <img
                class="w-full md:w-48 aspect-2 object-cover rounded-xl grayscale thumbnail transition-all"
                :src="item.image"
                :alt="item.title"
            />
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.item {
    &:hover {
        h4 {
            @apply translate-x-2;
        }
        p {
            @apply translate-x-2;
        }
        > .thumbnail {
            @apply md:scale-110 scale-[104%] filter-none;
        }
        > .glow {
            @apply opacity-40 grayscale-0;
        }
    }
}
</style>
