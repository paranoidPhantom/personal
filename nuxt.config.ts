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
    routeRules: {
        "/": {
            static: true,
        },
        "/project/12.02": {
            redirect: {
                to: "https://www.figma.com/deck/TtosMMutyV6GFrmSrMrHVf/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BD%D1%8B%D0%B5-%D0%B2%D0%BE%D0%BB%D0%BD%D1%8B?node-id=0-1&t=kBs1WQw9biGP0GW1-1",
                statusCode: 308,
            },
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
