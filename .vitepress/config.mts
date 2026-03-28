import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Ignis Studio",
  description: "CreeperIsSpy‘s Collaborating Organization",
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Us', link: '/about' },
      { text: 'View Projects', link: '/projects' },
      { text: 'Blog', link: 'https://blog.creeperspy.top' } 
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ignis-Stduio' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"/></svg>' }, link: 'mailto:org@creeperspy.top' }
    ],

    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Copyright © 2024-2026 Ignis-Studio'
    }
  }
})
