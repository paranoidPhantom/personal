// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        "@nuxt/fonts",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxt/icon",
        "@nuxtjs/i18n",
        "@nuxtjs/color-mode",
        "nuxt-aos",
        "@nuxtjs/mdc",
        "@nuxtjs/seo",
    ],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: "./app/components/ui",
    },
    site: {
        url: "https://andreihudalla.ru",
        name: "Andrei Hudalla",
    },
    future: {
        compatibilityVersion: 4,
    },
    css: ["@/assets/scss/global.scss"],
    mdc: {
        headings: {
            anchorLinks: false,
        },
    },
    i18n: {
        vueI18n: "./i18n.config.ts",
        strategy: "no_prefix",
        defaultLocale: "en",
        locales: ["en", "ru"],
    },
    colorMode: {
        preference: "system", // default value of $colorMode.preference
        fallback: "dark", // fallback value if not system preference found
        hid: "nuxt-color-mode-script",
        globalName: "__NUXT_COLOR_MODE__",
        componentName: "ColorScheme",
        classPrefix: "",
        classSuffix: "",
        storageKey: "nuxt-color-mode",
    },
});
