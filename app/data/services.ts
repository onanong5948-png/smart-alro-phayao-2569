// ข้อมูลตัวอย่าง Smart Service — TODO: เชื่อม API/DB จริงภายหลัง
// ออกแบบให้เปลี่ยนเป็นข้อมูลจริงได้โดยแก้เฉพาะไฟล์นี้ ไม่ต้องแตะ UI

export interface DownloadForm {
  id: string
  title: string
  fileName: string
  size?: string
}

export interface ContactChannel {
  type: 'office' | 'phone' | 'email' | 'hours'
  label: string
  value: string
}

export interface ServiceCategory {
  id: string
  title: string
  desc: string
  icon: string
  steps: string[]
  documents: string[]
  forms: DownloadForm[]
  serviceIds: string[]
}

export interface Service {
  id: string
  title: string
  shortDesc: string
  icon: string
  categoryId: string
  /** รูปประกอบการ์ด (placeholder SVG — เปลี่ยนเป็นรูปจริงภายหลังได้) */
  image?: string
  popular?: boolean
  steps?: string[]
  documents?: string[]
}

export const categories: ServiceCategory[] = [
  {
    id: 'land-service',
    title: 'การจัดที่ดิน',
    desc: 'ยื่นคำขอรับการจัดที่ดิน ตรวจสอบสิทธิ รังวัด และรับรองการใช้ประโยชน์ในเขตปฏิรูปที่ดิน',
    icon: '🗺️',
    steps: [
      'ยื่นคำขอที่ ส.ป.ก. พะเยา พร้อมเอกสาร',
      'เจ้าหน้าที่ตรวจสอบคุณสมบัติและเอกสาร',
      'ลงพื้นที่ตรวจสอบ / รังวัดแปลงที่ดิน',
      'พิจารณาอนุมัติและออกหนังสือรับรอง'
    ],
    documents: ['สำเนาบัตรประชาชน', 'สำเนาทะเบียนบ้าน', 'หลักฐานการทำกิน (ถ้ามี)'],
    forms: [
      { id: 'f-land-1', title: 'คำขอรับบริการเกี่ยวกับที่ดิน', fileName: 'land-request-form.pdf', size: '120 KB' }
    ],
    serviceIds: ['sor-por-kor-4-01', 'land-use-check', 'land-dispute']
  },
  {
    id: 'agri-title',
    title: 'โฉนดเพื่อการเกษตร',
    desc: 'เปลี่ยนหนังสือ ส.ป.ก. 4-01 เป็นโฉนดเพื่อการเกษตรตามหลักเกณฑ์ที่กำหนด',
    icon: '📜',
    steps: [
      'ยื่นคำขอเปลี่ยนเป็นโฉนดเพื่อการเกษตร',
      'ตรวจสอบคุณสมบัติและการใช้ประโยชน์ต่อเนื่อง',
      'รังวัดออกโฉนดโดยกรมที่ดินร่วมกับ ส.ป.ก.',
      'รับโฉนดเพื่อการเกษตร'
    ],
    documents: ['สำเนาบัตรประชาชน', 'สำเนาทะเบียนบ้าน', 'ส.ป.ก. 4-01 ฉบับเดิม', 'หลักฐานการใช้ประโยชน์ที่ดิน'],
    forms: [
      { id: 'f-agri-1', title: 'คำขอออกโฉนดเพื่อการเกษตร', fileName: 'agri-title-form.pdf', size: '150 KB' }
    ],
    serviceIds: ['sor-por-kor-4-01']
  },
  {
    id: 'transfer-rights',
    title: 'การเปลี่ยนแปลง / โอนสิทธิ',
    desc: 'โอนสิทธิ เปลี่ยนแปลงผู้เข้าทำประโยชน์ หรือแก้ไขข้อมูลสิทธิในที่ดิน ส.ป.ก.',
    icon: '🔄',
    steps: [
      'ยื่นคำขอเปลี่ยนแปลง / โอนสิทธิ',
      'ตรวจสอบคุณสมบัติผู้รับโอน',
      'คณะกรรมการพิจารณาอนุมัติ',
      'ออกหนังสือสิทธิฉบับใหม่'
    ],
    documents: ['สำเนาบัตรประชาชนผู้โอน-ผู้รับโอน', 'สำเนาทะเบียนบ้าน', 'ส.ป.ก. 4-01 ฉบับเดิม'],
    forms: [
      { id: 'f-tr-1', title: 'คำขอโอนสิทธิ / เปลี่ยนแปลงสิทธิ', fileName: 'transfer-form.pdf', size: '110 KB' }
    ],
    serviceIds: ['change-heir']
  },
  {
    id: 'heir-case',
    title: 'กรณีทายาท',
    desc: 'ทายาทขอรับมรดกสิทธิการเข้าทำประโยชน์ในที่ดิน ส.ป.ก. ของผู้ถึงแก่กรรม',
    icon: '👨‍👩‍👧',
    steps: [
      'ทายาทยื่นคำขอรับมรดกสิทธิ',
      'ตรวจสอบความเป็นทายาทและพินัยกรรม (ถ้ามี)',
      'ประกาศและพิจารณาคัดค้าน (ถ้ามี)',
      'อนุมัติและออกหนังสือสิทธิแก่ทายาท'
    ],
    documents: ['สำเนาบัตรประชาชนทายาท', 'สำเนาทะเบียนบ้าน', 'ใบมรณบัตร', 'ส.ป.ก. 4-01 ฉบับเดิม', 'ทะเบียนสมรส / สูติบัตร (ถ้ามี)'],
    forms: [
      { id: 'f-heir-1', title: 'คำขอรับมรดกสิทธิ', fileName: 'heir-form.pdf', size: '130 KB' }
    ],
    serviceIds: ['change-heir']
  },
  {
    id: 'docs-forms',
    title: 'เอกสารและแบบฟอร์ม',
    desc: 'รวมแบบฟอร์มคำขอ หนังสือยินยอม และเอกสารประกอบการติดต่อ ส.ป.ก.',
    icon: '📑',
    steps: [
      'เลือกแบบฟอร์มที่ตรงกับเรื่องที่ติดต่อ',
      'ดาวน์โหลดและกรอกข้อมูลให้ครบถ้วน',
      'แนบเอกสารประกอบตามรายการ',
      'ยื่นที่ ส.ป.ก. พะเยา ในวันเวลาราชการ'
    ],
    documents: ['สำเนาบัตรประชาชน', 'สำเนาทะเบียนบ้าน'],
    forms: [
      { id: 'f-doc-1', title: 'แบบคำขอทั่วไป', fileName: 'general-form.pdf', size: '100 KB' },
      { id: 'f-doc-2', title: 'หนังสือมอบอำนาจ', fileName: 'proxy-form.pdf', size: '90 KB' },
      { id: 'f-doc-3', title: 'บัญชีเอกสารประกอบคำขอ', fileName: 'checklist.pdf', size: '80 KB' }
    ],
    serviceIds: ['land-loan', 'support-project']
  },
  {
    id: 'others',
    title: 'อื่น ๆ',
    desc: 'กู้ยืมกองทุน โครงการส่งเสริมอาชีพ ร้องเรียน และเรื่องทั่วไปที่ไม่อยู่ในหมวดข้างต้น',
    icon: '💬',
    steps: [
      'ระบุเรื่องที่ต้องการติดต่อ',
      'เตรียมเอกสารเบื้องต้น (บัตรประชาชน + หลักฐานที่เกี่ยวข้อง)',
      'ยื่นเรื่องที่ ส.ป.ก. พะเยา หรือโทรสอบถามก่อน',
      'ติดตามผลตามช่องทางที่เจ้าหน้าที่แจ้ง'
    ],
    documents: ['สำเนาบัตรประชาชน', 'หลักฐานที่เกี่ยวข้องกับเรื่อง'],
    forms: [
      { id: 'f-oth-1', title: 'แบบติดต่อเรื่องทั่วไป / ร้องเรียน', fileName: 'general-contact-form.pdf', size: '95 KB' }
    ],
    serviceIds: ['land-loan', 'land-dispute', 'support-project']
  }
]

