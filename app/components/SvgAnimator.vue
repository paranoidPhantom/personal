<script lang="ts" setup>
interface Props {
    classes?: string;
    animate?: number;
    duration?: number; // In seconds
    pathLength?: number;
    width?: string;
    height?: string;
    svg: string;
}

withDefaults(defineProps<Props>(), {
    classes: "",
    animate: 0,
    duration: 0,
    pathLength: 1500,
});
</script>

<template>
    <div
        :class="classes"
        :style="{
            'stroke-dashoffset': `${(animate / 100) * pathLength}`,
            transition: `stroke-dashoffset ${duration}s ease-out`,
            'stroke-dasharray': pathLength,
            width: width,
            height: height,
        }"
        v-html="svg"
    />
    <!-- v-html is safe as long as vite bakes in the SVG at build time -->
</template>
