<script lang="ts" setup>
import InteractiveHoverButton from "../ui/interactive-hover-button/InteractiveHoverButton.vue";
import RadiantText from "../ui/radient-text/RadiantText.vue";

const { locale } = useI18n();

const { data: contentList } = await useAsyncData(
    `content-list-${locale}`,
    async () => {
        const contentQuery = await queryCollection("content")
            .order("index", "DESC")
            .where("path", "LIKE", `/${locale.value}/%`)
            .all();
        return contentQuery;
    },
    {
        watch: [locale],
    }
);

const router = useRouter();
</script>

<template>
    <div
        class="__history flex flex-col gap-4 my-4 transition-opacity duration-200"
        :style="{
            opacity: router.currentRoute.value.path === '/' ? 1 : 0,
        }"
    >
        <hr />
        <ClientOnly>
            <Card
                v-for="(item, index) in contentList ?? []"
                :key="`${locale}-${index}`"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
            >
                <CardHeader>
                    <NuxtImg
                        class="absolute top-0 left-0 w-full h-auto object-cover rounded-t-lg"
                        v-show="item.image"
                        :src="item.image"
                        alt="Cover graphic"
                        width="1000px"
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
                    <CardTitle>
                        <RadiantText class="inline-flex max-w-full py-2">
                            <span>
                                {{ item.title }}
                            </span>
                        </RadiantText>
                    </CardTitle>
                    <CardDescription class="opacity-50">{{
                        item.description
                    }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <MDFormatter class="h-96 overflow-hidden relative">
                        <ContentRenderer :value="item.body" />
                        <div
                            class="bg-gradient-to-t from-background h-64 w-full absolute bottom-0 z-10 flex items-end from-20%"
                        >
                            <InteractiveHoverButton
                                :text="$t('read_more')"
                                @click="navigateTo(`/read${item.path}`)"
                            />
                        </div>
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
