<template>
    <div class="flex items-center justify-between  grid grid-cols-5  h-10 w-full text-center nomobile ">
        <template v-for="(item, index) in items" :key="index">
            <NuxtLink v-bind:to="item.path" aria-label="navigation"
                class="h-full leading-10 hover:text-black hover:bg-yellow-300/60"  :class="active === item.label ? 'bg-yellow-300/60' : ''">
                <div class="text-black  dark:hover:text-black hover:text-black" :class="active === item.label ? 'dark:text-black' : 'dark:text-yellow-300/60'">{{
                    item.label }}</div>
            </NuxtLink>
        </template>
    </div>

</template>

<script setup>
const props=defineProps(['active'])
const active=ref(props.active)

const app = useAppConfig();
const { data: { items } } = app

</script>
