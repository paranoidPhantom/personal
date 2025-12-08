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
        "@nuxtjs/i18n",
        "@nuxt/icon",
        "@nuxtjs/seo",
    ],
    site: {
        name: "Andrei Hudalla",
        url: "https://hudalla.dev",
    },
    sitemap: {
        sources: ["/api/__sitemap__/urls"],
    },
    css: ["@/assets/css/index.scss"],
    i18n: {
        defaultLocale: "en",
        locales: [
            { code: "en", name: "English", file: "en.json" },
            { code: "ru", name: "Русский", file: "ru.json" },
        ],
    },
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
