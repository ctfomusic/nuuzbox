<template>
    <ul class="grid grid-cols-2 gap-1 marker:text-black list-disc w-full ml-4  ">

        <template v-for="(item, index) in headline_items" :key="index">
            <li class="hover:bg-yellow-300/60 mr-4">
                <NuxtLink v-bind:to="item.slug" aria-label="navigation"
                    class="h-full leading-10 hover:text-black hover:bg-yellow-300/60">
                    <div class="text-black text-base/5 font-thin p-2 ">{{ item.content }}</div>
                </NuxtLink>
            </li>
        </template>

    </ul>
</template>

<script setup>
const app = useAppConfig();
const { data: { headline_items } } = app
</script>
