<script lang="ts" setup>
useHead({
    titleTemplate: "%siteName",
});
</script>

<template>
    <div class="mx-auto flex max-w-[1000px] w-full flex-col px-8 sm:px-16">
        <HeroSection />
        <Technologies />
        <Articles />
        <div class="flex justify-center gap-4 items-center mb-16">
            <a
                class="flex items-center gap-2"
                href="/static/resume.pdf"
                download="hudalla-dev-resume.pdf"
            >
                <Icon name="mdi:document" />
                {{ $t("download_resume") }}
            </a>
            <div class="border-r border-r-neutral-700 shrink-0 h-8" />
            <a
                href="https://github.com/paranoidPhantom"
                target="_blank"
                class="leading-4"
            >
                <Icon class="size-5" name="mdi:github" />
            </a>
            <a
                href="https://t.me/paranoidPhantom"
                target="_blank"
                class="leading-4"
            >
                <Icon class="size-5" name="mdi:telegram" />
            </a>
        </div>
    </div>
</template>
