<script lang="ts" setup>
const { locale } = useI18n();
</script>

<template>
    <div
        class="fixed top-0 right-0 flex gap-4 backdrop-blur-lg p-4 z-50 rounded-bl-xl"
    >
        <NuxtLink v-if="locale === 'ru'" :to="$switchLocalePath('en')">
            English
        </NuxtLink>
        <NuxtLink v-else :to="$switchLocalePath('ru')">Русский</NuxtLink>
    </div>
</template>

<style lang="scss" scoped></style>
