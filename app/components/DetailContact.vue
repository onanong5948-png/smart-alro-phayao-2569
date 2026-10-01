<template>
  <div class="mt-3 grid gap-3 rounded-2xl bg-pine-950 p-5 text-white sm:grid-cols-2">
    <div class="flex items-start gap-3">
      <span class="text-2xl" aria-hidden="true">🏢</span>
      <div class="text-sm">
        <p class="font-bold text-gold-400">สำนักงาน</p>
        <p class="mt-0.5 text-white/75">{{ contactInfo.org }}<br />{{ contactInfo.address }}</p>
      </div>
    </div>
    <div class="space-y-2.5 text-sm">
      <p>📞 <strong>{{ contactInfo.phone }}</strong></p>
      <p>✉️ {{ contactInfo.email }}</p>
      <p>🕘 {{ contactInfo.hours }}</p>
      <NuxtLink to="/contact" class="inline-block rounded-lg bg-gold-400 px-4 py-2 font-bold text-pine-950 hover:bg-gold-100">
        ช่องทางติดต่อทั้งหมด →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactInfo } from '~/data/contact'
</script>
