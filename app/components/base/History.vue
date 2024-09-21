<script lang="ts" setup>
const history: Array<{
    en: {
        title: string;
        description: string;
        article: string;
        date: string;
        image?: string;
    };
    ru: {
        title: string;
        description: string;
        article: string;
        date: string;
        image?: string;
    };
}> = [
    {
        en: {
            title: "7th place in VK Cup 2023'24",
            description: "Track - JS",
            article: `## Competition

The first stage had [965 contestants in the JS track](https://vk.com/wall-41208167_2648). I advanced to the second stage, which included only 256 contestants.

After that, I passed to the final round, narrowing down to just 16 people, and was invited to VK's office in Moscow.

![Photo from Moscow Office](/_images/vk-cup-22/photo.png)

## The Task

We were tasked with building a web server in pure Node.js that would:

1. Query a large JSON 'database' of emails via API.
2. Serve a fast web app to display these emails according to a Figma template.

Later, we were asked to add extra features such as filters, color themes, and internationalization (i18n).

## My Implementation

At the time, I wasn't familiar with any frontend frameworks, so I used vanilla JavaScript. In retrospect, this likely contributed to the app's high performance.

> Below is a demonstration of the flexibility of the theme system.

![Demo](/_images/vk-cup-22/demo.png)

You can view my full implementation on [GitHub](https://github.com/paranoidPhantom/VK-Cup-2022-JS).`,
            date: "February 5, 2023 (Age 15)",
            image: "/_images/vk-cup-22/cover.png",
        },
        ru: {
            title: "7-е место в VK Cup 2023'24",
            description: "Трек - JS",
            article: `## Конкурс

На первом этапе было [965 участников в треке JS](https://vk.com/wall-41208167_2648). Я прошел во второй этап, где осталось всего 256 участников.

Затем я прошел в финал, в который отобрали всего 16 человек, и был приглашен в офис VK в Москве.

![Фото из офиса VK в Москве](/_images/vk-cup-22/photo.png)

## Задача

Нам поручили создать веб-сервер на чистом Node.js, который должен был:

1. Выполнять запросы к большой JSON 'базе данных' с электронной почтой через API.
2. Обеспечивать быструю работу веб-приложения для отображения этих писем по шаблону из Figma.

Позже нас попросили добавить дополнительные функции, такие как фильтры, цветовые темы и интернационализация (i18n).

## Моя реализация

На тот момент я не знал никаких frontend-фреймворков, поэтому использовал чистый JavaScript. Оглядываясь назад, это, вероятно, способствовало высокой производительности приложения.

> Ниже - пример своеобразной костомизации тем

![Демонстрация](/_images/vk-cup-22/demo.png)

Мою полную реализацию можно посмотреть на [GitHub](https://github.com/paranoidPhantom/VK-Cup-2022-JS).`,
            date: "5 февраля, 2023 (Возраст 15)",
            image: "/_images/vk-cup-22/cover.png",
        },
    },
];

const { locale } = useI18n();
</script>

<template>
    <div class="__history flex flex-col gap-4 my-4">
        <hr />
        <ClientOnly>
            <Card
                v-for="(item, index) in history"
                :key="`${locale}-${index}`"
                data-aos="fade-up"
                :data-aos-delay="200 * index"
            >
                <CardHeader>
                    <img
                        class="absolute top-0 left-0 w-full h-auto object-cover rounded-t-lg"
                        v-show="item[locale as 'en' | 'ru'].image"
                        :src="item[locale as 'en' | 'ru'].image"
                        alt="Cover graphic"
                        style="
                            mask-image: linear-gradient(
                                to bottom,
                                black 0%,
                                black 95%,
                                transparent 100%
                            );
                        "
                    />
                    <img
                        class="opacity-0"
                        v-show="item[locale as 'en' | 'ru'].image"
                        :src="item[locale as 'en' | 'ru'].image"
                        alt="Cover graphic"
                    />
                    <CardTitle>{{
                        item[locale as "en" | "ru"].title
                    }}</CardTitle>
                    <CardDescription>{{
                        item[locale as "en" | "ru"].description
                    }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <MDFormatter>
                        <MDC :value="item[locale as 'en' | 'ru'].article" />
                    </MDFormatter>
                </CardContent>
                <CardFooter class="opacity-20">{{
                    item[locale as "en" | "ru"].date
                }}</CardFooter>
            </Card>
            <template #fallback>
                <Card v-for="i in history.length" :key="i">
                    <CardHeader>
                        <CardTitle>
                            <Skeleton class="w-[200px] h-8 rounded-full" />
                        </CardTitle>
                        <CardDescription>
                            <Skeleton class="w-[150px] h-6 rounded-full" />
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="flex flex-col gap-2">
                            <Skeleton class="w-full h-4 rounded-full" />
                            <Skeleton class="w-full h-4 rounded-full" />
                            <Skeleton class="w-full h-4 rounded-full" />
                        </div>
                    </CardContent>
                    <CardFooter class="opacity-20">
                        <Skeleton class="w-[100px] h-4 rounded-full" />
                    </CardFooter>
                </Card>
            </template>
        </ClientOnly>
    </div>
</template>
