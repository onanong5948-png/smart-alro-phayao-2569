<template>
  <div class="mt-3 space-y-2">
    <div
      v-for="form in forms"
      :key="form.id"
      class="flex flex-col gap-3 rounded-xl border border-pine-950/10 bg-white p-4 sm:flex-row sm:items-center"
    >
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl" aria-hidden="true">
        📕
      </div>
      <div class="min-w-0 flex-1">
        <p class="font-semibold text-ink">{{ form.title }}</p>
        <p class="truncate text-xs text-mist">{{ form.fileName }} • {{ form.size ?? 'PDF' }} • ไฟล์ตัวอย่าง</p>
      </div>
      <!-- Prototype: ยังไม่มีไฟล์จริง ปุ่มเป็นตัวอย่างไว้ก่อน -->
      <button
        type="button"
        :title="`${form.title} (ไฟล์ตัวอย่าง จะเปิดดาวน์โหลดจริงภายหลัง)`"
        class="shrink-0 rounded-xl bg-pine-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-pine-950"
        @click="mockDownload(form.title)"
      >
        ⬇️ ดาวน์โหลด
      </button>
    </div>
    <p v-if="notice" class="rounded-lg bg-gold-100 px-4 py-2 text-center text-xs text-pine-950 ring-1 ring-gold-400/40">
      {{ notice }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { DownloadForm } from '~/data/services'

defineProps<{ forms: DownloadForm[] }>()

const notice = ref('')
function mockDownload(title: string) {
  notice.value = `“${title}” เป็นไฟล์ตัวอย่าง — ระบบจริงจะเริ่มดาวน์โหลดไฟล์ PDF ที่นี่`
}
</script>
