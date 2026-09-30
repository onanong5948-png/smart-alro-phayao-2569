<template>
  <div class="mx-auto max-w-6xl px-4 py-10">
    <p class="text-xs font-bold uppercase tracking-widest text-amber-600">Smart Service</p>
    <h1 class="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">เลือกประเภทปัญหาหรือบริการ</h1>
    <p class="mt-1 text-sm text-slate-500">แตะการ์ดหมวดที่ตรงกับความต้องการ เพื่อดูขั้นตอน เอกสาร และแบบฟอร์ม</p>

    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CategoryCard v-for="c in categories" :key="c.id" :category="c" />
    </div>

    <SectionTitle
      class="mt-12"
      kicker="All services"
      title="บริการทั้งหมด"
      subtitle="หรือเลือกบริการเฉพาะเรื่องได้โดยตรง"
    />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceCard v-for="s in services" :key="s.id" :service="s" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories, services } from '~/data/services'
useHead({ title: 'Smart Service | Smart ALRO Phayao' })
</script>
