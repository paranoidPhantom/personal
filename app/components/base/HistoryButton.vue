<script lang="ts" setup>
defineProps<{
    to?: string;
}>();
</script>

<template>
    <InteractiveHoverButton
        nuxt-client
        :text="$t('read_more')"
        @click="navigateTo(to)"
    />
</template>

<style lang="scss" scoped></style>
