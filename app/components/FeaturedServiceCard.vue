<template>
  <NuxtLink
    :to="`/services/${service.id}`"
    class="group overflow-hidden rounded-[20px] border border-pine-950/10 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-pine-900/10"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-sage-100">
      <img
        v-if="service.image"
        :src="service.image"
        :alt="`ภาพประกอบ ${service.title} (ภาพตัวอย่าง)`"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div v-else class="flex h-full w-full items-center justify-center text-6xl" aria-hidden="true">
        {{ service.icon }}
      </div>
      <span class="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-pine-900 backdrop-blur">
        <AppIcon :name="iconName" class="h-4 w-4" /> บริการยอดนิยม
      </span>
    </div>
    <div class="p-6">
      <h3 class="text-lg font-bold text-ink transition group-hover:text-pine-900">{{ service.title }}</h3>
      <p class="mt-2 text-[15px] leading-relaxed text-ink/60">{{ service.shortDesc }}</p>
      <span class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine-900 px-5 py-3 text-[15px] font-bold text-white transition group-hover:bg-pine-800">
        ดูรายละเอียด →
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Service } from '~/data/services'
const props = defineProps<{ service: Service }>()

/** ชุดเดียวกับ ServiceCard (แสดงผลเท่านั้น ไม่แตะข้อมูล) */
const iconMap: Record<string, string> = {
  'sor-por-kor-4-01': 'file-check',
  'change-heir': 'users',
  'land-loan': 'banknote',
  'land-use-check': 'map-pin',
  'land-dispute': 'shield',
  'support-project': 'sprout'
}
const iconName = computed(() => iconMap[props.service.id] ?? 'leaf')
</script>
