<script lang="ts" setup>
import PatternSvg from "~/assets/graphics/pattern.svg?raw";

const { y } = useWindowScroll();

const clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
};

const animationSlowdown = 2;
</script>

<template>
    <section class="h-screen overflow-hidden">
        <div class="absolute w-full l-0 left-1/2 -translate-x-1/2 overflow-hidden ">
            <SvgAnimator
                classes="border-b border-b-neutral-800 border-opacity-100"
                :style="{
                    '--tw-border-opacity': clamp(y / 200, 0, 1)
                }"
                :animate="
                    clamp(y, 0, 100 * animationSlowdown) /
                    animationSlowdown
                "
                :duration="1"
                :svg="PatternSvg"
                :path-length="7000"
                width="max(100%, 1200px)"
                height="100vh"
            />
        </div>
    </section>
</template>

