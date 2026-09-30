// ข้อมูลตัวอย่างระบบช่วยเลือกเรื่อง ("ไม่รู้ว่าต้องติดต่อเรื่องอะไร?")
/// TODO: เปลี่ยนเป็นข้อมูลจริง/กติการ้านภายหลังได้โดยแก้ไฟล์นี้ไฟล์เดียว
///
/// วิธีทำงาน: ผู้ใช้ตอบคำถามทีละข้อ แต่ละตัวเลือกให้คะแนนหมวด (scores)
/// ตอบครบทุกข้อ -> หมวดที่คะแนนสูงสุดคือคำแนะนำ

export interface GuideOption {
  id: string
  label: string
  icon: string
  /** คะแนนที่บวกให้แต่ละหมวด { categoryId: คะแนน } */
  scores: Record<string, number>
}

export interface GuideQuestion {
  id: string
  title: string
  subtitle?: string
  options: GuideOption[]
}

export const guideQuestions: GuideQuestion[] = [
  {
    id: 'topic',
    title: 'ท่านต้องการติดต่อเรื่องอะไร?',
    subtitle: 'เลือกข้อที่ใกล้เคียงที่สุด',
    options: [
      { id: 't-land', label: 'ยื่นขอ/ตรวจสอบสิทธิที่ดิน', icon: '🗺️', scores: { 'land-service': 3 } },
      { id: 't-agri', label: 'อยากได้โฉนดเพื่อการเกษตร', icon: '📜', scores: { 'agri-title': 3 } },
      { id: 't-transfer', label: 'โอนสิทธิ / เปลี่ยนชื่อผู้ทำกิน', icon: '🔄', scores: { 'transfer-rights': 3 } },
      { id: 't-heir', label: 'พ่อแม่เสียชีวิต จะรับที่ดินต่อ', icon: '👨‍👩‍👧', scores: { 'heir-case': 3 } },
      { id: 't-docs', label: 'ขอแบบฟอร์ม / เตรียมเอกสาร', icon: '📑', scores: { 'docs-forms': 3 } },
      { id: 't-other', label: 'กู้ยืม / โครงการ / ร้องเรียน / อื่นๆ', icon: '💬', scores: { others: 3 } }
    ]
  },
  {
    id: 'has-paper',
    title: 'ท่านมีหนังสือ ส.ป.ก. 4-01 แล้วหรือไม่?',
    subtitle: 'มีผลต่อเอกสารที่ต้องเตรียม',
    options: [
      { id: 'h-yes', label: 'มีแล้ว', icon: '✅', scores: { 'agri-title': 1, 'transfer-rights': 1, 'heir-case': 1 } },
      { id: 'h-no', label: 'ยังไม่มี', icon: '🆕', scores: { 'land-service': 1, others: 1 } },
      { id: 'h-unsure', label: 'ไม่แน่ใจ', icon: '🤔', scores: { 'land-service': 1, 'docs-forms': 1 } }
    ]
  },
  {
    id: 'urgency',
    title: 'เรื่องของท่านเร่งด่วนแค่ไหน?',
    subtitle: 'เพื่อแนะนำช่องทางติดต่อที่เหมาะสม',
    options: [
      { id: 'u-fast', label: 'เร่งด่วน อยากคุยกับเจ้าหน้าที่', icon: '📞', scores: { others: 1 } },
      { id: 'u-normal', label: 'ไม่เร่ง เตรียมเอกสารไปยื่นเองได้', icon: '📝', scores: { 'docs-forms': 1, 'land-service': 1 } }
    ]
  }
]

/** รวมคะแนนจากคำตอบ -> คืน categoryId ที่ชนะ (เสมอกันเลือกตัวแรกที่คะแนนสูงสุด) */
export function resolveCategory(answers: Record<string, GuideOption>): string {
  const total: Record<string, number> = {}
  for (const opt of Object.values(answers)) {
    for (const [cat, pts] of Object.entries(opt.scores)) {
      total[cat] = (total[cat] ?? 0) + pts
    }
  }
  let best = 'land-service'
  let bestScore = -1
  for (const [cat, pts] of Object.entries(total)) {
    if (pts > bestScore) {
      best = cat
      bestScore = pts
    }
  }
  return best
}
