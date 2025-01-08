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
    <div class="__presentation">
        <iframe
            v-if="drawPDF === true"
            style="
                width: 100%;
                aspect-ratio: 16/9;
                border-radius: var(--radius);
            "
            :src="url"
        />
        <a :href="url" download="presentation.pdf" v-else>
            <Button>{{ $t("download_presentation") }}</Button>
        </a>
    </div>
</template>

<style lang="scss" scoped></style>
