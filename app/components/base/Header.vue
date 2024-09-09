<script lang="ts" setup>
const server = useState("server", () => true);
</script>

<template>
    <Alert class="flex items-center gap-4 overflow-hidden">
        <ClientOnly>
            <h1 data-aos="fade-right" class="fname mr-auto">
                {{ $t("name") }}
            </h1>
            <BaseLangSwitch data-aos="fade-left" data-aos-delay="100" />
            <BaseColorSwitch data-aos="fade-left" data-aos-delay="200" />
            <template #fallback>
                <Skeleton class="w-[220px] h-8 rounded-full my-2 mr-auto" />
                <Skeleton class="w-[50px] h-8 rounded-full my-2" />
                <Skeleton class="w-[50px] h-8 rounded-full my-2" />
            </template>
        </ClientOnly>
    </Alert>
</template>

<style lang="scss" scoped>
.fname {
    user-select: none;
    font-family: Advent Pro, sans-serif;
    font-size: 2rem;
}
</style>
