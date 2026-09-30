<template>
  <article class="flex flex-col rounded-[28px] border border-pine-900/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div class="flex items-center justify-between gap-3">
      <span class="rounded-full bg-sage-100 px-3.5 py-1.5 text-xs font-bold text-pine-900">{{ item.category }}</span>
      <span class="text-xs text-ink/40">📅 {{ item.date }}</span>
    </div>
    <h3 class="mt-4 text-lg font-bold leading-snug text-ink">{{ item.title }}</h3>
    <p class="mt-2 flex-1 text-[15px] leading-relaxed text-ink/60">{{ item.excerpt }}</p>
    <span class="mt-5 text-sm font-bold text-pine-900">อ่านประกาศ →</span>
  </article>
</template>

<script setup lang="ts">
import type { Announcement } from '~/data/announcements'
defineProps<{ item: Announcement }>()
</script>
