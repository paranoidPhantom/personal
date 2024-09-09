<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline">
                    <Icon
                        name="line-md:moon-rising-filled-loop"
                        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Icon
                        name="line-md:sun-rising-filled-loop"
                        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span class="sr-only">{{ $t("toggletheme") }}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="colorMode.preference = 'light'">
                    {{ $t("light") }}
                </DropdownMenuItem>
                <DropdownMenuItem @click="colorMode.preference = 'dark'">
                    {{ $t("dark") }}
                </DropdownMenuItem>
                <DropdownMenuItem @click="colorMode.preference = 'system'">
                    {{ $t("system") }}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
</template>
