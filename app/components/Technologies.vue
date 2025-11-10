<script lang="ts" setup>
import RustSvg from "~/assets/graphics/rust.svg?raw";
import WebSvg from "~/assets/graphics/web.svg?raw";

const { y } = useWindowScroll();

const clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
};

const animationSlowdown = 3;

const rustBlock = ref<HTMLElement | null>(null);
const webBlock = ref<HTMLElement | null>(null);
</script>

<template>
    <div class="space-y-16 py-16">
        <div ref="rustBlock" class="flex justify-between items-center">
            <SpotlightCube>
                <SvgAnimator
                    :animate="
                        clamp((rustBlock?.offsetTop ?? 0) - 300 - y, 0, 100 * animationSlowdown) /
                        animationSlowdown
                    "
                    :duration="0.2"
                    :svg="RustSvg"
                    :path-length="1240"
                    width="150px"
                />
            </SpotlightCube>
            <h1 class="font-bold text-3xl text-uppercase">Rust</h1>
        </div>
        <div ref="webBlock" class="flex justify-between items-center">
            <h1 class="font-bold text-3xl text-uppercase text-right">Web</h1>
            <SpotlightCube>
                <SvgAnimator
                    :animate="
                        clamp((webBlock?.offsetTop ?? 0) - 300 - y, 0, 100 * animationSlowdown) /
                        animationSlowdown
                    "
                    :duration="0.2"
                    :svg="WebSvg"
                    :path-length="620"
                    width="150px"
                />
            </SpotlightCube>
        </div>
    </div>
</template>

