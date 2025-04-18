<template>
    <div class="flex flex-col">
        <template v-for="(video, index) in video_items" :key="index">
            <NuxtLink v-bind:to="video.path" aria-label="video details">
                <div
                    class="flex flex-row gap-4 mb-4 dark:hover:text-yellow-300 hover:text-yellow-300 hover:bg-black dark:hover:bg-black cursor-pointer">
                    <div
                        class="flex flex-row gap-4 text-sm/6 font-black uppercase  text-black dark:text-black dark:hover:text-yellow-300 hover:text-yellow-300 ">
                        
                        <div class="ml-1">
                            <div class="text-sm font-thin">
                                {{video.title }}
                            </div>
                            <div class="text-sm font-thin">{{video.artist }}</div>
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