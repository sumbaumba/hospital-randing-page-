'use client'

import { useEffect, useRef, useState } from 'react'

type FormData = {
  name: string
  hospital: string
  phone: string
  channelUrl: string
  consultType: string
  message: string
  privacyAgreed: boolean
}

const consultOptions = [
  '유튜브 채널 운영 · 기획',
  'TVCF · 브랜드 필름',
  '숏폼 · 바이럴 콘텐츠',
  '기업 · 정부 영상',
  '채널 리모델링 · 진단',
  '기타 문의',
]

const PRIVACY_POLICY = `개인정보처리방침

'하이어 프로덕션'(이하 '회사')은 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.

회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.

회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.

본 방침은 2025년 11월 18일부터 시행됩니다.

1. 수집하는 개인정보 항목
회사는 상담 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.

온라인문의
- 수집항목 : 성명, 연락처, 이메일, 내용 등

2. 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 문의/답변

3. 개인정보의 보유 및 이용기간
원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.

- 계약 또는 청약철회 등에 관한 기록 보존 기간 : 3년
- 계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
- 대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)
- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)

4. 개인정보의 파기절차 및 방법
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.

파기절차
회원님이 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기되어집니다.

파기방법
전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.

5. 개인정보 제공
회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 이용자들이 사전에 동의한 경우 또는 법령의 규정에 의거한 경우에는 예외로 합니다.

6. 이용자 및 법정대리인의 권리와 그 행사방법
이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.

7. 개인정보에 관한 민원서비스

개인정보관리 책임자
- 전화번호 : 010-3313-0388
- 이메일 : higher3pd@gmail.com

기타 개인정보 침해에 대한 신고나 상담이 필요한 경우 아래 기관에 문의 가능합니다.
- 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
- 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)
- 경찰청 사이버수사국 (police.go.kr / 국번없이 182)`

export default function LeadForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: '',
    hospital: '',
    phone: '',
    channelUrl: '',
    consultType: '',
    message: '',
    privacyAgreed: false,
  })

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission (replace with actual API call)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = "w-full bg-white border border-navy/15 rounded-xl px-5 py-4 text-navy placeholder-navy/30 transition-all duration-200"
  const labelClass = "block text-navy/60 font-semibold mb-2"

  return (
    <section id="contact" ref={sectionRef} className="relative bg-ice-blue py-16 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.10] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
            <div className="h-px w-8 bg-royal-blue/50" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">Free Diagnosis</span>
            <div className="h-px w-8 bg-royal-blue/50" />
          </div>
          <h2 className="font-serif font-bold text-navy mb-4 md:mb-5" style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}>
            무료 채널 정밀 진단 신청
          </h2>
          <p className="text-navy/50 leading-relaxed max-w-lg mx-auto" style={{ fontSize: '1.15rem' }}>
            채널 현황을 분석하고, 예약전환을 위한 맞춤 전략을 무료로 안내해드립니다.
          </p>
        </div>

        {/* Form card */}
        <div
          className={`transition-all duration-700 delay-200 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {submitted ? (
            /* Success state */
            <div className="bg-white border border-royal-blue/20 rounded-2xl p-8 md:p-16 text-center shadow-lg">
              <div className="w-20 h-20 rounded-full bg-royal-blue/10 border-2 border-royal-blue flex items-center justify-center mx-auto mb-7 blue-glow">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-royal-blue">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif font-bold text-navy text-3xl mb-4">신청이 완료되었습니다</h3>
              <p className="text-navy/55 leading-relaxed text-lg">
                빠른 시일 내에 담당자가 연락드리겠습니다.<br />
                보통 <span className="text-navy font-semibold">영업일 1~2일 이내</span> 회신드립니다.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-navy/8 p-5 md:p-12 space-y-5 md:space-y-6 shadow-lg"
            >
              {/* Row 1: Name + Hospital */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    원장님 성함 <span className="text-royal-blue">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    병원명 <span className="text-royal-blue">*</span>
                  </label>
                  <input
                    type="text"
                    name="hospital"
                    value={form.hospital}
                    onChange={handleChange}
                    required
                    placeholder="○○ 병원"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2: Phone + Channel URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    연락처 <span className="text-royal-blue">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-0000-0000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    유튜브 채널 URL{' '}
                    <span className="text-navy/35 text-sm font-normal">(선택)</span>
                  </label>
                  <input
                    type="url"
                    name="channelUrl"
                    value={form.channelUrl}
                    onChange={handleChange}
                    placeholder="https://youtube.com/@..."
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Consult type */}
              <div>
                <label className={labelClass}>
                  문의 유형 <span className="text-royal-blue">*</span>
                </label>
                <select
                  name="consultType"
                  value={form.consultType}
                  onChange={handleChange}
                  required
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='rgba(10%2C25%2C47%2C0.4)' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
                >
                  <option value="" disabled>문의 유형을 선택해주세요</option>
                  {consultOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>
                  문의 내용
                  <span className="text-navy/35 text-sm font-normal ml-1">(현재 운영 현황이나 궁금한 점을 자유롭게 적어주세요)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="예) 현재 채널 구독자는 약 500명인데, 영상을 올려도 예약으로 잘 이어지지 않아서 고민입니다..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Privacy consent */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="privacyAgreed"
                  name="privacyAgreed"
                  checked={form.privacyAgreed}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 accent-royal-blue cursor-pointer flex-shrink-0"
                />
                <label htmlFor="privacyAgreed" className="text-navy/60 text-sm cursor-pointer select-none">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
                <button
                  type="button"
                  onClick={() => setShowPrivacy(true)}
                  className="text-royal-blue text-sm font-semibold underline underline-offset-2 hover:text-royal-blue-light transition-colors flex-shrink-0"
                >
                  전문보기
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !form.privacyAgreed}
                className={`w-full flex items-center justify-center gap-3 font-bold py-4 md:py-5 rounded-xl transition-all duration-300 text-base md:text-lg ${
                  loading || !form.privacyAgreed
                    ? 'bg-royal-blue/50 text-white/70 cursor-not-allowed'
                    : 'bg-royal-blue hover:bg-royal-blue-light text-white hover:scale-[1.02] blue-glow'
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                      <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                    신청 중...
                  </>
                ) : (
                  <>
                    무료 채널 정밀 진단 신청하기
                    <span className="text-2xl">→</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact info strip */}
        <div
          className={`mt-7 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-navy/35 transition-all duration-700 delay-400 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ fontSize: '1rem' }}
        >
          <span>또는 직접 연락하세요</span>
          <div className="flex items-center gap-6">
            <a href="tel:010-3313-0388" className="flex items-center gap-2 hover:text-royal-blue transition-colors font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              010-3313-0388
            </a>
            <a href="https://open.kakao.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-royal-blue transition-colors font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.63 1.524 4.937 3.824 6.337L5 21l4.5-2.5c.82.18 1.67.5 2.5.5 5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
              </svg>
              카카오톡 상담
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,25,47,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-navy/8">
              <h3 className="font-serif font-bold text-navy text-xl">개인정보처리방침</h3>
              <button
                onClick={() => setShowPrivacy(false)}
                className="text-navy/40 hover:text-navy transition-colors p-1"
                aria-label="닫기"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="overflow-y-auto px-8 py-6">
              <pre className="text-navy/65 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {PRIVACY_POLICY}
              </pre>
            </div>
            {/* Modal footer */}
            <div className="px-8 py-5 border-t border-navy/8 flex justify-end">
              <button
                onClick={() => setShowPrivacy(false)}
                className="bg-royal-blue text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-royal-blue-light transition-colors"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
