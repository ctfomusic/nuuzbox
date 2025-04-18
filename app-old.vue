<template>
  <div class="w-full relative h-full pt-12 bg-zinc-50 dark:bg-zinc-950">
    <div class="relative z-20">
      <LazySwitchMode />
      <UContainer>
        <div v-motion-fade class="flex flex-col gap-2 items-center justify-center">
          <div class="border border-yellow-300 w-full p-4">
            <!-- <div class="flex flex-row items-center justify-between mb-4">
              <LazySocialNetwork />
              <LazyLogo />
              <LazySearch />
            </div> -->


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



            <div class="flex flex-row items-center justify-between border-t border-yellow-300">
              <LazyNavigation />
            </div>
          </div>
          <LazyGallery />
        </div>
      </UContainer>
    </div>
    <Footer />
    <img v-motion-fade-visible src="/shadow.png"
      class="object-cover object-center fixed w-full h-full left-0 top-0 z-10 dark:mix-blend-soft-light"
      alt="shadow-background" loading="lazy">
  </div>
</template>

<script setup>
const img = useImage()
useSeoMeta({
  title: 'Nuuzbox | Music News Showcase',
  ogTitle: 'Nuuzbox | Music News Showcase',
  description:
    'Discover Nuuzbox, the sleek music news portfolio website perfect for djs promoters, and artists powered by Muuzbox',
  ogDescription:
    'Discover Nuuzbox, the sleek portfolio website perfect for djs promoters, and artists powered by Muuzbox',
  ogImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  ogImageSecureUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  ogUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  twitterImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: 'Nuuzbox | Music News Showcase',
  twitterDescription: 'Discover Nuuzbox, the sleek music news portfolio website perfect for djs promoters, and artists powered by Muuzbox',
  ogImageWidth: 1280,
  ogImageHeight: 720,
});

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
