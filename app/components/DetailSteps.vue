<template>
  <ol class="mt-3 space-y-0">
    <li v-for="(step, i) in steps" :key="i" class="relative flex gap-4 pb-5 last:pb-0">
      <div class="flex flex-col items-center">
        <span class="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 font-bold text-white shadow">
          {{ i + 1 }}
        </span>
        <span v-if="i < steps.length - 1" class="w-0.5 flex-1 bg-green-200" aria-hidden="true" />
      </div>
      <div class="rounded-xl bg-green-50/70 px-4 py-2.5 text-sm text-slate-700 ring-1 ring-green-100">
        {{ step }}
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{ steps: string[] }>()
</script>
