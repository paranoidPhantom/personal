<script lang="ts" setup>
import CubeSvg from "./assets/graphics/cube.svg";
import LightSvg from "./assets/graphics/light.svg";
</script>

<template>
    <div class="w-40 relative flex flex-col items-center h-fit">
        <slot />
        <img
            class="select-none w-full absolute pointer-events-none left-1/2 -translate-x-1/2 bottom-32"
            :src="LightSvg"
            alt="Glow"
        />
        <img class="select-none" :src="CubeSvg" alt="Cube" />
    </div>
</template>

<style lang="scss" scoped></style>
