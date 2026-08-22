<script lang="ts" setup>
import type { NuxtError } from "#app";
defineProps<{
    error: NuxtError;
}>();
</script>

<template>
    <div class="h-screen flex items-center justify-center flex-col gap-4">
        <h1 class="font-bold text-4xl">{{ error.statusCode }}</h1>
        <p>{{ error.message }}</p>
        <NuxtLink :to="$localePath('/')">{{ $t("home") }}</NuxtLink>
    </div>
</template>

<style lang="scss" scoped></style>
