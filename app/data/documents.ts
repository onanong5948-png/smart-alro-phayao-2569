// ข้อมูลตัวอย่างเอกสารที่ใช้บ่อย
export interface DocItem {
  id: string
  title: string
  desc: string
  icon: string
  fileType: string
}

export const frequentDocs: DocItem[] = [
  { id: 'id-card', title: 'สำเนาบัตรประชาชน', desc: 'ใช้เกือบทุกบริการ อย่างน้อย 1 ฉบับ', icon: '🪪', fileType: 'ตัวอย่าง' },
  { id: 'house-reg', title: 'สำเนาทะเบียนบ้าน', desc: 'ยืนยันที่อยู่และสถานะครัวเรือน', icon: '🏠', fileType: 'ตัวอย่าง' },
  { id: 'spk401', title: 'ส.ป.ก. 4-01 ฉบับเดิม', desc: 'ใช้เมื่อโอนสิทธิ ตรวจสอบ หรือกู้ยืม', icon: '📜', fileType: 'ตัวอย่าง' },
  { id: 'farm-plan', title: 'แผนการผลิต', desc: 'ใช้ประกอบการขอกู้กองทุน/โครงการ', icon: '📊', fileType: 'ตัวอย่าง' }
]

export const allDocs: DocItem[] = [
  ...frequentDocs,
  { id: 'death-cert', title: 'ใบมรณบัตร', desc: 'ใช้ประกอบการรับมรดกสิทธิ', icon: '📑', fileType: 'ตัวอย่าง' },
  { id: 'map-photo', title: 'แผนที่/ภาพถ่ายแปลง', desc: 'ใช้ประกอบเรื่องร้องเรียน', icon: '🛰️', fileType: 'ตัวอย่าง' }
]
