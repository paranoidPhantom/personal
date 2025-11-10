// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: [
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "nuxt-studio",
    ],
    css: ["@/assets/css/index.scss"],
    colorMode: {
        preference: "dark",
        fallback: "dark",
        classSuffix: "",
    },
    studio: {
        route: "/_studio",

        // GitHub repository configuration (owner and repo are required)
        repository: {
            provider: "github",
            owner: "paranoidPhantom",
            repo: "personal",
            branch: "master",
        },
    },
});
