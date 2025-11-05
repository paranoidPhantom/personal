<script lang="ts" setup>
import RustSvg from "./assets/graphics/rust.svg?raw";
import CubeSvg from "./assets/graphics/cube.svg";

const animate = ref(false);
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <h1 class="text-3xl text-uppercase">Hello, world!</h1>
        <SvgAnimator
            :animate="animate"
            :svg="RustSvg"
            :path-length="1240"
            @mouseover="animate = true"
            @mouseleave="animate = false"
        />
        <img :src="CubeSvg" alt="Cube" />
    </div>
</template>
