<template>
    <div class="flex items-center gap-4">
        <NuxtLink v-if="instagram" :to="instagram" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-instagram"
                class="text-2xl text-zinc-950 hover:text-yellow-500 dark:text-yellow-300/60 dark:hover:text-yellow-300 "
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="x" :to="x" target="_blank">
            <UIcon name="i-simple-icons-x"
                class="text-2xl text-zinc-950 hover:text-yellow-500 dark:text-yellow-300/60 dark:hover:text-yellow-300"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="facebook" :to="facebook" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-facebook"
                class="text-2xl text-zinc-950 hover:text-yellow-500 dark:text-yellow-300/60 dark:hover:text-yellow-300"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="tiktok" :to="tiktok" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-tiktok"
                class="text-2xl text-zinc-950 hover:text-yellow-500 dark:text-yellow-300/60 dark:hover:text-yellow-300"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="website" :to="website" target="_blank" aria-label="Go to social network">
            <UIcon name="i-heroicons-globe-alt"
                class="text-2xl text-zinc-950 hover:text-yellow-500 dark:text-yellow-300/60 dark:hover:text-yellow-300"
                dynamic />
        </NuxtLink>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { instagram, x, facebook, github, tiktok, website } } = app
</script>
