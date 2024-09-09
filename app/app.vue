<script lang="ts" setup>
const server = useState("server", () => true);

onMounted(() => (server.value = false));
</script>

<template>
    <div class="__root">
        <BaseHeader />

        <Tabs default-value="history" class="my-4">
            <TabsList>
                <TabsTrigger value="history"> {{ $t("history") }} </TabsTrigger>
                <TabsTrigger value="contact"> {{ $t("contact") }} </TabsTrigger>
            </TabsList>
            <TabsContent value="history">
                <BaseHistory />
            </TabsContent>
            <TabsContent value="contact">
                <BaseContact />
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
