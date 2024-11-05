<script lang="ts" setup>
const { locale } = useI18n();

const { data: contentList } = await useAsyncData(
    `content-list-${locale}`,
    async () => {
        const contentQuery = await queryContent(locale.value)
            .without(["body"])
            .sort({
                index: -1,
            })
            .find();
        return contentQuery;
    },
    {
        watch: [locale],
    }
);
</script>

<template>
    <div class="__history flex flex-col gap-4 my-4">
        <hr />
        <ClientOnly>
            <Card
                v-for="(item, index) in contentList ?? []"
                :key="`${locale}-${index}`"
                data-aos="fade-up"
                :data-aos-delay="200 * index"
            >
                <CardHeader>
                    <NuxtImg
                        class="absolute top-0 left-0 w-full h-auto object-cover rounded-t-lg"
                        v-show="item.image"
                        :src="item.image"
                        alt="Cover graphic"
                        width="400px"
                        style="
                            mask-image: linear-gradient(
                                to bottom,
                                black 0%,
                                black 95%,
                                transparent 100%
                            );
                        "
                    />
                    <NuxtImg
                        class="opacity-0"
                        v-show="item.image"
                        :src="item.image"
                        alt="Cover graphic"
                    />
                    <CardTitle>{{ item.title }}</CardTitle>
                    <CardDescription>{{ item.description }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <MDFormatter>
                        <ContentDoc :path="item._path">
                            <template #empty> </template>
                        </ContentDoc>
                    </MDFormatter>
                </CardContent>
                <CardFooter class="opacity-20">{{ item.date }}</CardFooter>
            </Card>
            <template #fallback>
                <Card v-for="i in (contentList ?? []).length" :key="i">
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
