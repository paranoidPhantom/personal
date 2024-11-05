<script lang="ts" setup>
const server = useState("server", () => true);

onMounted(() => (server.value = false));

const { seo } = useAppConfig();

useSeoMeta({
    description: seo.description,
    ogDescription: seo.description,
    ogImage: seo.image,
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: seo.image,
    twitterCard: "summary",
});

useHead({
    link: [
        {
            rel: "icon",
            type: "image/svg",
            href: "/favicon.svg",
        },
    ],
});

const { toPDF } = useAppConfig();
</script>

<template>
    <div class="__root">
        <BaseHeader />

        <BaseDetails v-if="toPDF" />
        <Tabs default-value="history" class="my-4">
            <TabsList v-if="!toPDF">
                <TabsTrigger value="history"> {{ $t("history") }} </TabsTrigger>
                <TabsTrigger value="details"> {{ $t("details") }} </TabsTrigger>
            </TabsList>
            <TabsContent value="history">
                <BaseHistory />
            </TabsContent>
            <TabsContent value="details">
                <BaseDetails />
            </TabsContent>
        </Tabs>
    </div>
</template>

<style lang="scss" scoped>
.__root {
    max-width: 800px;
    width: calc(100% - 2rem);
    margin: 1rem auto;
}
</style>
