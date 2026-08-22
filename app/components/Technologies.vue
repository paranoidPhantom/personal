<script lang="ts" setup>
import RustSvg from "~/assets/graphics/rust.svg?raw";
import WebSvg from "~/assets/graphics/web.svg?raw";
import DevopsSvg from "~/assets/graphics/devops.svg?raw";

const { y } = useWindowScroll();
const { height } = useWindowSize();

const clamp = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max);
};

const animationSlowdown = 7;

const rustBlock = ref<HTMLElement | null>(null);
const webBlock = ref<HTMLElement | null>(null);
const devopsBlock = ref<HTMLElement | null>(null);

const rustProgress = computed(
    () =>
        clamp(
            (rustBlock.value?.offsetTop ?? 0) - height.value / 4 - y.value,
            0,
            100 * animationSlowdown
        ) / animationSlowdown
);

const webProgress = computed(
    () =>
        clamp(
            (webBlock.value?.offsetTop ?? 0) - height.value / 4 - y.value,
            0,
            100 * animationSlowdown
        ) / animationSlowdown
);

const devops = computed(
    () =>
        clamp(
            (devopsBlock.value?.offsetTop ?? 0) - height.value / 4 - y.value,
            0,
            100 * animationSlowdown
        ) / animationSlowdown
);
</script>

<template>
    <div class="space-y-32 sm:space-y-16 py-16">
        <div
            ref="rustBlock"
            class="flex justify-between items-center flex-col sm:flex-row"
        >
            <SpotlightCube>
                <SvgAnimator
                    :animate="rustProgress"
                    :duration="0.2"
                    :svg="RustSvg"
                    :path-length="1240"
                    width="150px"
                />
            </SpotlightCube>
            <div class="flex flex-col gap-2 items-end">
                <h1 class="font-bold text-3xl text-uppercase text-right">
                    {{ $t("technologies.rust") }}
                </h1>
                <p class="text-right w-2/3">
                    {{ $t("technologies.rustDescription") }}
                </p>
            </div>
        </div>
        <div
            ref="webBlock"
            class="flex justify-between items-center flex-col-reverse sm:flex-row"
        >
            <div class="flex flex-col gap-2">
                <h1 class="font-bold text-3xl text-uppercase">
                    {{ $t("technologies.web") }}
                </h1>
                <p class="w-2/3">
                    {{ $t("technologies.webDescription") }}
                </p>
            </div>
            <SpotlightCube>
                <SvgAnimator
                    :animate="webProgress"
                    :duration="0.2"
                    :svg="WebSvg"
                    :path-length="620"
                    width="150px"
                />
            </SpotlightCube>
        </div>
        <div
            ref="devopsBlock"
            class="flex justify-between items-center flex-col sm:flex-row"
        >
            <SpotlightCube>
                <SvgAnimator
                    :animate="devops"
                    :duration="0.2"
                    :svg="DevopsSvg"
                    :path-length="1240"
                    width="150px"
                />
            </SpotlightCube>
            <div class="flex flex-col gap-2 items-end">
                <h1 class="font-bold text-3xl text-uppercase text-right">
                    {{ $t("technologies.tooling") }}
                </h1>
                <p class="w-2/3 text-right">
                    {{ $t("technologies.toolingDescription") }}
                </p>
            </div>
        </div>
    </div>
</template>
