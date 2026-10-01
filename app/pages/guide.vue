<template>
  <div class="mx-auto max-w-2xl px-4 py-10">
    <p class="text-xs font-bold uppercase tracking-widest text-moss-500">Smart Guide</p>
    <h1 class="mt-1 text-2xl font-bold text-ink sm:text-3xl">ไม่รู้ว่าต้องติดต่อเรื่องอะไร?</h1>
    <p class="mt-1 text-sm text-mist">ตอบคำถามสั้น ๆ {{ guideQuestions.length }} ข้อ ระบบจะแนะนำบริการที่ตรงกับท่าน</p>

    <!-- แถบความคืบหน้า -->
    <div class="mt-6 flex items-center gap-2" aria-hidden="true">
      <div
        v-for="(q, i) in guideQuestions"
        :key="q.id"
        class="h-2 flex-1 rounded-full"
        :class="i < step ? 'bg-pine-900' : i === step ? 'bg-gold-400' : 'bg-pine-950/10'"
      />
    </div>

    <!-- ขั้นถาม -->
    <div v-if="step < guideQuestions.length" class="mt-6 rounded-3xl border border-pine-950/10 bg-white p-6 shadow-sm sm:p-8">
      <p class="text-xs font-bold text-pine-900">ข้อ {{ step + 1 }}/{{ guideQuestions.length }}</p>
      <h2 class="mt-1 text-xl font-bold text-ink">{{ current.title }}</h2>
      <p v-if="current.subtitle" class="mt-0.5 text-sm text-mist">{{ current.subtitle }}</p>
      <div class="mt-5 grid gap-3">
        <button
          v-for="opt in current.options"
          :key="opt.id"
          type="button"
          class="flex items-center gap-3 rounded-2xl border-2 border-pine-950/10 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-pine-900/40 hover:shadow"
          @click="answer(opt)"
        >
          <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-2xl">{{ opt.icon }}</span>
          <span class="font-semibold text-ink">{{ opt.label }}</span>
        </button>
      </div>
      <button v-if="step > 0" type="button" class="mt-4 text-sm font-bold text-mist hover:text-pine-900" @click="step--">
        ← ย้อนข้อก่อนหน้า
      </button>
    </div>

    <!-- ขั้นผลลัพธ์ -->
    <div v-else class="mt-6 overflow-hidden rounded-3xl border border-pine-950/10 bg-white shadow-sm">
      <div class="bg-gradient-to-r from-pine-950 to-pine-900 p-6 text-center sm:p-8">
        <p class="text-5xl" aria-hidden="true">{{ resultCategory?.icon }}</p>
        <p class="mt-3 text-xs font-bold uppercase tracking-widest text-gold-400">เรื่องที่แนะนำสำหรับท่าน</p>
        <h2 class="mt-1 text-2xl font-bold text-white">{{ resultCategory?.title }}</h2>
        <p class="mx-auto mt-1 max-w-md text-sm text-white/75">{{ resultCategory?.desc }}</p>
      </div>
      <div class="space-y-3 p-6 sm:p-8">
        <NuxtLink
          :to="`/services/${resultCategory?.id}`"
          class="block rounded-xl bg-pine-900 px-5 py-3 text-center font-bold text-white hover:bg-pine-950"
        >
          ดูขั้นตอนและเอกสารของเรื่องนี้ →
        </NuxtLink>
        <div class="grid grid-cols-2 gap-3">
          <NuxtLink
            :to="`/documents?for=cat:${resultCategory?.id}`"
            class="rounded-xl bg-gold-100 px-4 py-3 text-center text-sm font-bold text-pine-950 hover:bg-gold-400/70"
          >
            ✅ เช็กลิสต์เอกสาร
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-pine-900 ring-1 ring-pine-950/15 hover:bg-sage-100"
          >
            📞 ติดต่อเจ้าหน้าที่
          </NuxtLink>
        </div>
        <button type="button" class="w-full py-2 text-sm font-bold text-mist hover:text-pine-900" @click="restart">
          ↺ ทำแบบสอบถามใหม่
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { guideQuestions, resolveCategory, type GuideOption } from '~/data/guide'
import { getCategory } from '~/data/services'

const step = ref(0)
const answers = ref<Record<string, GuideOption>>({})

const current = computed(() => guideQuestions[step.value])
const resultCategory = computed(() => getCategory(resolveCategory(answers.value)))

function answer(opt: GuideOption) {
  answers.value[current.value.id] = opt
  step.value++
}

function restart() {
  step.value = 0
  answers.value = {}
}

useHead({ title: 'ช่วยเลือกเรื่องที่ติดต่อ | Smart ALRO Phayao' })
</script>
