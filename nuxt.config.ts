// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    experimental: {
        componentIslands: true,
    },
    devtools: { enabled: true },
    modules: [
        "@nuxt/fonts",
        "@nuxtjs/tailwindcss",
        "shadcn-nuxt",
        "@nuxt/icon",
        "@nuxtjs/i18n",
        "@nuxtjs/color-mode",
        "nuxt-aos",
        "@nuxt/content",
        "@nuxtjs/seo",
        "@nuxt/image",
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
        url: "https://hudalla.dev",
        name: "Andrei Hudalla",
    },
    app: {
        pageTransition: {
            name: "page",
            mode: "out-in",
        },
    },
    routeRules: {
        "/read/**": {
            isr: 1200,
        },
    },
    icon: {
        mode: "svg",
        serverBundle: {
            remote: "jsdelivr",
        },
    },
    future: {
        compatibilityVersion: 4,
    },
    css: ["@/assets/scss/global.scss"],
    content: {
        markdown: {
            anchorLinks: false,
            remarkPlugins: ["remark-math"],
            rehypePlugins: ["rehype-mathjax"],
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
