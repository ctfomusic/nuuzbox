<template>
    <div class="flex items-center justify-between w-full">
        <div class="bg-white text-black w-full p-4">
            <div class="grid grid-cols-3 gap-4 ">
                <main class="col-span-full md:col-span-2 lg:col-span-2 group">
                    main content...
                    <LazyNuuzHeadlines/>
                    <LazyNuuzNow/>
                </main>
                <aside class="col-span-full md:col-span-1 lg:col-span-1">
                    aside...
                    <LazyNuuzSingles />
                    <LazyNuuzVideos />
                    <LazyNuuzReviews/>
                </aside>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { items } } = app
</script>
