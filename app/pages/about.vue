<template>
  <div class="mx-auto max-w-3xl px-4 py-14">
    <p class="text-sm font-bold uppercase tracking-[0.2em] text-moss-500">About</p>
    <h1 class="mt-3 text-4xl font-bold text-ink">เกี่ยวกับเรา</h1>
    <p class="mt-3 leading-relaxed text-ink/65">
      หน้าแนะนำสำนักงานการปฏิรูปที่ดินจังหวัดพะเยา (ส.ป.ก. พะเยา) และที่มาของระบบ
      Smart ALRO Phayao — หน้านี้เป็นตัวอย่างโครงสร้าง ใส่เนื้อหาจริงภายหลังได้
    </p>

    <div class="mt-8 grid gap-5 sm:grid-cols-2">
      <div class="rounded-[28px] border border-pine-900/10 bg-white p-7 shadow-sm">
        <div class="text-4xl" aria-hidden="true">🎯</div>
        <h2 class="mt-4 text-lg font-bold text-ink">พันธกิจ (ตัวอย่าง)</h2>
        <p class="mt-2 text-[15px] leading-relaxed text-ink/60">
          ช่วยให้เกษตรกรเข้าถึงสิทธิในที่ดิน สินเชื่อ และโครงการส่งเสริมอาชีพได้อย่างทั่วถึงและเป็นธรรม
        </p>
      </div>
      <div class="rounded-[28px] border border-pine-900/10 bg-white p-7 shadow-sm">
        <div class="text-4xl" aria-hidden="true">🌾</div>
        <h2 class="mt-4 text-lg font-bold text-ink">Smart ALRO Phayao คืออะไร (ตัวอย่าง)</h2>
        <p class="mt-2 text-[15px] leading-relaxed text-ink/60">
          ต้นแบบระบบผู้ช่วยเกษตรกร รวมบริการ ขั้นตอน เอกสาร ข่าวสาร และช่องทางติดต่อไว้ในที่เดียว
        </p>
      </div>
    </div>

    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
      <NuxtLink to="/services" class="rounded-full bg-pine-900 px-8 py-3.5 text-center font-bold text-white transition hover:bg-pine-800">
        ดูบริการทั้งหมด →
      </NuxtLink>
      <NuxtLink to="/contact" class="rounded-full px-8 py-3.5 text-center font-bold text-pine-900 ring-1 ring-pine-900/20 transition hover:bg-sage-100">
        ติดต่อเรา
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'เกี่ยวกับเรา | Smart ALRO Phayao' })
</script>
