<script lang="ts" setup>
const props = defineProps<{
    title: string;
    description?: string;
    image?: string;
}>();
</script>

<template>
    <div
        class="__og relative h-[600px] w-[1200px] bg-black flex text-white flex-row p-8"
        :class="{
            'items-center': !image,
            'justify-center': !image,
            'items-end': !!image,
        }"
    >
        <img
            v-if="image"
            class="absolute left-0 w-full top-0 h-full -z-0 opacity-20 object-cover"
            :src="image"
        />
        <img class="w-52 h-40 pl-8 object-contain" src="/favicon.svg" alt="" />
        <div class="h-32 bg-white w-[1px] mr-4 opacity-50 mb-4" />
        <div class="flex flex-col justify-end ml-4 mb-6 gap-2">
            <h4 class="text-2xl my-0">{{ title }}</h4>
            <p class="opacity-70 max-w-96 truncate my-0">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
