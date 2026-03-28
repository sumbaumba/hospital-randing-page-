'use client'

import { useEffect, useRef, useState } from 'react'

const features = [
  { category: '기본 정보' },
  { label: '월 금액', basic: '220만 원', premium: '350만 원', type: 'text' },
  { label: '기준', basic: '4주 / VAT 별도', premium: '4주 / VAT 별도', type: 'text' },
  { label: '추천 대상', basic: '처음 시작하는 병원\n내부 인력이 없는 병원', premium: '채널 성장과 브랜딩까지\n원하는 병원', type: 'text' },
  { label: '운영 목적', basic: '꾸준한 업로드와\n기본 채널 운영', premium: '채널 성장·전문성 브랜딩\n전환 설계', type: 'text' },

  { category: '기획 · 제작' },
  { label: '주제 선정', basic: true, premium: true, type: 'bool' },
  { label: '원고 작성', basic: true, premium: true, type: 'bool' },
  { label: '원장님 참여 범위', basic: '전문성 컨펌만', premium: '전문성 컨펌만', type: 'text' },
  { label: '촬영', basic: '월 1회 방문', premium: '월 1회 방문', type: 'text' },
  { label: '제작 편수', basic: '4편', premium: '4편', type: 'text' },

  { category: '편집 · 디자인' },
  { label: '기본 편집', basic: true, premium: true, type: 'bool' },
  { label: '프리미엄(디자인) 편집', basic: false, premium: true, type: 'bool' },
  { label: '자막 편집', basic: true, premium: true, type: 'bool' },
  { label: '썸네일 제작', basic: true, premium: true, type: 'bool' },
  { label: '썸네일 고도화 기획', basic: false, premium: true, type: 'bool' },

  { category: '채널 운영 · 분석' },
  { label: '업로드 관리', basic: true, premium: true, type: 'bool' },
  { label: '채널 운영 관리', basic: true, premium: true, type: 'bool' },
  { label: '기본 성과 분석', basic: false, premium: true, type: 'bool' },
  { label: '월간 분석 리포트', basic: false, premium: true, type: 'bool' },
  { label: '채널 전략 설계', basic: false, premium: true, type: 'bool' },
  { label: '쇼츠 / 숏폼 재가공', basic: false, premium: true, type: 'bool' },

  { category: '리스크 관리' },
  { label: '의료광고 표현 리스크 검토', basic: true, premium: true, type: 'bool' },
]

