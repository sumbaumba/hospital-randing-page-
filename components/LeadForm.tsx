'use client'

import { useEffect, useRef, useState } from 'react'

type FormData = {
  name: string
  hospital: string
  phone: string
  channelUrl: string
  consultType: string
  message: string
}

const consultOptions = [
  '유튜브 채널 운영 · 기획',
  'TVCF · 브랜드 필름',
  '숏폼 · 바이럴 콘텐츠',
  '기업 · 정부 영상',
  '채널 리모델링 · 진단',
  '기타 문의',
]

export default function LeadForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: '',
    hospital: '',
    phone: '',
    channelUrl: '',
    consultType: '',
    message: '',
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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
    <section id="contact" ref={sectionRef} className="relative bg-ice-blue py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.10] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-royal-blue/50" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">Free Diagnosis</span>
            <div className="h-px w-8 bg-royal-blue/50" />
          </div>
          <h2 className="font-serif font-bold text-navy mb-5" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
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
            <div className="bg-white border border-royal-blue/20 rounded-2xl p-16 text-center shadow-lg">
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
              className="bg-white rounded-2xl border border-navy/8 p-8 md:p-12 space-y-6 shadow-lg"
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

              {/* Privacy notice */}
              <p className="text-navy/30 text-sm">
                입력하신 정보는 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-3 font-bold py-5 rounded-xl transition-all duration-300 text-lg ${
                  loading
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
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-navy/35 transition-all duration-700 delay-400 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ fontSize: '1rem' }}
        >
          <span>또는 직접 연락하세요</span>
          <div className="flex items-center gap-6">
            <a href="tel:010-0000-0000" className="flex items-center gap-2 hover:text-royal-blue transition-colors font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              010-0000-0000
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
    </section>
  )
}
