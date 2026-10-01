<template>
  <div class="mx-auto max-w-4xl px-4 py-10">
    <h1 class="text-2xl font-bold text-ink">🔍 ค้นหาบริการ</h1>
    <p class="mt-1 text-sm text-mist">Placeholder — ระบบค้นหาแบบเต็มจะมาในขั้นถัดไป ตอนนี้กรองจากข้อมูลตัวอย่างได้</p>
    <input
      v-model="q"
      type="search"
      placeholder="พิมพ์คำค้น เช่น 4-01, มรดก, กู้ยืม…"
      class="mt-6 w-full rounded-2xl border border-pine-950/15 bg-white px-5 py-3.5 shadow-sm outline-none focus:ring-2 focus:ring-pine-900"
    />
    <div class="mt-6 flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-r from-gold-100 to-sage-100 p-5 text-center ring-1 ring-gold-400/40 sm:flex-row sm:text-left">
      <p class="flex-1 text-sm text-ink/70">🤔 ยังไม่แน่ใจว่าต้องค้นเรื่องอะไร? ให้ระบบช่วยเลือกจากคำถามสั้น ๆ</p>
      <NuxtLink to="/guide" class="shrink-0 rounded-xl bg-pine-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-pine-950">
        ไปหน้าช่วยเลือกเรื่อง →
      </NuxtLink>
    </div>
    <div v-if="catResults.length" class="mt-6">
      <h2 class="mb-3 font-bold text-pine-900">หมวดบริการที่ตรงกัน</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <CategoryCard v-for="c in catResults" :key="c.id" :category="c" />
      </div>
    </div>
    <div v-if="results.length" class="mt-6">
      <h2 v-if="catResults.length" class="mb-3 font-bold text-pine-900">บริการที่ตรงกัน</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <ServiceCard v-for="s in results" :key="s.id" :service="s" />
      </div>
    </div>
    <p v-if="!results.length && !catResults.length" class="mt-6 rounded-2xl bg-white p-6 text-center text-mist shadow-sm">
      ไม่พบผลการค้นหา ลองคำอื่น เช่น “ที่ดิน” “กู้” “มรดก”
    </p>
  </div>
</template>

<script setup lang="ts">
import { categories, services } from '~/data/services'
const route = useRoute()
const q = ref((route.query.q as string) ?? '')
const results = computed(() => {
  const kw = q.value.trim()
  if (!kw) return services
  return services.filter((s) => (s.title + s.shortDesc).includes(kw))
})
const catResults = computed(() => {
  const kw = q.value.trim()
  if (!kw) return categories
  return categories.filter((c) => (c.title + c.desc).includes(kw))
})
useHead({ title: 'ค้นหา | Smart ALRO Phayao' })
</script>
