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

const cutoffIndex = 5;
</script>

<template>
    <div
        class="__history flex flex-col gap-4 my-4 transition-opacity duration-200"
        :style="{
            opacity: router.currentRoute.value.path === '/' ? 1 : 0,
        }"
    >
        <hr />
        <Card
            v-for="(item, index) in contentList?.map((post) => {
                post.body.value.splice(cutoffIndex, post.body.value.length);
                return post;
            }) ?? []"
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
                <MDFormatter class="h-auto overflow-hidden relative">
                    <ContentRenderer :value="item.body" />
                    <div
                        class="bg-gradient-to-t from-background h-64 w-full absolute bottom-0 z-10 flex items-end from-20%"
                    >
                        <BaseHistoryButton
                            :to="`/read${item.path}`"
                            :key="item.path"
                        />
                    </div>
                </MDFormatter>
            </CardContent>
            <CardFooter class="opacity-20">{{ item.date }}</CardFooter>
        </Card>
    </div>
</template>
