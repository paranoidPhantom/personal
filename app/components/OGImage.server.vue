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
        <img
            class="h-24 w-24 pl-8 object-contain drop-shadow-sm"
            src="/favicon.svg"
            alt=""
        />
        <div class="h-16 bg-white w-[1px] mx-4 opacity-50 mb-4" />
        <div class="flex flex-col gap-2 ml-4 mb-6">
            <h4 class="text-2xl">{{ title }}</h4>
            <p class="opacity-70 max-w-96 truncate">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
