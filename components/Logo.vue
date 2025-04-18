<template>
    <NuxtLink to="/" aria-label="video details">
        <img src="/nuuzbox-logo-2025.png" class="w-[200px] h-fit grayscale-[1] dark:grayscale-[0] invert-[.99] dark:invert-[0]" alt="Nuuzbox logo"  >
    </NuxtLink>
</template>

<script setup>
const app = useAppConfig();
const { data: { logo } } = app
</script>
