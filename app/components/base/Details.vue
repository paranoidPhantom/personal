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
            en: "Used it for the first time in the context of Vite + Vue 3, I enabled it for good practice and incrementaly taught myself the language without following any real course on it.",
            ru: "Впервые использовал в контексте Vite + Vue 3, включил чтобы соответствовать хорошим практикам и постепенно выучил язык самостоятельно, не следуя какому-либо полноценному курсу.",
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
            en: "Decided on it as my first frontend framework. Have been using it for over a year. Understand complex reactivity and use the Composition API.",
            ru: "Выбрал его в качестве своего первого фронтенд-фреймворка. Пользуюсь уже более года. Хорошо разбираюсь в реактивности и использую 'Composition API'.",
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
            en: "Had to learn it when self-hosting Supabase for my school's website. Have written a good number of Dockerfiles, and compose files, understand the fundamentals of networks, volumes, etc.",
            ru: "Пришлось выучить, когда самостоятельно развертывал Supabase на школьном сервере. Написал достаточно много Dockerfile’ов и compose-файлов, понимаю фундаментально как работают и взаимодействуют контейнеры.",
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
                class="w-[calc(50%-4px)]"
            >
                <AlertTitle class="flex items-center">
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
