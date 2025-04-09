<script lang="ts" setup>
const { locale } = useI18n();

const skills = [
    {
        name: "TypeScript",
        link: "https://typescriptlang.org/",
        icon: "logos:typescript-icon",
        category: {
            en: "Frontend",
            ru: "Фронтенд",
        },
        description: {
            en: "cuz like not js",
            ru: "ну не js же",
        },
    },
    {
        name: "SCSS",
        link: "https://sass-lang.com",
        icon: "logos:sass",
        category: {
            en: "Frontend",
            ru: "Фронтенд",
        },
        description: {
            en: "cuz like not css",
            ru: "ну не ванильный же css",
        },
    },
    {
        name: "Vue 3",
        link: "https://vuejs.org/",
        icon: "logos:vue",
        category: {
            en: "Frontend",
            ru: "Фронтенд",
        },
        description: {
            en: "best frontend framework, except like maybe solid",
            ru: "лучший фрейм кроме мб solid",
        },
    },
    {
        name: "Nuxt 3",
        link: "https://nuxt.com/",
        icon: "logos:nuxt-icon",
        category: {
            en: "Frontend",
            ru: "Фронтенд",
        },
        description: {
            en: "vue with ssr and auto-imports is all i need",
            ru: "я дурею с этой прикормки (vue + ssr + магия)",
        },
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com",
        icon: "logos:tailwindcss-icon",
        category: {
            en: "Frontend",
            ru: "Фронтенд",
        },
        description: {
            en: "relative w-full rounded-lg border p-4 bg-background text-foreground sm:w-[calc(50%-4px)]",
            ru: "relative w-full rounded-lg border p-4 bg-background text-foreground sm:w-[calc(50%-4px)]",
        },
    },
    {
        name: "Electron",
        link: "https://electronjs.org",
        icon: "logos:electron",
        category: {
            en: "Frontend",
            ru: "Фронтенд",
        },
        description: {
            en: "package your shitty web app into an even shittier desktop app",
            ru: "1. делаем веб-приложение 2. пакуем его с хромом 3. продаём гоям под видом десктопа",
        },
    },
    {
        name: "Docker",
        link: "https://docker.com/",
        icon: "logos:docker-icon",
        category: {
            en: "DevOps",
            ru: "DevOps",
        },
        description: {
            en: "can't live without containers",
            ru: "база. без конейнеризации теперь даже из дома не выхожу",
        },
    },
    {
        name: "Cloudflare",
        link: "https://cloudflare.com",
        icon: "logos:cloudflare-icon",
        category: {
            en: "SaaS",
            ru: "SaaS",
        },
        description: {
            en: "a saas as a skill lmao what",
            ru: "вот это скилл (учился этому saas полгода)",
        },
    },
    {
        name: "GitHub Actions",
        link: "https://github.com/features/actions/getting-started",
        icon: "logos:github-actions",
        category: {
            en: "DevOps",
            ru: "DevOps",
        },
        description: {
            en: "gitlab is better tbf",
            ru: "гитлаб получше будет увы",
        },
    },
    {
        name: "Supabase",
        link: "https://supabase.com",
        icon: "logos:supabase-icon",
        category: {
            en: "SaaS",
            ru: "Saas",
        },
        description: {
            en: "i like it if i gotta get something deployed fast and still have auth",
            ru: "если времени мало а авторизация, постгря и s3 нужно, с пивом покатит",
        },
    },
    {
        name: "Nginx",
        link: "https://nginx.org",
        icon: "logos:nginx",
        category: {
            en: "DevOps",
            ru: "DevOps",
        },
        description: {
            en: "high-performance web server",
            ru: "высокопроизводительный веб-сервер",
        },
    },
    {
        name: "Grafana",
        link: "https://grafana.com",
        icon: "logos:grafana",
        category: {
            en: "DevOps",
            ru: "DevOps",
        },
        description: {
            en: "yay let's visualize your python app failing",
            ru: "круто визуализирует как твой 'проект' на питоне падает",
        },
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org",
        icon: "logos:postgresql",
        category: {
            en: "Backend",
            ru: "Бэкенд",
        },
        description: {
            en: "reliable and robust database",
            ru: "надежная и мощная база данных",
        },
    },
    {
        name: "Node.js",
        link: "https://nodejs.org",
        icon: "logos:nodejs-icon",
        category: {
            en: "Backend",
            ru: "Бэкенд",
        },
        description: {
            en: "index.js was a mistake",
            ru: "index.js было ошибкой",
        },
    },
];
const { toPDF } = useAppConfig();
</script>

<template>
    <div class="__history flex flex-col gap-4 my-4">
        <template v-if="!toPDF">
            <hr />
            <h3 class="text-2xl">{{ $t("contact") }}</h3>
            <div class="flex items-center gap-2">
                <NuxtLink to="https://t.me/paranoidPhantom">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="outline">
                                    <Icon name="mingcute:telegram-fill" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ $t("telegram") }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </NuxtLink>
                <NuxtLink to="https://vk.com/paranoidphantom">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="outline">
                                    <Icon name="akar-icons:vk-fill" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ $t("vk") }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </NuxtLink>
                <NuxtLink to="https://github.com/paranoidPhantom">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="outline">
                                    <Icon name="mdi:github" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ $t("github") }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </NuxtLink>
                <NuxtLink to="mailto:andrei@hudalla.dev">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="outline">
                                    <Icon name="mdi:email-fast" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ $t("mail") }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </NuxtLink>
            </div>
        </template>
        <hr />
        <h3 class="text-2xl">{{ $t("languages") }}</h3>
        <div class="flex gap-2">
            <Alert>
                <AlertTitle>{{ $t("english") }}</AlertTitle>
                <AlertDescription class="mt-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Badge variant="outline">C2</Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ $t("native_speaker") }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </AlertDescription>
            </Alert>
            <Alert>
                <AlertTitle>{{ $t("russian") }}</AlertTitle>
                <AlertDescription class="mt-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Badge variant="outline">C2</Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ $t("native_speaker") }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </AlertDescription>
            </Alert>
        </div>
        <Alert>
            <AlertTitle>JavaScript</AlertTitle>
            <AlertDescription class="mt-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Badge variant="outline">V8</Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{{ $t("noscript") }}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </AlertDescription>
        </Alert>
        <h3 class="text-2xl">{{ $t("skills") }}</h3>
        <div class="flex flex-wrap gap-2">
            <Alert
                v-for="skill in skills"
                :key="skill.name"
                class="sm:w-[calc(50%-4px)]"
            >
                <AlertTitle class="flex items-center flex-wrap">
                    <NuxtLink :to="skill.link" class="flex items-center">
                        <Icon :name="skill.icon" />
                        <Button variant="link">
                            {{ skill.name }}
                        </Button>
                    </NuxtLink>
                    <Badge variant="secondary">{{
                        skill.category[locale as "en" | "ru"]
                    }}</Badge>
                </AlertTitle>
                <AlertDescription class="mt-2">
                    <p class="opacity-60">
                        {{ skill.description[locale as "en" | "ru"] }}
                    </p>
                </AlertDescription>
            </Alert>
        </div>
    </div>
</template>
