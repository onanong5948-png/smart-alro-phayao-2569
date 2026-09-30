<template>
  <footer class="mt-24 bg-pine-950 text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-2xl">🌾</div>
          <p class="text-lg font-bold">Smart ALRO Phayao</p>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-white/70">{{ siteInfo.org }}</p>
        <p class="mt-1 text-sm text-white/50">ต้นแบบระบบผู้ช่วยเกษตรกร — ข้อมูลตัวอย่างเพื่อการออกแบบ</p>
      </div>
      <nav aria-label="เมนูลัด">
        <p class="font-semibold text-white">เมนูลัด</p>
        <ul class="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:grid-cols-1">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink :to="item.to" class="text-white/70 transition hover:text-white">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div>
        <p class="font-semibold text-white">ติดต่อ (ตัวอย่าง)</p>
        <p class="mt-4 text-sm leading-relaxed text-white/70">{{ contactInfo.address }}</p>
        <p class="mt-2 text-sm text-white/70">{{ contactInfo.phone }}</p>
        <p class="text-sm text-white/70">{{ contactInfo.hours }}</p>
      </div>
    </div>
    <div class="border-t border-white/10 py-5 text-center text-xs text-white/50">
      © 2569 Smart ALRO Phayao • ต้นแบบเพื่อการออกแบบ ยังไม่ใช่ระบบให้บริการจริง
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navigation, siteInfo } from '~/data/navigation'
import { contactInfo } from '~/data/contact'
</script>
