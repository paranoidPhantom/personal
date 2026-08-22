<script lang="ts" setup>
defineProps<{
    url: string;
}>();

const drawPDF = ref();

onMounted(() => {
    drawPDF.value =
        window.navigator.pdfViewerEnabled && window.innerWidth > 800;
});
</script>

<template>
    <div class="__presentation my-4">
        <iframe
            v-if="drawPDF === true"
            style="
                width: 100%;
                aspect-ratio: 16/9;
                border-radius: var(--radius);
            "
            :src="url"
        />
        <a
            v-else
            :href="url"
            :download="url.replaceAll('/', '-').replace('-', '')"
        >
            {{ $t("download_presentation") }}
        </a>
    </div>
</template>

<style lang="scss" scoped></style>
