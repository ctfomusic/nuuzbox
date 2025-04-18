export default defineAppConfig({
  ui: {
    primary: "emerald",
    gray: "zinc",
    avatar: {
      size: {
        "3xl": "size-32 2xl:size-36 text-4xl",
      },
    },
  },
  data: {
    name: "Nuuzbox",
    photo: "https://avatars.githubusercontent.com/u/44076866?v=4",
    title: "Front End Developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    search: "https://google.com",
    website: "https://cesswhite.com",
    phone: "+44 7728885165",
    email: "ctfomusician@gmail.com",
    x: "",
    facebook: "https://www.facebook.com/ecostudiodev",
    instagram: "https://www.instagram.com/ecostudios_dev/",
    tiktok: "https://cesswhite.com",
    github: "https://github.com/cesswhite/hato-minimal-template",
    headlines: [
      {
        text: "Normally, both your asses would be dead as fucking fried chicken",
        path: "your-dumb-ass",
        imgURL:
          "https://www.itl.cat/pngfile/big/294-2943804_photo-wallpaper-characters-tarantino-pulp-fiction-pulp-fiction.jpg",
      },
    ],
    three_headlines: [
      {
        text: "Normally, both your asses would be dead as fucking fried chicken",
        imgURL:
          "https://www.canvasartrocks.com/cdn/shop/products/Banksy_Pulp_Fiction_Banana_Guns_Wall_Mural_Wallpaper_a.jpg?v=1735834107",
          path: "your-dumb-ass",
      },
      {
        text: "You think water moves fast? You should see ice",
        imgURL: "https://images.alphacoders.com/589/589023.jpg",
        path: "your-dumb-ass",
      },
      {
        text: "Your bones don't break, mine do. That's clear.",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        path: "your-dumb-ass",
      },
    ],
    images: [
      "1495745713439-7efd16a9555c",
      "1563124488-159c05ebb7e5",
      "1617659258448-f2711883be96",
      "1583144584182-1717fab24b1e",
      "1501975558162-0be7b8ca95ea",
      "1495745713439-7efd16a9555c",
      "1563124488-159c05ebb7e5",
      "1617659258448-f2711883be96",
      "1583144584182-1717fab24b1e",
      "1501975558162-0be7b8ca95ea",
      "1495745713439-7efd16a9555c",
      "1563124488-159c05ebb7e5",
      "1617659258448-f2711883be96",
      "1583144584182-1717fab24b1e",
      "1501975558162-0be7b8ca95ea",
    ],
    items: [
      {
        label: "news",
        path: "/news",
        type: "label",
      },
      {
        label: "singles",
        path: "/singles",
        icon: "i-lucide-book-open",
        children: [
          {
            label: "Introduction",
            description: "Fully styled and customizable components for Nuxt.",
            icon: "i-lucide-house",
          },
          {
            label: "Installation",
            description:
              "Learn how to install and configure Nuxt UI in your application.",
            icon: "i-lucide-cloud-download",
          },
          {
            label: "Icons",
            icon: "i-lucide-smile",
            description:
              "You have nothing to do, @nuxt/icon will handle it automatically.",
          },
          {
            label: "Colors",
            icon: "i-lucide-swatch-book",
            description:
              "Choose a primary and a neutral color from your Tailwind CSS theme.",
          },
          {
            label: "Theme",
            icon: "i-lucide-cog",
            description:
              "You can customize components by using the `class` / `ui` props or in your app.config.ts.",
          },
        ],
      },
      {
        label: "videos",
        path: "/videos",
        icon: "i-lucide-database",
        children: [
          {
            label: "defineShortcuts",
            icon: "i-lucide-file-text",
            description: "Define shortcuts for your application.",
            to: "/composables/define-shortcuts",
          },
          {
            label: "useOverlay",
            icon: "i-lucide-file-text",
            description: "Display a modal/slideover within your application.",
            to: "/composables/use-overlay",
          },
          {
            label: "useToast",
            icon: "i-lucide-file-text",
            description: "Display a toast within your application.",
            to: "/composables/use-toast",
          },
        ],
      },
      {
        label: "reviews",
        path: "reviews",
        icon: "i-lucide-box",
        to: "/components",
        active: true,
        defaultOpen: true,
        children: [
          {
            label: "Link",
            icon: "i-lucide-file-text",
            description: "Use NuxtLink with superpowers.",
            to: "/components/link",
          },
          {
            label: "Modal",
            icon: "i-lucide-file-text",
            description: "Display a modal within your application.",
            to: "/components/modal",
          },
          {
            label: "NavigationMenu",
            icon: "i-lucide-file-text",
            description: "Display a list of links.",
            to: "/components/navigation-menu",
          },
          {
            label: "Pagination",
            icon: "i-lucide-file-text",
            description: "Display a list of pages.",
            to: "/components/pagination",
          },
          {
            label: "Popover",
            icon: "i-lucide-file-text",
            description:
              "Display a non-modal dialog that floats around a trigger element.",
            to: "/components/popover",
          },
          {
            label: "Progress",
            icon: "i-lucide-file-text",
            description: "Show a horizontal bar to indicate task progression.",
            to: "/components/progress",
          },
        ],
      },
      {
        label: "editorials",
        path: "/editorials",
      },
      // {
      //   label: "releases",
      //   path: "releases",
      // },
    ],
    headline_items: [
      {
        content:
          "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell...",
        slug: "/news/mr-glass",
        type: "headline_text",
      },
      {
        content:
          "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? ",
        slug: "/news/infant-named-jeb",
        type: "headline_text",
      },
      {
        content:
          "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. ",
        slug: "/news/vengeance-upon-thee",
        type: "headline_text",
      },
      {
        content:
          "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. ",
        slug: "/news/proud-of-that-shit",
        type: "headline_text",
      },
      {
        content:
          "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. ",
        slug: "/news/just-on-opposite-ends",
        type: "headline_text",
      },
      {
        content:
          "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. ",
        slug: "/news/candle-to-man",
        type: "headline_text",
      },
      {
        content:
          "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you...",
        slug: "/news/your-dumb-ass",
        type: "headline_text",
      },
      {
        content:
          "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it...",
        slug: "/news/you-understand",
        type: "headline_text",
      },
    ],
    all_headlines: [
      {
        text: "Normally, both your asses would be dead as fucking fried chicken",
        imgURL:
          "https://www.canvasartrocks.com/cdn/shop/products/Banksy_Pulp_Fiction_Banana_Guns_Wall_Mural_Wallpaper_a.jpg?v=1735834107",
        path: "your-dumb-ass",
      },
      {
        text: "You think water moves fast? You should see ice",
        imgURL: "https://images.alphacoders.com/589/589023.jpg",
        path: "your-dumb-ass",
      },
      {
        text: "Your bones don't break, mine do. That's clear.",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        path: "your-dumb-ass",
      },
    ],
    video_items: [
      {
        title: "Now that we know who you are...",
        artist: "Pulp",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/mr-glass",
        type: "headline_text",
      },
      {
        title: "Do you see any Teletubbies...",
        artist: "Fiction",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/infant-named-jeb",
        type: "headline_text",
      },
      {
        title: "The path of the righteous man is...",
        artist: "Is The",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/vengeance-upon-thee",
        type: "headline_text",
      },
      {
        title: "Now that there is the Tec-9...",
        artist: "Best Film",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/proud-of-that-shit",
        type: "headline_text",
      },
      {
        title: "Your bones don't break, mine do...",
        artist: "Pulp Fiction",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/just-on-opposite-ends",
        type: "headline_text",
      },
      {
        title: "You think water moves fast...",
        artist: "Art Art Art",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/candle-to-man",
        type: "headline_text",
      },
      {
        title: "Normally, both your asses would be dead...",
        artist: "Sam L Jackson",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/your-dumb-ass",
        type: "headline_text",
      },
      {
        title: "My money's in that office, right...",
        artist: "Jules Wigfield",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/you-understand",
        type: "headline_text",
      },
    ],
    news_item: {
      title: "My money's in that office, right...",
      author: "Jules Wigfield",
      imgURL:
        "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
      slug: "/you-understand",
      type: "news_item",
      article:
        "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.",
      published: "Apr 11, 2005, 6:00AM JMT",
      authorSocial: {
        instagram: "instagram",
        facebook: "facebook",
        tiktok: "tiktok",
      },
    },
    singles: [
      {
        title: "Now that we know who you are...",
        artist: "Pulp",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/mr-glass",
        published: "Apr 11, 2005, 6:00AM JMT",
        type: "headline_text",
        rating: 5,
      },
      {
        title: "Do you see any Teletubbies...",
        artist: "Fiction",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        slug: "/infant-named-jeb",
        published: "Apr 11, 2005, 6:00AM JMT",
        type: "headline_text",
        rating: 2,
      },
      {
        title: "The path of the righteous man is...",
        artist: "Is The",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        published: "Apr 11, 2005, 6:00AM JMT",
        slug: "/vengeance-upon-thee",
        type: "headline_text",
        rating: 3,
      },
      {
        title: "Now that there is the Tec-9...",
        artist: "Best Film",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        published: "Apr 11, 2005, 6:00AM JMT",
        slug: "/proud-of-that-shit",
        type: "headline_text",
        rating: 5,
      },
      {
        title: "Your bones don't break, mine do...",
        artist: "Pulp Fiction",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        published: "Apr 11, 2005, 6:00AM JMT",
        slug: "/just-on-opposite-ends",
        type: "headline_text",
        rating: 1,
      },
      {
        title: "You think water moves fast...",
        artist: "Art Art Art",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        published: "Apr 11, 2005, 6:00AM JMT",
        slug: "/candle-to-man",
        type: "headline_text",
        rating: 1,
      },
      {
        title: "Normally, both your asses would be dead...",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        artist: "Sam L Jackson",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        published: "Apr 11, 2005, 6:00AM JMT",
        slug: "/your-dumb-ass",
        type: "headline_text",
        rating: 2,
      },
      {
        title: "My money's in that office, right...",
        audioURL:"https://firebasestorage.googleapis.com/v0/b/chatbout001.appspot.com/o/users%2FL8s7DzpsAvabSIyNx0xxeuhuryM2%2Ffiles%2Fkali%20zing%202.mp3?alt=media&token=2e803498-4223-4c4b-a652-09bf82667ea6",
        artist: "Jules Wigfield",
        imgURL:
          "https://img.goodfon.com/wallpaper/big/c/99/kriminalnoe-chtivo-pulp-77.webp",
        published: "Apr 11, 2005, 6:00AM JMT",
        slug: "/you-understand",
        type: "headline_text",
        rating: 5,
      },
    ],
  },
});
