<script lang="ts" setup></script>

<template>
    <div class="md">
        <slot />
    </div>
</template>

<style lang="scss">
.md {
    // h1 - Main heading
    h1 {
        @apply scroll-m-20  text-4xl font-extrabold tracking-tight text-balance;
    }

    // h2 - Section heading
    h2 {
        @apply scroll-m-20 border-b border-neutral-200 dark:border-neutral-800 pt-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0;
    }

    // h3 - Subsection heading
    h3 {
        @apply scroll-m-20 text-2xl font-semibold tracking-tight;
    }

    // h4 - Minor heading
    h4 {
        @apply scroll-m-20 text-xl font-semibold tracking-tight;
    }

    // Paragraph
    p {
        @apply leading-7 [&:not(:first-child)]:mt-4;
    }

    // Blockquote
    blockquote {
        @apply mt-6 border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 italic;
    }
    // Table
    table {
        @apply w-full;

        thead {
            tr {
                @apply m-0 border-t border-neutral-200 dark:border-neutral-800 p-0 even:bg-neutral-100 dark:even:bg-neutral-900;
            }

            th {
                @apply border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right;
            }
        }

        tbody {
            tr {
                @apply m-0 border-t border-neutral-200 dark:border-neutral-800 p-0 even:bg-neutral-100 dark:even:bg-neutral-900;
            }

            td {
                @apply border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right;
            }
        }
    }

    // Unordered list
    ul {
        @apply my-6 ml-6 list-disc [&>li]:mt-2;
    }

    // Ordered list
    ol {
        @apply my-6 ml-6 list-decimal [&>li]:mt-2;
    }

    // Inline code
    code {
        @apply relative rounded bg-neutral-100 dark:bg-neutral-900 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold;
    }

    // Code block (pre > code)
    pre {
        @apply my-6 rounded-lg bg-neutral-100 dark:bg-neutral-900 p-4 overflow-x-auto;

        code {
            @apply bg-transparent p-0 font-normal;
        }
    }

    // Links
    a {
        @apply text-neutral-900 dark:text-neutral-100 underline underline-offset-4 hover:opacity-80;
    }

    // Horizontal rule
    hr {
        @apply my-8 border-t border-neutral-200 dark:border-neutral-800;
    }

    // Images
    img {
        @apply rounded-lg my-6 max-w-[500px];
    }
}
</style>
