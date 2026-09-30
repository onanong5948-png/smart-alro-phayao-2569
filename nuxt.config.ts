// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: ['.trycloudflare.com'] }
  },
  app: {
    head: {
      title: 'Smart ALRO Phayao | ผู้ช่วยเกษตรกร ส.ป.ก. พะเยา',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Smart ALRO Phayao - ต้นแบบระบบผู้ช่วยเกษตรกร สำนักงานการปฏิรูปที่ดินจังหวัดพะเยา'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&family=Sarabun:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  }
})
