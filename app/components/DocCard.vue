<template>
  <div class="flex items-center gap-5 rounded-[20px] border border-pine-950/10 bg-white px-6 py-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
    <div class="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-sage-100 p-3 text-pine-900" aria-hidden="true">
      <AppIcon :name="iconName" class="h-7 w-7" />
    </div>
    <div class="min-w-0 flex-1">
      <h3 class="font-bold text-ink">{{ doc.title }}</h3>
      <p class="mt-0.5 truncate text-sm text-ink/55">{{ doc.desc }}</p>
    </div>
    <button
      type="button"
      class="shrink-0 rounded-full bg-sage-100 px-4 py-2 text-xs font-bold text-pine-900 transition hover:bg-pine-900 hover:text-white"
      @click="open = true"
    >
      ตัวอย่าง
    </button>
  </div>

  <!-- Modal ภาพตัวอย่างเอกสาร (Teleport ไป body เพื่อไม่ติด overflow ของ parent) -->
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-pine-950/60 p-4"
      role="dialog"
      aria-modal="true"
      :aria-label="`ตัวอย่าง ${doc.title}`"
      @click="close"
    >
      <div class="w-full max-w-lg overflow-hidden rounded-[20px] bg-white shadow-2xl" @click.stop>
        <div class="flex items-center justify-between gap-3 bg-pine-900 px-5 py-4 text-white">
          <h3 class="truncate font-bold">ตัวอย่าง: {{ doc.title }}</h3>
          <button
            type="button"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl transition hover:bg-white/15"
            aria-label="ปิดหน้าต่าง"
            @click="close"
          >
            ✕
          </button>
        </div>
        <div class="p-5 text-center">
          <!-- ภาพตัวอย่าง: public/images/samples/<id>-sample.jpg
               ถ้ายังไม่มีไฟล์ จะแสดงกล่องข้อความแทน (ไม่มีรูปเสีย) -->
          <img
            v-if="imgOk"
            :src="sampleSrc"
            :alt="`ภาพตัวอย่าง${doc.title}`"
            class="mx-auto max-h-[350px] w-full rounded-xl border border-pine-950/10 bg-sage-50 object-contain"
            @error="imgOk = false"
          />
          <div v-else class="mx-auto flex max-h-[350px] min-h-48 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-pine-900/25 bg-sage-50 p-8">
            <AppIcon :name="iconName" class="h-12 w-12 text-pine-900/30" />
            <p class="text-sm font-bold text-ink/60">ยังไม่มีภาพตัวอย่าง</p>
            <p class="max-w-xs text-xs text-mist">วางไฟล์ที่ public/images/samples/{{ doc.id }}-sample.jpg แล้วภาพจะแสดงที่นี่</p>
          </div>
          <p class="mt-3 text-xs text-mist">* ภาพนี้เป็นตัวอย่างรูปแบบเอกสารที่ถูกต้องสำหรับการยื่นคำขอ</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { DocItem } from '~/data/documents'
const props = defineProps<{ doc: DocItem }>()

/** จับคู่ไอคอนชุดเดียวกันตามรหัสเอกสาร (แสดงผลเท่านั้น ไม่แตะข้อมูล) */
const iconMap: Record<string, string> = {
  'id-card': 'idcard',
  'house-reg': 'home',
  spk401: 'award',
  'farm-plan': 'chart',
  'death-cert': 'file',
  'map-photo': 'map'
}
const iconName = computed(() => iconMap[props.doc.id] ?? 'file')

/** path รูปตัวอย่างแบบ dynamic (Vite ไม่แปลงเป็น import ตอน build) */
const sampleSrc = computed(() => `/images/samples/${props.doc.id}-sample.jpg`)
const open = ref(false)
const imgOk = ref(true)

function close() {
  open.value = false
}

watch(open, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) {
    imgOk.value = true
    window.addEventListener('keydown', onKey)
  } else {
    window.removeEventListener('keydown', onKey)
  }
})

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>
