<script lang="ts" setup>
import PortraitSvg from "~/assets/graphics/portrait.svg?raw";
import PatternSvg from "~/assets/graphics/pattern.svg?raw";

const { y } = useWindowScroll();

const clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
};

const animationSlowdown = 2;

const activateAnimations = ref(0);

onMounted(() => {
    setTimeout(() => {
        activateAnimations.value = 1;
    }, 400);
    setTimeout(() => {
        activateAnimations.value = 2;
    }, 1000);
});
</script>

<template>
    <section class="h-screen overflow-hidden">
        <div
            class="pointer-events-none absolute w-full left-0 top-0 left-1/2 -translate-x-1/2 overflow-hidden border-b border-b-neutral-800 border-opacity-100"
            :style="{
                '--tw-border-opacity': clamp(y / 200, 0, 1),
            }"
        >
            <SvgAnimator
                :animate="
                    activateAnimations > 1
                        ? clamp(y, 0, 100 * animationSlowdown) /
                          animationSlowdown
                        : 100
                "
                :duration="1"
                :svg="PortraitSvg"
                :path-length="450"
                style="aspect-ratio: 1.1526479751"
                class="absolute right-0 bottom-0 w-3/4 sm:w-1/2 lg:w-1/3"
            />
            <SvgAnimator
                classes="pattern"
                :animate="
                    activateAnimations > 0
                        ? clamp(y, 0, 100 * animationSlowdown) /
                          animationSlowdown
                        : 100
                "
                :duration="2"
                :svg="PatternSvg"
                :path-length="7000"
                width="max(100%, 1200px)"
                height="100vh"
            />
        </div>
        <div class="h-full flex items-center justify-center">
            <h1 class="sr-only">Andrei Hudalla</h1>
            <div class="space-y-2">
                <p class="text-xl">{{ $t("hero.intro") }}</p>
                <p>
                    {{ $t("hero.status") }}
                    <Tag>{{ $t("hero.statusTag") }}</Tag>
                </p>
                <p>
                    {{ $t("hero.education") }}
                    <NuxtLink :to="$t('hero.universityTag.href')">
                        <Tag>{{ $t("hero.universityTag") }}</Tag>
                    </NuxtLink>
                    {{ $t("hero.forLabel") }}
                    <NuxtLink :to="$t('hero.degreeProgramTag.href')">
                        <Tag>{{ $t("hero.degreeProgramTag") }}</Tag></NuxtLink
                    >
                </p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.pattern {
    mask-image:
        linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
        linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    mask-size: 100% 50%;
    mask-repeat: no-repeat;
    mask-position:
        left top,
        left bottom;
}
</style>
