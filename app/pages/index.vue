<template>
  <div>
    <!-- 2. Hero Section -->
    <section class="relative overflow-hidden bg-pine-950" aria-label="Smart ALRO Phayao">
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="/images/hero-phayao.svg"
          alt=""
          class="anim-hero-zoom h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-pine-950/70 via-pine-950/45 to-pine-950/80" />
      </div>

      <div class="relative mx-auto max-w-6xl px-4 pb-20 pt-16 text-center sm:pb-28 sm:pt-24">
        <p class="anim-fade-up inline-block rounded-full bg-white/10 px-5 py-2 text-[13px] font-semibold text-white ring-1 ring-white/25 backdrop-blur sm:text-sm">
          🌾 สำนักงานการปฏิรูปที่ดินจังหวัดพะเยา
        </p>
        <h1 class="anim-fade-up mx-auto mt-6 max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl" style="animation-delay: 0.1s">
          Smart ALRO Phayao
        </h1>
        <p class="anim-fade-up mx-auto mt-4 max-w-2xl text-xl text-white/95 sm:text-2xl" style="animation-delay: 0.2s">
          ผู้ช่วยเกษตรกรในการเข้าถึงบริการ ส.ป.ก.
        </p>
        <p class="anim-fade-up mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base" style="animation-delay: 0.3s">
          ค้นหาบริการ ขั้นตอน เอกสาร และข้อมูลที่เกี่ยวข้องได้ง่ายจากที่เดียว
        </p>

        <div class="anim-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style="animation-delay: 0.4s">
          <NuxtLink
            to="/search"
            class="w-full rounded-full bg-white px-8 py-3.5 font-bold text-pine-900 shadow-xl transition hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
          >
            🔍 ค้นหาบริการ
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="w-full rounded-full px-8 py-3.5 font-bold text-white ring-2 ring-white/60 transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
          >
            ดูบริการทั้งหมด
          </NuxtLink>
        </div>

        <div class="anim-fade-up mt-10" style="animation-delay: 0.5s">
          <HeroSearch />
        </div>
      </div>

      <div class="relative h-8 rounded-t-[2.5rem] bg-cream" aria-hidden="true" />
    </section>

    <div class="mx-auto max-w-6xl space-y-24 px-4 py-4">
      <!-- 3. Service Section -->
      <section aria-label="หมวดบริการ">
        <SectionTitle
          kicker="Services"
          title="คุณกำลังมองหาอะไร?"
          subtitle="เลือกหมวดที่ตรงกับความต้องการ เพื่อดูขั้นตอน เอกสาร และแบบฟอร์ม"
        />
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard v-for="c in categories" :key="c.id" :category="c" />
        </div>
      </section>

      <!-- 4. Smart Finder Section -->
      <section aria-label="ระบบช่วยเลือกบริการ">
        <div class="relative overflow-hidden rounded-[32px] bg-pine-900 p-10 text-center shadow-xl sm:p-14">
          <div class="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true">
            <div class="absolute -left-8 -top-10 text-[9rem]">🌾</div>
            <div class="absolute -bottom-12 -right-6 text-[9rem]">🌱</div>
          </div>
          <div class="relative">
            <p class="text-sm font-bold uppercase tracking-[0.2em] text-white/60">Smart Finder</p>
            <h2 class="mx-auto mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              ไม่แน่ใจว่าต้องติดต่อเรื่องอะไร?
            </h2>
            <p class="mx-auto mt-3 max-w-lg text-white/75">
              ตอบคำถามสั้น ๆ แล้วระบบช่วยแนะนำบริการที่เกี่ยวข้อง
            </p>
            <NuxtLink
              to="/guide"
              class="mt-8 inline-block rounded-full bg-white px-9 py-4 font-bold text-pine-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-cream"
            >
              เริ่มค้นหาบริการ →
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- 5. Featured Services -->
      <section aria-label="บริการที่เกษตรกรใช้บ่อย">
        <SectionTitle
          kicker="Popular"
          title="บริการที่เกษตรกรใช้บ่อย"
          more-to="/services"
          more-label="ดูบริการทั้งหมด →"
        />
        <div class="grid gap-5 md:grid-cols-3">
          <FeaturedServiceCard v-for="s in featuredServices" :key="s.id" :service="s" />
        </div>
      </section>

      <!-- 6. ข่าวสารและประกาศล่าสุด -->
      <section aria-label="ข่าวสารและประกาศล่าสุด">
        <SectionTitle
          kicker="News"
          title="ข่าวสารและประกาศล่าสุด"
          more-to="/announcements"
        />
        <div class="grid gap-5 md:grid-cols-3">
          <NewsCard v-for="a in announcements.slice(0, 3)" :key="a.id" :item="a" />
        </div>
      </section>

      <!-- 7. เอกสารที่ใช้บ่อย -->
      <section aria-label="เอกสารที่ใช้บ่อย">
        <SectionTitle
          kicker="Documents"
          title="เอกสารที่ใช้บ่อย"
          subtitle="เตรียมเอกสารเหล่านี้ให้พร้อม จะช่วยให้ดำเนินการได้เร็วขึ้น"
          more-to="/documents"
        />
        <div class="mx-auto grid max-w-4xl gap-4">
          <DocCard v-for="d in frequentDocs" :key="d.id" :doc="d" />
        </div>
      </section>

      <!-- 8. ติดต่อ ส.ป.ก. พะเยา -->
      <section aria-label="ติดต่อ ส.ป.ก. พะเยา">
        <div class="overflow-hidden rounded-[32px] border border-pine-900/10 bg-white shadow-sm">
          <div class="grid md:grid-cols-2">
            <div class="p-10 sm:p-12">
              <p class="text-sm font-bold uppercase tracking-[0.2em] text-moss-500">Contact</p>
              <h2 class="mt-3 text-3xl font-bold text-ink">ติดต่อ ส.ป.ก. พะเยา</h2>
              <ul class="mt-7 space-y-4 text-[15px] leading-relaxed text-ink/70">
                <li class="flex gap-3"><span aria-hidden="true">📍</span>{{ contactInfo.address }}</li>
                <li class="flex gap-3"><span aria-hidden="true">📞</span>{{ contactInfo.phone }}</li>
                <li class="flex gap-3"><span aria-hidden="true">🕘</span>{{ contactInfo.hours }}</li>
              </ul>
              <NuxtLink to="/contact" class="mt-8 inline-block rounded-full bg-pine-900 px-8 py-3.5 font-bold text-white transition hover:bg-pine-800">
                ดูช่องทางติดต่อทั้งหมด →
              </NuxtLink>
            </div>
            <div class="flex min-h-72 flex-col items-center justify-center gap-3 bg-sage-100 p-10 text-center">
              <span class="text-7xl" aria-hidden="true">🗺️</span>
              <p class="font-bold text-pine-900">แผนที่สำนักงาน</p>
              <p class="text-sm text-ink/55">พื้นที่สำหรับแผนที่ (ภาพตัวอย่าง — ใส่แผนที่จริงภายหลัง)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from '~/data/services'
import { popularServices } from '~/data/services'
import { announcements } from '~/data/announcements'
import { frequentDocs } from '~/data/documents'
import { contactInfo } from '~/data/contact'

/** บริการที่มีรูปประกอบขึ้นก่อน (placeholder) แล้วตามด้วยบริการยอดนิยมอื่น */
const featuredServices = computed(() => [
  ...popularServices.filter((s) => s.image),
  ...popularServices.filter((s) => !s.image)
].slice(0, 3))

useHead({ title: 'Smart ALRO Phayao | ผู้ช่วยเกษตรกร ส.ป.ก. พะเยา' })
</script>
