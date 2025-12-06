<script lang="ts" setup>
import CubeSvg from "./assets/graphics/cube.svg";
import LightSvg from "./assets/graphics/light.svg";

const { y } = useWindowScroll();
const { height } = useWindowSize();

const clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
};

const block = ref<HTMLElement | null>(null);

const lightProgress = computed(() =>
    clamp(
        (y.value - (block.value?.offsetTop ?? 0) + height.value / 2) / 300,
        0,
        1
    )
);

const blockProgress = computed(() =>
    clamp(
        (y.value - (block.value?.offsetTop ?? 0) + height.value / 1.5) / 300,
        0,
        1
    )
);
</script>

<template>
    <div ref="block" class="w-40 relative flex flex-col items-center h-fit">
        <slot />
        <img
            class="select-none w-full absolute pointer-events-none left-1/2 -translate-x-1/2 bottom-32"
            :src="LightSvg"
            alt="Glow"
            :style="{
                opacity: lightProgress,
            }"
        />
        <img
            class="select-none"
            :src="CubeSvg"
            alt="Cube"
            :style="{
                opacity: blockProgress,
                scale: 0.8 + blockProgress * 0.2,
            }"
        />
    </div>
</template>

<style lang="scss" scoped></style>
