<template>
    <!-- <UContainer> -->
    <footer class="flex flex-wrap items-stretch justify-evenly bg-white dark:bg-black py-12 pl-4 relative z-20">
        <div class="border-r border-yellow-300  pr-4 pb-4">
            <LazyLogo />
            <div class="text-sm mb-4">copyright &copy; 2025 Nuuzbox | All Rights Reserved</div>
            <LazySocialNetwork />
        </div>
        <div class="flex flex-wrap items-baseline justify-evenly bg-white dark:bg-black md:pl-4  py-0 relative z-20 col-span-full md:col-span-2 lg:col-span-2">

            <div class="pr-4 font-black">
                <h3>SECTIONS</h3>
                                
                <div>
                    <NuxtLink to="/" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    Home
                </NuxtLink>
                </div>
                
                <div>
                    <NuxtLink to="/news" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    News
                </NuxtLink>
                </div>
                
                <div>
                    <NuxtLink to="/singles" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    Singles
                </NuxtLink>
                </div>
                
                <div>
                    <NuxtLink to="/videos" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    Videos
                </NuxtLink>
                </div>
                
                <div>
                    <NuxtLink to="/reviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    Reviews
                </NuxtLink>
                </div>
                
                <div>
                    <NuxtLink to="/interviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    Interviews
                </NuxtLink>
                </div>
                
                <div>
                    <NuxtLink to="/interviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    Editorials
                </NuxtLink>
                </div>
                
                <div>
                    <NuxtLink to="/interviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                    Releases
                </NuxtLink>
                </div>
            </div>
            <div class="pr-4 font-black">
                <h3>MORE INFO</h3>
                <div>
                    <NuxtLink to="/interviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                        Contact Us
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/interviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                        Advertising 
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/interviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                        Cookies Policy
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/interviews" 
                    class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
                        Privacy Policy
                    </NuxtLink>
                </div>
            </div>
        </div>
    </footer>
    <!-- </UContainer> -->
</template>


<script setup>
const app = useAppConfig();
const { data: { email, phone } } = app
</script>
