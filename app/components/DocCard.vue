<template>
  <div class="flex items-center gap-5 rounded-[24px] border border-pine-900/10 bg-white px-6 py-5 shadow-sm transition hover:shadow-md">
    <div class="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-sage-100 p-3 text-3xl" aria-hidden="true">
      {{ doc.icon }}
    </div>
    <div class="min-w-0 flex-1">
      <h3 class="font-bold text-ink">{{ doc.title }}</h3>
      <p class="mt-0.5 truncate text-sm text-ink/55">{{ doc.desc }}</p>
    </div>
    <span class="hidden shrink-0 rounded-full bg-sage-100 px-4 py-2 text-xs font-bold text-pine-900 sm:block">ตัวอย่าง</span>
  </div>
</template>

<script setup lang="ts">
import type { DocItem } from '~/data/documents'
defineProps<{ doc: DocItem }>()
</script>
