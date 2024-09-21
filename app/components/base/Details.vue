<template>
    <div class="__history flex flex-col gap-4 my-4">
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
    </div>
</template>
