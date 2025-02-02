<script lang="ts" setup>
const { locale } = useI18n();

const content = [
    {
        image: "/_images/projects/events/cover.png",
        title: {
            en: "Event management system",
            ru: "Система автоматизации мероприятий",
        },
        description: {
            en: "A system that uses WebSockets and PostgreSQL to offer realtime changes to audio/visual effects on stage.",
            ru: "Система автоматизации звука/визуала на сцене за счёт WebSocket и PostgreSQL.",
        },
        link: "https://events.hudalla.dev",
    },
    {
        image: "/_images/projects/timetable/cover.png",
        title: {
            en: "School timetable",
            ru: "Расписание уроков",
        },
        description: {
            en: "My class did not have a well formated, concise and accessible timetable, so. I made one.",
            ru: "У моего класса не было хорошо оформленного, краткого и доступного расписания, поэтому я сделал его.",
        },
        link: "https://550.hudalla.dev",
    },
];
</script>

<template>
    <div class="__projects grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <NuxtLink
            v-for="card in content"
            :key="card.title.en"
            :to="card.link"
            external
        >
            <Card class="relative">
                <CardHeader>
                    <NuxtImg
                        class="absolute top-0 left-0 w-full h-auto object-cover rounded-t-lg"
                        v-show="card.image"
                        :src="card.image"
                        alt="Cover graphic"
                        style="
                            mask-image: linear-gradient(
                                to bottom,
                                black 0%,
                                black 75%,
                                transparent 100%
                            );
                        "
                    />
                    <NuxtImg
                        class="opacity-0"
                        v-show="card.image"
                        :src="card.image"
                        alt="Cover graphic"
                    />
                    <CardTitle>{{
                        card.title[locale as "en" | "ru"]
                    }}</CardTitle>
                    <CardDescription>{{
                        card.description[locale as "en" | "ru"]
                    }}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <CardDescription>
                        {{ card.link }}
                    </CardDescription>
                </CardFooter>
            </Card>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped></style>
