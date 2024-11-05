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
            en: "Incrementaly self-taught. Very good, very nice.",
            ru: "Постепенно выучил интуитивно. Вещь крутая, использую везде.",
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
            en: "First frontend framework I learned. 0 regrets.",
            ru: "Первый фронтенд-фреймворк, который я выучил. Ни о чём не сожалею.",
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
            en: "Learned it. Now I can self-host anything. I love it.",
            ru: "Выучил потому-что это база. Теперь я могу селф-хостить всё что захочу. Супер гуд.",
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
            en: "Found this to be my go-to tool for building any type of web-app.",
            ru: "Этот фрейм - мой основной инструмент для создания любого вида веб-приложений.",
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
