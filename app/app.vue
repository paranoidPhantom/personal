<script lang="ts" setup>
useHead({
    link: [
        {
            rel: "icon",
            href: "/favicon.svg",
            type: "image/svg+xml",
        },
    ],
});
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtPage />
        <LangSwitcher />
    </div>
</template>
