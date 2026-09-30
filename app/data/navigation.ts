// ข้อมูลตัวอย่าง — เปลี่ยนเป็นข้อมูลจริงภายหลังได้โดยไม่ต้องแก้ UI
export interface NavItem {
  label: string
  to: string
}

export const navigation: NavItem[] = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'บริการ', to: '/services' },
  { label: 'เอกสาร', to: '/documents' },
  { label: 'ข่าวสาร', to: '/announcements' },
  { label: 'เกี่ยวกับเรา', to: '/about' },
  { label: 'ติดต่อเรา', to: '/contact' }
]

export const siteInfo = {
  name: 'Smart ALRO Phayao',
  shortName: 'ALRO Phayao',
  org: 'สำนักงานการปฏิรูปที่ดินจังหวัดพะเยา (ส.ป.ก. พะเยา)',
  tagline: 'ผู้ช่วยเกษตรกร ค้นหาบริการง่าย รู้ขั้นตอน รู้เอกสารที่ต้องเตรียม จบในที่เดียว',
  heroTitle: 'Smart ALRO Phayao',
  heroSubtitle:
    'ต้นแบบระบบผู้ช่วยเกษตรกร สำหรับ ส.ป.ก. พะเยา — ค้นหาบริการ แนะนำขั้นตอน บอกเอกสารที่ต้องเตรียม รวมไว้ในระบบเดียว'
}
