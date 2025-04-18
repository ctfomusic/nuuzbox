<template>
    <div class="flex items-center justify-between w-full">
        <div class="bg-white text-black w-full p-4">
            AD LOADING...
        </div>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { items } } = app
</script>
