<script lang="ts" setup>
const { locale } = useI18n();
</script>

<template>
    <div class="fixed top-4 right-4 flex gap-4 text-sm">
        <NuxtLink v-if="locale === 'ru'" :to="$switchLocalePath('en')">
            English
        </NuxtLink>
        <NuxtLink v-else :to="$switchLocalePath('ru')">Русский</NuxtLink>
    </div>
</template>

<style lang="scss" scoped></style>
