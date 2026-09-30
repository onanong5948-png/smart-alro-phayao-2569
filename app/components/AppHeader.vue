<template>
  <header class="sticky top-0 z-50 border-b border-pine-900/10 bg-white/95 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-pine-900 text-xl text-white shadow-sm lg:h-11 lg:w-11">
            🌾
          </div>
          <div class="leading-tight">
            <p class="font-bold text-pine-900">Smart ALRO Phayao</p>
            <p class="hidden text-xs text-ink/50 sm:block">ส.ป.ก. พะเยา • ผู้ช่วยเกษตรกร</p>
          </div>
        </NuxtLink>

        <nav class="hidden items-center gap-1 lg:flex" aria-label="เมนูหลัก">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-full px-4 py-2 text-[15px] font-medium text-ink/70 transition hover:bg-sage-100 hover:text-pine-900"
            active-class="!bg-pine-900 !text-white"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <NuxtLink
            to="/search"
            class="hidden items-center gap-2 rounded-full bg-pine-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pine-800 sm:inline-flex"
            aria-label="ค้นหาบริการ"
          >
            <span aria-hidden="true">🔍</span> ค้นหาบริการ
          </NuxtLink>
          <NuxtLink
            to="/search"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg ring-1 ring-pine-900/15 sm:hidden"
            aria-label="ค้นหาบริการ"
          >
            🔍
          </NuxtLink>
          <button
            class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink ring-1 ring-pine-900/15 hover:bg-sage-100 lg:hidden"
            :aria-label="open ? 'ปิดเมนู' : 'เปิดเมนู'"
            :aria-expanded="open"
            @click="open = !open"
          >
            <span v-if="!open" class="text-xl">☰</span>
            <span v-else class="text-xl">✕</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile / Tablet menu -->
    <nav v-if="open" class="border-t border-pine-900/10 bg-white px-4 py-3 lg:hidden" aria-label="เมนูมือถือ">
      <NuxtLink
        v-for="item in navigation"
        :key="item.to"
        :to="item.to"
        class="block rounded-2xl px-4 py-3 font-medium text-ink/80 hover:bg-sage-100"
        active-class="!bg-sage-100 !text-pine-900 !font-bold"
        @click="open = false"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { navigation } from '~/data/navigation'

const open = ref(false)
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>