const Check = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mx-auto">
    <circle cx="11" cy="11" r="11" fill="#007AFF" fillOpacity="0.12" />
    <path d="M6 11l4 4 6-7" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Dash = () => (
  <span className="block text-center text-navy/20 font-bold text-xl leading-none">—</span>
)

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [tableOpen, setTableOpen] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-stagger').forEach((node) => node.classList.add('is-visible'))
          observer.unobserve(el)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="relative py-28 px-6 overflow-hidden bg-white">
      {/* 배경 장식 */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 65%)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-royal-blue/40" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">Pricing Plan</span>
            <div className="h-px w-10 bg-royal-blue/40" />
          </div>
          <h2
            className="font-serif font-bold text-navy mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.2, wordBreak: 'keep-all' }}
          >
            병원 유튜브 운영 플랜
          </h2>
          <p className="text-navy/45 leading-relaxed mx-auto" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '36rem', wordBreak: 'keep-all' }}>
            병원 유튜브 운영에 필요한 모든 과정,<br />
            원장님의 시간을 최소화하는 구조로 설계했습니다.
          </p>
        </div>

        {/* 플랜 카드 2개 */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10 max-w-3xl mx-auto">
          {/* 베이직 */}
          <div className="rounded-2xl p-7 flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8FAFF 0%, #EEF4FF 100%)', border: '1.5px solid rgba(10,25,47,0.1)' }}>
            {/* 상단 네이비 라인 */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #0A192F, #2D4A7A)' }} />
            <div className="mb-1 mt-1">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2D4A7A' }}>Basic</span>
            </div>
            <p className="font-serif font-bold text-navy text-xl mb-1 leading-snug">베이직 채널 운영</p>
            <div className="flex items-end gap-1 mb-3">
              <span className="font-black text-navy" style={{ fontSize: '2.4rem', lineHeight: 1 }}>220</span>
              <span className="text-navy/50 text-base mb-1">만 원 / 월</span>
            </div>
            <p className="text-navy/35 text-xs mb-5">4주 기준 · VAT 별도</p>
            <p className="text-navy/55 text-sm leading-relaxed mb-6 flex-1" style={{ wordBreak: 'keep-all' }}>
              원장님은 전문성 컨펌만,<br />나머지 운영은 모두 맡기는<br />기본 운영형 플랜
            </p>
            <a
              href="/#contact"
              className="block text-center text-sm font-bold py-3 rounded-xl transition-all duration-200"
              style={{ background: '#0A192F', color: '#fff' }}
            >
              문의하기
            </a>
          </div>

          {/* 성장 패키지 */}
          <div className="rounded-2xl p-7 flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #EBF4FF 0%, #DDEEFF 100%)', border: '1.5px solid rgba(0,122,255,0.25)' }}>
            {/* 상단 블루 라인 */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #007AFF, #3B88FF)' }} />
            <div className="mb-1 mt-1">
              <span className="text-xs font-bold tracking-widest text-royal-blue uppercase">Growth</span>
            </div>
            <p className="font-serif font-bold text-navy text-xl mb-1 leading-snug">유튜브 성장 패키지</p>
            <div className="flex items-end gap-1 mb-3">
              <span className="font-black text-royal-blue" style={{ fontSize: '2.4rem', lineHeight: 1 }}>350</span>
              <span className="text-navy/50 text-base mb-1">만 원 / 월</span>
            </div>
            <p className="text-navy/35 text-xs mb-5">4주 기준 · VAT 별도</p>
            <p className="text-navy/55 text-sm leading-relaxed mb-6 flex-1" style={{ wordBreak: 'keep-all' }}>
              단순 제작을 넘어 채널 성장과<br />병원 브랜딩까지 설계하는<br />확장형 플랜
            </p>
            <a
              href="/#contact"
              className="block text-center bg-royal-blue hover:bg-royal-blue-light text-white text-sm font-bold py-3 rounded-xl transition-all duration-200 blue-glow-sm"
            >
              문의하기
            </a>
          </div>
        </div>

        {/* 자세히보기 토글 버튼 */}
        <div className="reveal flex justify-center mb-4">
          <button
            onClick={() => setTableOpen(!tableOpen)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-navy/12 bg-white hover:bg-navy/3 text-navy/55 hover:text-navy text-sm font-semibold transition-all duration-200 shadow-sm"
          >
            {tableOpen ? '접기' : '항목별 자세히 보기'}
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="transition-transform duration-300"
              style={{ transform: tableOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* 상세 비교표 */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: tableOpen ? '2000px' : '0px', opacity: tableOpen ? 1 : 0 }}
        >
        <div className="reveal overflow-hidden rounded-2xl border border-navy/10 shadow-md mt-2">
          {/* 표 헤더 */}
          <div className="grid grid-cols-[1fr_200px_200px]" style={{ background: '#F4F8FF' }}>
            <div className="px-8 py-6 text-navy/40 text-sm font-bold uppercase tracking-widest flex items-center">항목</div>
            <div className="px-6 py-6 text-center border-l border-navy/8 flex flex-col items-center justify-center gap-1">
              <span className="text-navy/35 text-xs font-bold tracking-widest uppercase">Basic</span>
              <span className="text-navy font-bold text-base">베이직 220</span>
            </div>
            <div className="px-6 py-6 text-center border-l border-royal-blue/15 flex flex-col items-center justify-center gap-1" style={{ background: 'rgba(0,122,255,0.06)' }}>
              <span className="text-royal-blue text-xs font-bold tracking-widest uppercase">Growth</span>
              <span className="text-royal-blue font-bold text-base">성장 패키지 350</span>
            </div>
          </div>

          {/* 표 바디 */}
          {features.map((row, idx) => {
            if ('category' in row) {
              return (
                <div key={idx} className="grid grid-cols-[1fr_200px_200px] border-t-2 border-navy/8" style={{ background: '#F0F4FA' }}>
                  <div className="col-span-3 px-8 py-3">
                    <span className="text-navy/60 text-sm font-black tracking-[0.2em] uppercase">{row.category}</span>
                  </div>
                </div>
              )
            }

            const isEven = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`grid grid-cols-[1fr_200px_200px] border-t border-navy/6 ${isEven ? 'bg-white' : 'bg-navy/[0.015]'}`}
              >
                <div className="px-8 py-5 flex items-center">
                  <span className="text-navy/75 text-base font-medium" style={{ wordBreak: 'keep-all' }}>{row.label}</span>
                </div>
                <div className="px-6 py-5 flex items-center justify-center border-l border-navy/6">
                  {row.type === 'bool'
                    ? (row.basic ? <Check /> : <Dash />)
                    : <span className="text-navy/65 text-sm text-center leading-relaxed whitespace-pre-line font-medium">{String(row.basic)}</span>
                  }
                </div>
                <div className="px-6 py-5 flex items-center justify-center border-l border-royal-blue/10" style={{ background: isEven ? 'rgba(0,122,255,0.03)' : 'rgba(0,122,255,0.05)' }}>
                  {row.type === 'bool'
                    ? (row.premium ? <Check /> : <Dash />)
                    : <span className="text-royal-blue text-sm text-center leading-relaxed font-semibold whitespace-pre-line">{String(row.premium)}</span>
                  }
                </div>
              </div>
            )
          })}
        </div>
        </div>{/* 토글 래퍼 닫힘 */}

        {/* 하단 안내 */}
        <div className="reveal mt-8 text-center">
          <p className="text-navy/30 text-xs leading-relaxed">
            * 모든 플랜은 4주 단위 계약 기준이며, VAT는 별도입니다.<br />
            * 계약 전 무료 채널 진단을 통해 병원에 맞는 플랜을 추천드립니다.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 mt-6 bg-royal-blue hover:bg-royal-blue-light text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.03] blue-glow-sm"
          >
            무료 채널 진단 신청
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