export const services: Service[] = [
  {
    id: 'sor-por-kor-4-01',
    title: 'ออกหนังสือ ส.ป.ก. 4-01',
    shortDesc: 'ขอออกหนังสืออนุญาตให้เข้าทำประโยชน์ในเขตปฏิรูปที่ดิน',
    icon: '📄',
    categoryId: 'land-service',
    image: '/images/thumb-terraces.svg',
    popular: true,
    steps: ['ยื่นคำขอที่ ส.ป.ก. พะเยา', 'ตรวจสอบคุณสมบัติ', 'รังวัดและตรวจสอบพื้นที่', 'ออกหนังสือ ส.ป.ก. 4-01'],
    documents: ['บัตรประชาชน', 'ทะเบียนบ้าน', 'หลักฐานการทำกิน (ถ้ามี)']
  },
  {
    id: 'change-heir',
    title: 'โอนสิทธิ / รับมรดกสิทธิ',
    shortDesc: 'ขอรับโอนสิทธิการเข้าทำประโยชน์เมื่อทายาทรับช่วงต่อ',
    icon: '👨‍👩‍👧',
    categoryId: 'transfer-rights',
    image: '/images/thumb-lake.svg',
    popular: true,
    steps: ['ยื่นคำขอรับมรดกสิทธิ', 'ตรวจสอบทายาท', 'พิจารณาอนุมัติ', 'ออกหนังสือแทนฉบับเดิม'],
    documents: ['บัตรประชาชนทายาท', 'ทะเบียนบ้าน', 'ใบมรณบัตร', 'ส.ป.ก. 4-01 ฉบับเดิม']
  },
  {
    id: 'land-loan',
    title: 'กู้ยืมเงินกองทุนปฏิรูปที่ดิน',
    shortDesc: 'ขอสินเชื่อเพื่อพัฒนาอาชีพเกษตรกรรมในเขตปฏิรูปที่ดิน',
    icon: '💰',
    categoryId: 'others',
    popular: true,
    steps: ['ยื่นคำขอกู้', 'ตรวจคุณสมบัติและแผนการผลิต', 'อนุมัติวงเงิน', 'ทำสัญญาและรับเงิน'],
    documents: ['บัตรประชาชน', 'ทะเบียนบ้าน', 'แผนการผลิต', 'ส.ป.ก. 4-01']
  },
  {
    id: 'land-use-check',
    title: 'ตรวจสอบการใช้ประโยชน์ที่ดิน',
    shortDesc: 'ขอหนังสือรับรองการใช้ประโยชน์ที่ดิน ส.ป.ก.',
    icon: '🗺️',
    categoryId: 'land-service',
    popular: true,
    steps: ['ยื่นคำขอ', 'เจ้าหน้าที่ลงพื้นที่', 'ออกหนังสือรับรอง'],
    documents: ['บัตรประชาชน', 'ส.ป.ก. 4-01']
  },
  {
    id: 'land-dispute',
    title: 'ร้องเรียน / ข้อพิพาทที่ดิน',
    shortDesc: 'แจ้งปัญหารุกล้ำ แย่งสิทธิ หรือข้อพิพาทในเขตปฏิรูปที่ดิน',
    icon: '⚖️',
    categoryId: 'others',
    steps: ['ยื่นเรื่องร้องเรียน', 'ไกล่เกลี่ยเบื้องต้น', 'สอบสวนข้อเท็จจริง', 'วินิจฉัย/ส่งต่อ'],
    documents: ['บัตรประชาชน', 'หลักฐานที่เกี่ยวข้อง', 'แผนที่/ภาพถ่าย (ถ้ามี)']
  },
  {
    id: 'support-project',
    title: 'โครงการส่งเสริมอาชีพ',
    shortDesc: 'สมัครเข้าร่วมโครงการพัฒนาและส่งเสริมอาชีพเกษตรกร',
    icon: '🌾',
    categoryId: 'others',
    image: '/images/thumb-mountain.svg',
    popular: true,
    steps: ['สมัครเข้าร่วมโครงการ', 'คัดเลือก', 'อบรม/รับปัจจัยการผลิต', 'ติดตามผล'],
    documents: ['บัตรประชาชน', 'ทะเบียนบ้าน', 'ส.ป.ก. 4-01 (ถ้ามี)']
  }
]

export const popularServices = services.filter((s) => s.popular)

export function getCategory(id: string): ServiceCategory | undefined {
  return categories.find((c) => c.id === id)
}

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}

export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((s) => s.categoryId === categoryId)
}

/** บริการที่เกี่ยวข้องกับหมวด = สังกัดหมวดนั้นโดยตรง + ที่ระบุใน serviceIds (กันตกหล่น) */
export function getRelatedServices(cat: ServiceCategory): Service[] {
  const map = new Map<string, Service>()
  for (const s of services) {
    if (s.categoryId === cat.id || cat.serviceIds.includes(s.id)) map.set(s.id, s)
  }
  return [...map.values()]
}

/** ฟอร์มดาวน์โหลดของบริการ = ฟอร์มของหมวดที่บริการนั้นสังกัด */
export function getFormsForService(service: Service): DownloadForm[] {
  return getCategory(service.categoryId)?.forms ?? []
}
