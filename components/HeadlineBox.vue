<template>
    <div class="flex flex-col items-center w-full">
        <template v-for="(headline, index) in headlines" :key="index">
            <NuxtLink v-bind:to="'news/' + headline.path" aria-label="headline">
                <NuxtImg :src="headline.imgURL"
                    :placeholder="img(`${headline.imgURL}`, { h: 20, w: 20, blur: 16, q: 90 })" fit="cover"
                    class="object-center object-cover cursor-pointer transform-gpu transition-all ease-in-out duration-150 will-change-transform group-hover:scale-102 group-hover:group-odd:rotate-2 group-hover:group-even:-rotate-2"
                    alt="image-work" loading="lazy" />
                <div class="text-2xl font-black text-black bg-yellow-300/60 dark:bg-yellow-300/60 p-4 w-full">{{ headline.text }}</div>
            </NuxtLink>
        </template>

    </div>
</template>

<script setup>
const img = useImage();
const app = useAppConfig();
const { data: { headlines } } = app
</script>