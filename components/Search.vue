<template>
    <div class="flex items-center gap-4">
        <NuxtLink v-if="search" :to="search" target="_blank" aria-label="Search Nuuzbox">
            <UIcon name="i-lucide-search"
                class="text-2xl text-zinc-950 hover:text-yellow-500 dark:text-yellow-300/60 dark:hover:text-yellow-300"
                dynamic />
        </NuxtLink>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { search  } } = app
</script>
