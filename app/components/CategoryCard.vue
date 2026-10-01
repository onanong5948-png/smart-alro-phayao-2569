<template>
  <NuxtLink
    :to="`/services/${category.id}`"
    class="group flex flex-col rounded-[20px] border border-pine-950/10 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-pine-900/10"
  >
    <div class="flex items-start justify-between gap-3">
      <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine-900 text-white shadow-sm transition group-hover:scale-105">
        <AppIcon :name="iconName" class="h-7 w-7" />
      </div>
      <span class="rounded-full bg-sage-100 px-3 py-1.5 text-xs font-bold text-pine-900">
        {{ serviceCount }} บริการ
      </span>
    </div>
    <h3 class="mt-5 text-lg font-bold text-ink transition group-hover:text-pine-900">{{ category.title }}</h3>
    <p class="mt-2 flex-1 text-[15px] leading-relaxed text-ink/60">{{ category.desc }}</p>
    <span class="mt-5 inline-flex items-center gap-2 text-[15px] font-bold text-pine-900">
      เลือกหมวดนี้
      <span aria-hidden="true" class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sage-100 transition group-hover:bg-pine-900 group-hover:text-white">→</span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ServiceCategory } from '~/data/services'
import { getRelatedServices } from '~/data/services'

const props = defineProps<{ category: ServiceCategory }>()
const serviceCount = computed(() => getRelatedServices(props.category).length)

/** จับคู่ไอคอนชุดเดียวกันตามรหัสหมวด (แสดงผลเท่านั้น ไม่แตะข้อมูล) */
const iconMap: Record<string, string> = {
  'land-service': 'map-pin',
  'agri-title': 'award',
  'transfer-rights': 'swap',
  'heir-case': 'users',
  'docs-forms': 'file',
  others: 'chat'
}
const iconName = computed(() => iconMap[props.category.id] ?? 'sprout')
</script>
