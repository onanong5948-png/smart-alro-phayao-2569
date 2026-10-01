<template>
  <article class="flex flex-col overflow-hidden rounded-[20px] border border-pine-950/10 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
    <div class="h-1.5 w-full" :class="barColor" aria-hidden="true" />
    <div class="flex flex-1 flex-col p-7">
      <div class="flex items-center justify-between gap-3">
        <span class="rounded-full bg-sage-100 px-3.5 py-1.5 text-xs font-bold text-pine-900">{{ item.category }}</span>
        <span class="inline-flex shrink-0 items-center gap-1.5 text-xs text-ink/45"><AppIcon name="calendar" class="h-3.5 w-3.5" />{{ item.date }}</span>
      </div>
      <h3 class="mt-4 text-lg font-bold leading-snug text-ink">{{ item.title }}</h3>
      <p class="mt-2 flex-1 text-[15px] leading-relaxed text-ink/60">{{ item.excerpt }}</p>
      <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-pine-900">อ่านประกาศ <AppIcon name="arrow" class="h-4 w-4" /></span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Announcement } from '~/data/announcements'
const props = defineProps<{ item: Announcement }>()

/** แถบสีแยกประเภทข่าว (แสดงผลเท่านั้น ไม่แตะข้อมูล) */
const barMap: Record<string, string> = {
  'โครงการ': 'bg-moss-500',
  'จัดที่ดิน': 'bg-pine-700',
  'ประกาศ': 'bg-pine-900'
}
const barColor = computed(() => barMap[props.item.category] ?? 'bg-moss-500')
</script>
