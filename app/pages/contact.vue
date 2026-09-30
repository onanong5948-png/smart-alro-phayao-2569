<template>
  <div class="mx-auto max-w-3xl px-4 py-10">
    <SectionTitle kicker="Contact" title="ติดต่อเรา" subtitle="Placeholder — ช่องทางตัวอย่าง เปลี่ยนเป็นข้อมูลจริงภายหลัง" />
    <div class="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
      <ul class="space-y-4 text-slate-700">
        <li>🏢 <strong>{{ contactInfo.org }}</strong></li>
        <li>📍 {{ contactInfo.address }}</li>
        <li>📞 {{ contactInfo.phone }}</li>
        <li>✉️ {{ contactInfo.email }}</li>
        <li>🕘 {{ contactInfo.hours }}</li>
      </ul>
      <a :href="contactInfo.mapUrl" target="_blank" class="mt-6 inline-block rounded-xl bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800">
        เปิดแผนที่ →
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactInfo } from '~/data/contact'
useHead({ title: 'ติดต่อ | Smart ALRO Phayao' })
</script>
