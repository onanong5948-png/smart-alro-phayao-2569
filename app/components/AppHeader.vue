<template>
  <header class="sticky top-0 z-50 border-b border-pine-950/10 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex min-h-[76px] items-center justify-between gap-4 py-2">
        <NuxtLink to="/" class="flex min-w-0 items-center gap-3">
          <!-- โลโก้ ส.ป.ก.: public/images/alro-logo.png (ไฟล์ทางการ ห้ามครอบกรอบ/ตัด/บิดเบี้ยว)
               ถ้าไฟล์ยังไม่อยู่ จะแสดงตราสำรองชั่วคราวโดยไม่ขึ้นรูปเสีย -->
          <img
            v-if="logoOk"
            :src="logoSrc"
            alt="สำนักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม"
            class="alro-logo bg-white"
            @error="logoOk = false"
          />
          <span v-else class="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-sage-100 text-pine-900 max-md:h-[42px] max-md:w-[42px]" aria-hidden="true">
            <AppIcon name="sprout" class="h-6 w-6" />
          </span>
          <span class="min-w-0 leading-tight">
            <span class="block truncate text-[18px] font-semibold text-pine-900">Smart ALRO Phayao</span>
            <span class="hidden text-xs font-light text-mist sm:block">สำนักงานการปฏิรูปที่ดินเพื่อเกษตรกรรม จังหวัดพะเยา</span>
          </span>
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
          <NuxtLink
            to="/search"
            class="ml-2 inline-flex items-center gap-2 rounded-full bg-pine-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pine-950"
          >
            <AppIcon name="search" class="h-4 w-4" aria-hidden="true" /> ค้นหาบริการ
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-2 lg:hidden">
          <NuxtLink
            to="/search"
            class="inline-flex h-10 items-center gap-1.5 rounded-full bg-pine-900 px-4 text-sm font-semibold text-white sm:hidden"
          >
            <AppIcon name="search" class="h-4 w-4" aria-hidden="true" /> ค้นหา
          </NuxtLink>
          <button
            class="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink ring-1 ring-pine-950/15 hover:bg-sage-100"
            :aria-label="open ? 'ปิดเมนู' : 'เปิดเมนู'"
            :aria-expanded="open"
            @click="open = !open"
          >
            <AppIcon v-if="!open" name="menu" class="h-5 w-5" />
            <AppIcon v-else name="close" class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile / Tablet menu -->
    <nav v-if="open" class="border-t border-pine-950/10 bg-white px-4 py-3 lg:hidden" aria-label="เมนูมือถือ">
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
      <NuxtLink
        to="/search"
        class="mt-1 hidden items-center justify-center gap-2 rounded-2xl bg-pine-900 px-4 py-3 font-bold text-white sm:flex lg:hidden"
        @click="open = false"
      >
        <AppIcon name="search" class="h-4 w-4" aria-hidden="true" /> ค้นหาบริการ
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { navigation } from '~/data/navigation'

const open = ref(false)
/** โลโก้ทางการ ส.ป.ก.: public/images/alro-logo.png (แสดงเต็มรูป ไม่ครอบกรอบ)
    หมายเหตุ: src ใช้ dynamic binding เพื่อให้ Vite ไม่แปลงเป็น import ตอน build */
const logoSrc = '/images/alro-logo.png'
const logoOk = ref(true)
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>
