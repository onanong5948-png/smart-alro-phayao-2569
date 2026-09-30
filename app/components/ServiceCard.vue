<template>
  <NuxtLink
    :to="`/services/${service.id}`"
    class="group flex flex-col rounded-[28px] border border-pine-900/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-pine-900/10"
  >
    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-3xl transition group-hover:scale-105 group-hover:bg-sage-100">
      {{ service.icon }}
    </div>
    <h3 class="mt-5 text-lg font-bold text-ink transition group-hover:text-pine-900">{{ service.title }}</h3>
    <p class="mt-2 flex-1 text-[15px] leading-relaxed text-ink/60">{{ service.shortDesc }}</p>
    <span class="mt-5 inline-flex items-center gap-2 text-[15px] font-bold text-pine-900">
      ดูขั้นตอนและเอกสาร
      <span aria-hidden="true" class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sage-100 transition group-hover:bg-pine-900 group-hover:text-white">→</span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Service } from '~/data/services'
defineProps<{ service: Service }>()
</script>
