<template>
  <div class="mt-3 space-y-2">
    <div
      v-for="form in forms"
      :key="form.id"
      class="flex flex-col gap-3 rounded-xl border border-green-200 bg-white p-4 sm:flex-row sm:items-center"
    >
      <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-2xl" aria-hidden="true">
        📕
      </div>
      <div class="min-w-0 flex-1">
        <p class="font-semibold text-slate-900">{{ form.title }}</p>
        <p class="truncate text-xs text-slate-400">{{ form.fileName }} • {{ form.size ?? 'PDF' }} • ไฟล์ตัวอย่าง</p>
      </div>
      <!-- Prototype: ยังไม่มีไฟล์จริง ปุ่มเป็นตัวอย่างไว้ก่อน -->
      <button
        type="button"
        :title="`${form.title} (ไฟล์ตัวอย่าง จะเปิดดาวน์โหลดจริงภายหลัง)`"
        class="shrink-0 rounded-xl bg-green-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-800"
        @click="mockDownload(form.title)"
      >
        ⬇️ ดาวน์โหลด
      </button>
    </div>
    <p v-if="notice" class="rounded-lg bg-amber-50 px-4 py-2 text-center text-xs text-amber-800 ring-1 ring-amber-200">
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
