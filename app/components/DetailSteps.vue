<template>
  <ol class="mt-3 space-y-0">
    <li v-for="(step, i) in steps" :key="i" class="relative flex gap-4 pb-5 last:pb-0">
      <div class="flex flex-col items-center">
        <span class="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pine-900 font-bold text-white shadow">
          {{ i + 1 }}
        </span>
        <span v-if="i < steps.length - 1" class="w-0.5 flex-1 bg-pine-900/20" aria-hidden="true" />
      </div>
      <div class="rounded-xl bg-sage-100/70 px-4 py-2.5 text-sm text-ink/75 ring-1 ring-pine-950/10">
        {{ step }}
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{ steps: string[] }>()
</script>
