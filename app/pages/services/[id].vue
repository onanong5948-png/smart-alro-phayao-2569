<template>
  <div class="mx-auto max-w-3xl px-4 py-10">
    <NuxtLink
      to="/services"
      class="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-sm font-bold text-green-700 shadow-sm ring-1 ring-green-100 hover:bg-green-50"
    >
      ← ย้อนกลับไปหน้า Smart Service
    </NuxtLink>

    <!-- รายละเอียดหมวด / บริการ -->
    <article v-if="detail" class="mt-4 overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">
      <div class="bg-gradient-to-r from-green-800 to-green-600 p-6 sm:p-8">
        <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl ring-1 ring-white/30">
          {{ detail.icon }}
        </div>
        <p class="mt-4 text-xs font-bold uppercase tracking-widest text-amber-300">{{ detail.kicker }}</p>
        <h1 class="mt-1 text-2xl font-bold text-white sm:text-3xl">{{ detail.title }}</h1>
        <p class="mt-1 text-sm text-green-100">{{ detail.desc }}</p>
      </div>

      <div class="space-y-8 p-6 sm:p-8">
        <section aria-label="ขั้นตอนการดำเนินงาน">
          <h2 class="font-bold text-green-900">📝 ขั้นตอนการดำเนินงาน</h2>
          <DetailSteps :steps="detail.steps" />
        </section>

        <section aria-label="เอกสารที่ต้องเตรียม">
          <h2 class="font-bold text-green-900">📎 เอกสารที่ต้องเตรียม</h2>
          <DetailDocs :documents="detail.documents" />
          <NuxtLink
            :to="checklistLink"
            class="mt-3 block rounded-xl bg-amber-100 px-4 py-3 text-center text-sm font-bold text-amber-900 hover:bg-amber-200"
          >
            ✅ เปิดเช็กลิสต์เอกสารของเรื่องนี้ →
          </NuxtLink>
        </section>

        <section aria-label="ดาวน์โหลดแบบฟอร์ม">
          <h2 class="font-bold text-green-900">⬇️ ดาวน์โหลดแบบฟอร์ม</h2>
          <DownloadForms :forms="detail.forms" />
        </section>

        <section aria-label="ช่องทางติดต่อ">
          <h2 class="font-bold text-green-900">📞 ช่องทางติดต่อ</h2>
          <DetailContact />
        </section>

        <!-- บริการย่อยในหมวด (เฉพาะหน้า detail ของหมวด) -->
        <section v-if="relatedServices.length" aria-label="บริการในหมวดนี้">
          <h2 class="font-bold text-green-900">🌾 บริการในหมวดนี้</h2>
          <div class="mt-3 grid gap-3 sm:grid-cols-2">
            <ServiceCard v-for="s in relatedServices" :key="s.id" :service="s" />
          </div>
        </section>
      </div>
    </article>

    <div v-else class="mt-4 rounded-2xl bg-white p-8 text-center shadow">
      <p class="text-lg font-bold">ไม่พบข้อมูลนี้ (ข้อมูลตัวอย่าง)</p>
      <NuxtLink to="/services" class="mt-4 inline-block rounded-xl bg-green-700 px-5 py-2.5 font-semibold text-white">
        ← ย้อนกลับไปหน้า Smart Service
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getCategory,
  getFormsForService,
  getRelatedServices,
  getService,
  type DownloadForm
} from '~/data/services'

const route = useRoute()
const id = computed(() => String(route.params.id))

interface Detail {
  kicker: string
  icon: string
  title: string
  desc: string
  steps: string[]
  documents: string[]
  forms: DownloadForm[]
  isCategory: boolean
}

const detail = computed<Detail | null>(() => {
  const cat = getCategory(id.value)
  if (cat) {
    return {
      kicker: 'Smart Service • หมวดบริการ',
      icon: cat.icon,
      title: cat.title,
      desc: cat.desc,
      steps: cat.steps,
      documents: cat.documents,
      forms: cat.forms,
      isCategory: true
    }
  }
  const svc = getService(id.value)
  if (svc) {
    return {
      kicker: `Smart Service • ${getCategory(svc.categoryId)?.title ?? 'บริการ'}`,
      icon: svc.icon,
      title: svc.title,
      desc: svc.shortDesc,
      steps: svc.steps ?? [],
      documents: svc.documents ?? [],
      forms: getFormsForService(svc),
      isCategory: false
    }
  }
  return null
})

const relatedServices = computed(() => {
  const cat = getCategory(id.value)
  return cat ? getRelatedServices(cat) : []
})

/** ลิงก์ไปหน้าเช็กลิสต์โดยเลือกเรื่องปัจจุบันไว้ให้ */
const checklistLink = computed(() =>
  detail.value?.isCategory ? `/documents?for=cat:${id.value}` : `/documents?for=svc:${id.value}`
)

useHead({ title: 'รายละเอียดบริการ | Smart ALRO Phayao' })
</script>
