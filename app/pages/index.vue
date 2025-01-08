<script lang="ts" setup>
defineOgImage({
    component: "OGImage",
    props: {
        title: "Andrei Hudalla",
    },
    emojis: "fluent-emoji",
    cacheMaxAgeSeconds: 7200,
});

const { seo } = useAppConfig();

const descriptionPicked =
    seo.descriptions[Math.floor(Math.random() * seo.descriptions.length)];

useSeoMeta({
    description: descriptionPicked,
    ogDescription: descriptionPicked,
    twitterDescription: descriptionPicked,
});
</script>

<template>
    <div class="__home">
        <Tabs default-value="history" class="my-4">
            <TabsList>
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

<style lang="scss" scoped></style>
