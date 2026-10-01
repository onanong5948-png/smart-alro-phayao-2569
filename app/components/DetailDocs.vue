<template>
  <ul class="mt-3 space-y-2">
    <li
      v-for="doc in documents"
      :key="doc"
      class="flex items-center gap-3 rounded-xl border border-pine-950/10 bg-white px-4 py-3 text-sm text-ink/80"
    >
      <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pine-900 text-sm font-bold text-white">✓</span>
      {{ doc }}
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ documents: string[] }>()
</script>
