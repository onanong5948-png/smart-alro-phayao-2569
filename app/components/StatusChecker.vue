<template>
  <div class="rounded-[20px] border border-pine-950/10 bg-white p-6 shadow-sm sm:p-8">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <h3 class="font-bold text-ink">ตรวจสอบสถานะคำขอ</h3>
      <span class="rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-pine-950 ring-1 ring-gold-400/40">
        ระบบจำลอง — ยังไม่เชื่อมฐานข้อมูลจริง
      </span>
    </div>

    <label for="status-id" class="mt-5 block text-sm font-bold text-ink/80">
      เลขประจำตัวประชาชน (13 หลัก) หรือเลขแปลงที่ดิน
    </label>
    <div class="mt-2 flex flex-col gap-2 sm:flex-row">
      <input
        id="status-id"
        v-model="query"
        type="text"
        inputmode="numeric"
        maxlength="20"
        placeholder="ระบุเลขบัตรประชาชน 13 หลัก หรือเลขแปลง..."
        class="w-full flex-1 rounded-xl border border-pine-950/15 bg-white px-4 py-3 text-ink outline-none placeholder:text-ink/35 focus:ring-2 focus:ring-pine-900"
      />
      <button
        type="button"
        class="shrink-0 rounded-xl bg-pine-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-pine-950"
        @click="requestOtp"
      >
        ขอรหัส OTP
      </button>
    </div>
    <p v-if="error" class="mt-2 text-sm font-medium text-red-700" role="alert">{{ error }}</p>

    <div v-if="otpSent" class="mt-5 border-t border-dashed border-pine-950/15 pt-5">
      <p class="text-sm text-ink/70">
        ระบบจำลองส่งรหัส OTP แล้ว — <strong>กรอกเลขใดก็ได้ 6 หลักเพื่อทดสอบ</strong>
      </p>
      <div class="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          v-model="otp"
          type="text"
          inputmode="numeric"
          maxlength="6"
          placeholder="กรอกรหัส OTP 6 หลัก"
          aria-label="รหัส OTP 6 หลัก"
          class="w-full flex-1 rounded-xl border border-pine-950/15 bg-white px-4 py-3 text-ink outline-none placeholder:text-ink/35 focus:ring-2 focus:ring-pine-900"
        />
        <button
          type="button"
          class="shrink-0 rounded-xl bg-pine-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-pine-950"
          @click="verify"
        >
          ตรวจสอบข้อมูล
        </button>
      </div>
    </div>

    <div v-if="done" class="mt-5 rounded-2xl border border-pine-950/10 bg-sage-50 p-5">
      <div class="flex items-center justify-between gap-2">
        <h3 class="font-bold text-pine-900">ผลการตรวจสอบสถานะสิทธิ (ข้อมูลจำลอง)</h3>
        <button type="button" class="text-xs font-bold text-mist hover:text-pine-900" @click="reset">
          เริ่มใหม่
        </button>
      </div>
      <dl class="mt-3 space-y-2.5 text-sm">
        <div class="flex flex-col gap-0.5 border-b border-pine-950/5 pb-2 sm:flex-row sm:justify-between">
          <dt class="text-mist">ชื่อ-นามสกุล</dt>
          <dd class="font-bold text-ink">นายเกษตรกร ตัวอย่าง</dd>
        </div>
        <div class="flex flex-col gap-0.5 border-b border-pine-950/5 pb-2 sm:flex-row sm:justify-between">
          <dt class="text-mist">แปลงที่ดิน (ส.ป.ก. 4-01)</dt>
          <dd class="font-bold text-ink sm:text-right">หมู่ที่ 5 ต.บ้านต๋อม อ.เมืองพะเยา จ.พะเยา</dd>
        </div>
        <div class="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
          <dt class="text-mist">สถานะคำขอ (เปลี่ยนเป็นโฉนด)</dt>
          <dd>
            <span class="inline-block rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-pine-950 ring-1 ring-gold-400/40">
              กำลังดำเนินการ (รอรังวัดแปลง)
            </span>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
/** ตัวต้นแบบฝั่งหน้าบ้านเท่านั้น — ยังไม่ส่ง/เก็บข้อมูลจริง ไม่เชื่อม OTP/ฐานข้อมูลใด ๆ */
const query = ref('')
const otp = ref('')
const otpSent = ref(false)
const done = ref(false)
const error = ref('')

function requestOtp() {
  error.value = ''
  if (query.value.trim().length < 10) {
    error.value = 'กรุณากรอกเลขบัตรประจำตัวประชาชนหรือเลขแปลงที่ดินให้ถูกต้อง (อย่างน้อย 10 ตัวอักษร)'
    return
  }
  otpSent.value = true
}

function verify() {
  error.value = ''
  if (!/^\d{6}$/.test(otp.value.trim())) {
    error.value = 'กรุณากรอกรหัส OTP 6 หลัก (ระบบจำลอง: กรอกเลขใดก็ได้ 6 หลัก)'
    return
  }
  done.value = true
}

function reset() {
  query.value = ''
  otp.value = ''
  otpSent.value = false
  done.value = false
  error.value = ''
}
</script>
