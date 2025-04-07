<script lang="ts" setup>
const { locale: localePickedByUser } = useI18n();

const {
    params: { article, locale },
} = useRoute();

watch(localePickedByUser, (newLocale) => {
    if (locale !== newLocale) navigateTo(`/read/${newLocale}/${article}`);
});
</script>

<template>
    <div class="__article">
        <BaseArticleRenderer :article="article" :locale="locale" />
    </div>
</template>

<style lang="scss" scoped></style>
