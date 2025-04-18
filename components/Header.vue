<template>
    <header class="flex flex-row items-center justify-between mb-4">

        <div class="nomobile">
            <LazySocialNetwork />
        </div>

        <div class="mobile">
            <LazyMobileMenu />
        </div>

        <LazyLogo />
        <LazySearch />
    </header>

</template>

<script setup>



useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: '/favicon.svg'
    }
  ]
})
</script>