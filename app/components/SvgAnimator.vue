<script lang="ts" setup>
interface Props {
    animate?: boolean;
    duration?: number; // In seconds
    pathLength?: number;
    svg: string;
}

withDefaults(defineProps<Props>(), {
    animate: false,
    duration: 2,
    pathLength: 1500,
});
</script>

<template>
    <div
        style=""
        :style="{
            'stroke-dashoffset': animate ? '0' : `${pathLength}`,
            transition: `all ${duration}s ease-in-out`,
            'stroke-dasharray': pathLength,
        }"
        v-html="svg"
    />
</template>
