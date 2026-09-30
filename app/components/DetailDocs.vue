<template>
  <ul class="mt-3 space-y-2">
    <li
      v-for="doc in documents"
      :key="doc"
      class="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-slate-700"
    >
      <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-400 text-sm font-bold text-amber-950">✓</span>
      {{ doc }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ documents: string[] }>()
</script>
