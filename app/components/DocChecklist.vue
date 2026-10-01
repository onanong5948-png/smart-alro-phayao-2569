<template>
  <div class="rounded-2xl border border-pine-950/10 bg-white p-5 shadow-sm">
    <div class="flex items-center justify-between gap-3">
      <h3 class="font-bold text-ink">เช็กลิสต์เอกสารของฉัน</h3>
      <span class="rounded-full bg-sage-100 px-3 py-1 text-xs font-bold text-pine-900">
        {{ doneCount }}/{{ documents.length }} อย่าง
      </span>
    </div>
    <div class="mt-3 h-2.5 overflow-hidden rounded-full bg-sage-100" role="progressbar" :aria-valuenow="doneCount" :aria-valuemax="documents.length" aria-label="ความคืบหน้าเตรียมเอกสาร">
      <div class="h-full rounded-full bg-gradient-to-r from-pine-700 to-gold-400 transition-all" :style="{ width: pct + '%' }" />
    </div>
    <ul class="mt-4 space-y-2">
      <li v-for="(doc, i) in documents" :key="doc">
        <label
          class="flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition"
          :class="checked[i] ? 'border-pine-900/30 bg-sage-100 text-mist line-through' : 'border-pine-950/10 bg-white text-ink/80 hover:border-pine-900/40'"
        >
          <input v-model="checked[i]" type="checkbox" class="h-5 w-5 shrink-0 accent-pine-900" />
          {{ doc }}
        </label>
      </li>
    </ul>
    <p v-if="doneCount === documents.length && documents.length" class="mt-4 rounded-xl bg-pine-900 px-4 py-3 text-center text-sm font-bold text-white">
      🎉 เอกสารครบแล้ว! นำไปยื่นที่ ส.ป.ก. พะเยา ได้เลย
    </p>
    <p v-else-if="documents.length" class="mt-4 text-center text-xs text-mist">
      ขาดอีก {{ documents.length - doneCount }} อย่าง — ติ๊กเมื่อเตรียมเสร็จ
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ documents: string[] }>()

const checked = ref<boolean[]>([])
watch(
  () => props.documents,
  (docs) => (checked.value = docs.map(() => false)),
  { immediate: true }
)

const doneCount = computed(() => checked.value.filter(Boolean).length)
const pct = computed(() => (props.documents.length ? Math.round((doneCount.value / props.documents.length) * 100) : 0))
</script>
