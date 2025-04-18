<template>
    <div class="flex flex-col">
        <template v-for="(video_item, index) in video_items" :key="index">
            <NuxtLink v-bind:to="video_item.path" aria-label="sub video_item">
                <div
                    class="flex flex-row gap-4 mb-4 dark:hover:text-yellow-300 hover:text-zinc-950 hover:bg-black dark:hover:bg-black cursor-pointer">
                    <div
                        class="flex flex-row gap-4 text-2xl/6 font-black uppercase  text-black dark:text-black dark:hover:text-yellow-300 hover:text-zinc-950 ">
                        <NuxtImg :src="video_item.imgURL"
                            :placeholder="img(`${video_item.imgURL}`, { h: 20, w: 20, blur: 16, q: 90 })" fit="cover"
                            class="size-32 object-center object-cover cursor-pointer dark:text-black dark:hover:text-yellow-300 hover:text-zinc-950"
                            alt="image-work" loading="lazy" />
                        <div class="ml-1">
                            <div>
                                {{video_item.title }}
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
const { data: { video_items } } = app
</script>