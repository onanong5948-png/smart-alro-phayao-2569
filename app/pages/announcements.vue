<template>
  <div class="mx-auto max-w-6xl px-4 py-10">
    <SectionTitle kicker="News" title="ข่าวสาร / ประกาศ" subtitle="Placeholder — ข่าวตัวอย่าง ระบบจริงจะดึงจากประกาศ ส.ป.ก." />
    <div class="grid gap-4 md:grid-cols-3">
      <NewsCard v-for="a in announcements" :key="a.id" :item="a" />
    </div>
    <div class="mt-8 flex flex-col items-center gap-2 rounded-2xl bg-pine-950 p-6 text-center">
      <p class="font-bold text-white">มีข้อสงสัยเกี่ยวกับประกาศ? สอบถามเจ้าหน้าที่ได้โดยตรง</p>
      <NuxtLink to="/contact" class="rounded-xl bg-gold-400 px-6 py-2.5 font-bold text-pine-950 hover:bg-gold-100">
        📞 ไปหน้าติดต่อ →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { announcements } from '~/data/announcements'
useHead({ title: 'ข่าวสาร | Smart ALRO Phayao' })
</script>
