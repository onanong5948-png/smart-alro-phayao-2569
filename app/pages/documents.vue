<template>
  <div class="mx-auto max-w-6xl px-4 py-10">
    <p class="text-xs font-bold uppercase tracking-widest text-moss-500">Document Checklist</p>
    <h1 class="mt-1 text-2xl font-bold text-ink sm:text-3xl">เช็กลิสต์เอกสาร</h1>
    <p class="mt-1 text-sm text-mist">เลือกเรื่องที่ติดต่อ แล้วติ๊กเอกสารทีละอย่างเมื่อเตรียมเสร็จ</p>

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="rounded-2xl border border-pine-950/10 bg-white p-5 shadow-sm">
        <label for="doc-topic" class="text-sm font-bold text-pine-900">📂 เรื่องที่ติดต่อ</label>
        <select
          id="doc-topic"
          v-model="selectedId"
          class="mt-2 w-full rounded-xl border border-pine-950/15 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-pine-900"
        >
          <optgroup label="หมวดบริการ">
            <option v-for="c in categories" :key="c.id" :value="`cat:${c.id}`">{{ c.icon }} {{ c.title }}</option>
          </optgroup>
          <optgroup label="บริการเฉพาะเรื่อง">
            <option v-for="s in services" :key="s.id" :value="`svc:${s.id}`">{{ s.icon }} {{ s.title }}</option>
          </optgroup>
        </select>
        <div class="mt-4 flex flex-wrap gap-2">
          <NuxtLink
            :to="detailLink"
            class="rounded-xl bg-pine-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-pine-950"
          >
            ดูขั้นตอนของเรื่องนี้ →
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-pine-900 ring-1 ring-pine-950/15 hover:bg-sage-100"
          >
            ← เปลี่ยนเรื่อง
          </NuxtLink>
        </div>
      </div>
      <DocChecklist :key="selectedId" :documents="currentDocs" />
    </div>

    <SectionTitle
      class="mt-12"
      kicker="Frequent"
      title="เอกสารที่ใช้บ่อย"
      subtitle="เอกสารพื้นฐานที่เกือบทุกบริการต้องใช้"
    />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <DocCard v-for="d in frequentDocs" :key="d.id" :doc="d" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories, getCategory, getService, services } from '~/data/services'
import { frequentDocs } from '~/data/documents'

const route = useRoute()
const selectedId = ref(String(route.query.for ?? 'cat:land-service'))

const currentDocs = computed(() => {
  const [kind, id] = selectedId.value.split(':')
  if (kind === 'cat') return getCategory(id)?.documents ?? []
  return getService(id)?.documents ?? []
})

const detailLink = computed(() => {
  const [, id] = selectedId.value.split(':')
  return `/services/${id}`
})

useHead({ title: 'เช็กลิสต์เอกสาร | Smart ALRO Phayao' })
</script>
