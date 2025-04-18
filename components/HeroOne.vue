<template>
    <div class="flex md:items-center justify-between gap-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full">
        <div class="text-yellow-300 dark:text-yellow-300">
            <LazyHeadlineBox />
        </div>
        <div class="text-yellow-300 dark:text-yellow-300 md:border-l md:border-black dark:md:border-yellow-300">
            <LazyThreeHeadlineBox />
        </div>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { items } } = app
</script>
