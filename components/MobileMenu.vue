<template>
    <div class="nav-bar">
        <input id="menu-toggler" type="checkbox" class="menu-toggler">
        <label for="menu-toggler" class="show-menu">
            <span></span>
        </label>
        <nav class="nav">
            <ul class="nav__menu">
                <template v-for="(item, index) in items" :key="index">
                    <li class="nav__item">
                        <NuxtLink v-bind:to="item.path" aria-label="mobile navigation"
                        class="nav__link text-xl font-black uppercase text-black">
                        {{
                            item.label }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
        </nav>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { items } } = app
</script>
