<template>
  <div>
    <!-- 2. Hero Section -->
    <section class="hero-phayao relative overflow-hidden" aria-label="Smart ALRO Phayao">
      <!-- สคริมสีขาวบาง ๆ ฝั่งซ้ายเพื่อให้ข้อความอ่านง่าย (ไม่ใช่ overlay เข้ม — คงบรรยากาศสว่างของภาพ) -->
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/85 via-white/35 to-transparent" aria-hidden="true" />

      <div class="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-12 sm:pt-16 lg:min-h-[540px] lg:grid-cols-2 lg:pb-16">
        <!-- ข้อความ Hero (ด้านซ้าย = พื้นที่สีอ่อนของภาพ) -->
        <div class="flex min-h-[440px] min-w-0 flex-col justify-center text-center sm:min-h-[480px] lg:text-left">
          <p class="anim-fade-up inline-flex max-w-full items-center gap-2 rounded-full bg-white/70 px-5 py-2 text-[13px] font-medium text-pine-900 ring-1 ring-pine-900/15 backdrop-blur sm:text-sm">
            <AppIcon name="sprout" class="h-4 w-4 shrink-0" />
            <span class="truncate">สำนักงานการปฏิรูปที่ดินจังหวัดพะเยา</span>
          </p>
          <h1 class="anim-fade-up mt-5 break-words text-[2.625rem] font-bold leading-[1.15] text-pine-950 sm:text-[3.375rem]" style="animation-delay: 0.1s">
            Smart ALRO<br />Phayao
          </h1>
          <p class="anim-fade-up mt-4 text-xl font-medium text-pine-900 sm:text-2xl" style="animation-delay: 0.2s">
            ผู้ช่วยเกษตรกรในการเข้าถึงบริการ ส.ป.ก.
          </p>
          <p class="anim-fade-up mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink/70 sm:text-base lg:mx-0" style="animation-delay: 0.3s">
            ค้นหาบริการ ขั้นตอน เอกสาร และข้อมูลที่เกี่ยวข้องได้ง่ายจากที่เดียว
          </p>

          <div class="anim-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start" style="animation-delay: 0.4s">
            <NuxtLink
              to="/search"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-pine-900 px-8 py-3.5 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-pine-800"
            >
              <AppIcon name="search" class="h-5 w-5" /> ค้นหาบริการ
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-8 py-3.5 font-bold text-pine-900 ring-2 ring-pine-900/25 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              ดูบริการทั้งหมด
            </NuxtLink>
          </div>
        </div>

        <!-- คอลัมน์ขวาเว้นว่างไว้เพื่อให้เห็นภูเขา ทะเลสาบ และองค์ประกอบของภาพชัดเจน -->
        <div class="hidden min-h-[480px] lg:block" aria-hidden="true" />
      </div>

      <div class="relative mx-auto max-w-3xl px-4 pb-16 sm:pb-20">
        <HeroSearch />
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
        <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-sage-100 via-cream to-sage-100 p-10 text-center shadow-lg shadow-pine-900/5 ring-1 ring-pine-900/10 sm:p-14">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <AppIcon name="sprout" class="absolute -left-6 -top-8 h-40 w-40 text-pine-900/10" />
            <AppIcon name="leaf" class="absolute -bottom-10 -right-4 h-44 w-44 text-moss-500/15" />
          </div>
          <div class="relative">
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] bg-pine-900 text-white shadow-lg shadow-pine-900/30 ring-2 ring-gold-400/70">
              <AppIcon name="chat" class="h-10 w-10" />
            </div>
            <p class="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-moss-500">Smart Finder</p>
            <h2 class="mx-auto mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
              ไม่แน่ใจว่าต้องติดต่อเรื่องอะไร?
            </h2>
            <p class="mx-auto mt-3 max-w-lg text-ink/65">
              ตอบคำถามสั้น ๆ แล้วระบบช่วยแนะนำบริการที่เกี่ยวข้อง
            </p>
            <NuxtLink
              to="/guide"
              class="mt-8 inline-flex items-center gap-2 rounded-full bg-pine-900 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-pine-900/25 transition hover:-translate-y-0.5 hover:bg-pine-800"
            >
              เริ่มค้นหาบริการ <AppIcon name="arrow" class="h-5 w-5" />
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- 5. ตรวจสอบแปลงที่ดินและสถานะสิทธิ (ระบบจำลอง) -->
      <section aria-label="ตรวจสอบแปลงที่ดินและสถานะสิทธิ">
        <SectionTitle
          kicker="Land & Status Checker"
          title="ตรวจสอบแปลงที่ดินและสถานะสิทธิ ส.ป.ก."
          subtitle="กรอกเลขบัตรประจำตัวประชาชนหรือเลขแปลงที่ดินเพื่อตรวจสอบสถานะคำขอ (ระบบจำลอง)"
        />
        <div class="mx-auto max-w-3xl">
          <StatusChecker />
        </div>
      </section>

      <!-- 6. Featured Services -->
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

      <!-- 7. ข่าวสารและประกาศล่าสุด -->
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

      <!-- 8. เอกสารที่ใช้บ่อย -->
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

      <!-- 9. ติดต่อ ส.ป.ก. พะเยา -->
      <section aria-label="ติดต่อ ส.ป.ก. พะเยา">
        <div class="overflow-hidden rounded-[32px] border border-pine-900/10 bg-white shadow-sm">
          <div class="grid md:grid-cols-5">
            <div class="p-10 sm:p-12 md:col-span-3">
              <p class="text-sm font-bold uppercase tracking-[0.2em] text-moss-500">Contact</p>
              <h2 class="mt-3 text-3xl font-bold text-ink">ติดต่อ ส.ป.ก. พะเยา</h2>
              <ul class="mt-7 space-y-5 text-[15px] leading-relaxed">
                <li class="flex gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-pine-900"><AppIcon name="map-pin" class="h-5 w-5" /></span>
                  <span><span class="font-bold text-ink">ที่อยู่</span><br /><span class="text-ink/65">{{ contactInfo.address }}</span></span>
                </li>
                <li class="flex gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-pine-900"><AppIcon name="phone" class="h-5 w-5" /></span>
                  <span><span class="font-bold text-ink">โทรศัพท์</span><br /><span class="text-ink/65">{{ contactInfo.phone }}</span></span>
                </li>
                <li class="flex gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-pine-900"><AppIcon name="clock" class="h-5 w-5" /></span>
                  <span><span class="font-bold text-ink">เวลาทำการ</span><br /><span class="text-ink/65">{{ contactInfo.hours }}</span></span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="mt-8 inline-flex items-center gap-2 rounded-full bg-pine-900 px-8 py-3.5 font-bold text-white transition hover:bg-pine-800">
                ดูช่องทางติดต่อทั้งหมด <AppIcon name="arrow" class="h-4 w-4" />
              </NuxtLink>
            </div>
            <div class="relative min-h-72 bg-sage-100 md:col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d99.900000!3d19.200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA5OcKwNTQnMDAuMCJF!5e0!3m2!1sth!2sth!4v1600000000000!5m2!1sth!2sth"
                class="absolute inset-0 h-full w-full"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="แผนที่สำนักงาน ส.ป.ก. จังหวัดพะเยา (พิกัดโดยประมาณ)"
              />
              <a
                :href="contactInfo.mapUrl"
                target="_blank"
                rel="noopener"
                class="absolute bottom-3 right-3 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-pine-900 shadow ring-1 ring-pine-950/10 hover:bg-white"
              >
                เปิดใน Google Maps →
              </a>
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

<style scoped>
/* ภาพพื้นหลัง Hero: public/images/phayao-hero.jpg (ภาพที่ผู้ใช้แนบมา ห้ามแก้ไขไฟล์ภาพ) */
.hero-phayao {
  background-image: url('/images/phayao-hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #e8f0e8;
}

/* มือถือ/แท็บเล็ต: ขยับจุดโฟกัสภาพไปทางขวาเพื่อให้ยังเห็นภูเขาและทะเลสาบ */
@media (max-width: 1023px) {
  .hero-phayao {
    background-position: 72% center;
  }
}
</style>
