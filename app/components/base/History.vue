<script lang="ts" setup>
const history: Array<{
    en: {
        title: string;
        description: string;
        article: string;
        date: string;
    };
    ru: {
        title: string;
        description: string;
        article: string;
        date: string;
    };
}> = [
    {
        en: {
            title: "Title",
            description: "Description",
            article: "# Hello world\n - test\n - test",
            date: "22.04.2023",
        },
        ru: {
            title: "Заголовок",
            description: "Описание",
            article: "# Привет мир\n - тест\n - тест",
            date: "22.04.2023",
        },
    },
];

const { locale } = useI18n();
</script>

<template>
    <div class="__history flex flex-col gap-4 my-4">
        <ClientOnly>
            <Card
                v-for="(item, index) in history"
                :key="`${locale}-${index}`"
                data-aos="fade-up"
                :data-aos-delay="200 * index"
            >
                <CardHeader>
                    <CardTitle>{{
                        item[locale as "en" | "ru"].title
                    }}</CardTitle>
                    <CardDescription>{{
                        item[locale as "en" | "ru"].description
                    }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <MDC :value="item[locale as 'en' | 'ru'].article" />
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
