<template>
    <div class="mx-auto flex max-w-[1000px] w-full flex-col px-8 sm:px-16">
        <HeroSection />
        <Technologies />
        <Articles />
        <a
            class="mb-16 flex items-center gap-2"
            href="/static/resume.pdf"
            download="hudalla-dev-resume.pdf"
        >
            <Icon name="mdi:document" />
            {{ $t("download_resume") }}
        </a>
    </div>
</template>
