<template>
  <div class="mb-10 text-center">
    <p v-if="kicker" class="text-sm font-bold uppercase tracking-[0.2em] text-moss-500">{{ kicker }}</p>
    <h2 class="mx-auto mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">{{ title }}</h2>
    <p v-if="subtitle" class="mx-auto mt-3 max-w-xl text-ink/60">{{ subtitle }}</p>
    <NuxtLink v-if="moreTo" :to="moreTo" class="mt-4 inline-block rounded-full px-5 py-2 text-sm font-bold text-pine-900 ring-1 ring-pine-900/20 transition hover:bg-sage-100">
      {{ moreLabel ?? 'ดูทั้งหมด →' }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string; kicker?: string; moreTo?: string; moreLabel?: string }>()
</script>
