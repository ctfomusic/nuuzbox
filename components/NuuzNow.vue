<template>
    <div class="flex flex-col">
        <template v-for="(headline, index) in all_headlines" :key="index">
            <NuxtLink v-bind:to="'news/'+headline.path" aria-label="sub headline">
                <div
                    class="flex flex-row gap-4 mb-4 dark:hover:text-yellow-300 hover:text-zinc-950 hover:bg-black dark:hover:bg-black cursor-pointer">
                    <div
                        class="flex flex-row gap-4 text-2xl/6 font-black uppercase  text-black dark:text-black dark:hover:text-yellow-300 hover:text-zinc-950 ">
                        <NuxtImg :src="headline.imgURL"
                            :placeholder="img(`${headline.imgURL}`, { h: 20, w: 20, blur: 16, q: 90 })" fit="cover"
                            class="size-32 object-center object-cover cursor-pointer dark:text-black dark:hover:text-yellow-300 hover:text-zinc-950"
                            alt="image-work" loading="lazy" />
                        <div class="ml-1">
                            <div>
                                {{headline.text }}
                            </div>
                            <div class="text-sm font-thin">News | Apr 10, 2025, 12:00 AM PDT</div>
                        </div>

                    </div>
                </div>
            </NuxtLink>
        </template>

    </div>
</template>

<script setup>
const img = useImage();
const app = useAppConfig();
const { data: { all_headlines } } = app
</script>