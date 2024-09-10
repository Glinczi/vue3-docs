import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Docs",
  description: "Vue3",
  base:'/vu3-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'docs', link: '/Bases/Ref' },
    ],

    sidebar: [
      {
        text: 'Bases',
        items: [
          { text: 'Ref', link: '/Bases/Ref' },
          { text: 'Reactive', link: '/Bases/Reactive' },
          { text: 'To..', link: '/Bases/To' },
          { text: 'computed', link: '/Bases/computed' },
          { text: 'watch', link: '/Bases/watch' },
          { text: 'watchEffect', link: '/Bases/watchEffect' },
          { text: '生命周期', link: '/Bases/liftCircle' },
          { text: '父子传参', link: '/Bases/sendProps' },
          { text: '组件', link: '/Bases/component' },
          { text: '动态组件', link: '/Bases/dynamicComponent' },
          { text: '插槽', link: '/Bases/slot' },
          { text: '异步组件', link: '/Bases/asyncComponent' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
