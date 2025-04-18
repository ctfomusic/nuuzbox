<template>
    <div class="flex items-center justify-between w-full">
        <div class="bg-white text-black w-full p-4">
            <div class="grid grid-cols-3 gap-4 ">
                <main class="col-span-full md:col-span-2 lg:col-span-2 group">
                    {{$route.params.id}} news content...
                    <LazyHeadlineBox />
                    <h1 class="pt-6 text-4xl font-black uppercase">{{ news_item.title }}</h1>
                    <div class="">
                        <span class="text-lg font-black">by</span> <span class="text-lg/6 text-yellow-400 font-black">{{ news_item.author }}</span><br>
                        <span class="text-thin text-sm/6 text-black">{{ news_item.published }}</span>
                    </div>
                    <div class="text-sm pt-4">
                        {{ news_item.article }}
                    </div>
                    
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
const route = useRoute()
console.log(route.params) // { id: '123' }
const app = useAppConfig();
const { data: { news_item } } = app
// const app = useAppConfig();
// const { data: { items } } = app
// export default {
//     props: [
//       'newsData'
//     ]
//   }
</script>
