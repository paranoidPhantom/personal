<script lang="ts" setup>
const { toPDF } = useAppConfig();
</script>

<template>
    <Alert class="flex items-center gap-4 overflow-hidden">
        <ClientOnly>
            <NuxtLink to="/" class="mr-auto dark:invert-0 invert">
                <img src="/favicon.svg" class="w-12" alt="Logo" />
            </NuxtLink>
            <template v-if="!toPDF">
                <BaseLangSwitch data-aos="fade-left" data-aos-delay="100" />
                <BaseColorSwitch data-aos="fade-left" data-aos-delay="200" />
            </template>
            <template #fallback>
                <Skeleton class="w-[50px] h-8 rounded-full my-2 mr-auto" />
                <Skeleton class="w-[50px] h-8 rounded-full my-2" />
                <Skeleton class="w-[50px] h-8 rounded-full my-2" />
            </template>
        </ClientOnly>
    </Alert>
</template>

<style lang="scss" scoped></style>
