'use client'

import { useEffect, useRef, useState } from 'react'

/* ── CountUp ──────────────────────────────────────── */
function CountUp({ to, duration = 1800, active }: { to: number; duration?: number; active: boolean }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    function tick(ts: number) {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.round((1 - (1 - p) ** 3) * to))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, to, duration])
  return <>{val.toLocaleString()}</>
}

/* ── InView 훅 ─────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible] as const
}

/* ── 데이터 ────────────────────────────────────────── */

const problemCards = [
  {
    icon: (
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: '기획 없는 촬영',
    desc: '예쁜 영상, 좋은 카메라만 강조합니다. 환자가 왜 그 영상을 보고 예약해야 하는지에 대한 전략이 없습니다.',
    stat: '제작비만 지출',
  },
  {
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: '불특정 다수 타겟',
    desc: '조회수를 높이기 위해 누구나 볼 수 있는 콘텐츠를 만듭니다. 정작 예약이 필요한 환자에게는 닿지 않습니다.',
    stat: '타겟 없는 노출',
  },
  {
    icon: (
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: '업로드 후 방치',
    desc: '영상을 올리면 끝입니다. 전환율 분석, 성과 측정, 최적화 없이 같은 실패를 반복합니다.',
    stat: '성과 측정 0',
  },
]

const processSteps = [
  {
    num: '01',
    title: '환자 타겟 정밀 분석',
    tag: 'Research & Targeting',
    color: '#007AFF',
    iconPath: (
      <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    points: [
      '불특정 다수가 아닌, 원장님의 관리가 필요한 환자에게 집중',
      '질환별 · 지역별 · 심리 상태별 세분화된 타겟 전략 수립',
      '경쟁 병원 콘텐츠 분석 및 차별화 포지셔닝 도출',
      '환자의 검색 패턴과 구매 여정 데이터 기반 기획 방향 설정',
    ],
    insight: '누구에게나 통하는 콘텐츠는 아무에게도 통하지 않습니다.',
  },
  {
    num: '02',
    title: '의료 심리학 기반 전략 기획',
    tag: 'Strategy & Planning',
    color: '#3B88FF',
    iconPath: (
      <path d="M12 2a8 8 0 100 16A8 8 0 0012 2zm0 0v8m0 0l-3-3m3 3l3-3"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    points: [
      '환자가 검색하고, 고민하고, 결정하는 전체 여정을 설계',
      '의료를 이해하는 PD가 환자의 심리를 직접 기획',
      '콘텐츠마다 명확한 전환 목표(CTA)와 설득 구조 적용',
      '업로드 전 전환율 시뮬레이션 및 A/B 전략 수립',
    ],
    insight: '환자의 머릿속 여정을 먼저 설계해야 예약이 따라옵니다.',
  },
  {
    num: '03',
    title: '원장님 전문성 극대화 제작',
    tag: 'Production',
    color: '#0057D9',
    iconPath: (
      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    points: [
      '화려한 편집보다 원장님의 신뢰와 전문성이 자연스럽게 드러나는 구조',
      '환자가 먼저 연락하게 만드는 콘텐츠 설계',
      'TVCF · 유튜브 · 숏폼 · 바이럴 — 브랜드 일관성 유지',
      '원장님의 목소리와 철학이 살아 숨쉬는 진정성 있는 제작',
    ],
    insight: '원장님이 말하지 않아도 전문성이 전해지는 구조를 만듭니다.',
  },
  {
    num: '04',
    title: '채널 운영 및 예약 전환 최적화',
    tag: 'Operations & Optimization',
    color: '#007AFF',
    iconPath: (
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    points: [
      '업로드 후 방치가 아닌, 지속적인 성과 분석과 최적화',
      '예약 전환 데이터를 기반으로 다음 콘텐츠 전략 개선',
      '채널이 복리처럼 쌓이는 자산화 운영 시스템 구축',
      '월별 성과 리포트 및 전략 미팅으로 지속 성장 관리',
    ],
    insight: '콘텐츠는 끝이 아닌 시작입니다. 데이터가 다음 전략을 만듭니다.',
  },
]

const compRows = [
  { label: '목표', bad: '조회수 · 구독자 증가', good: '예약 전환 · 실제 내원' },
  { label: '기획 방식', bad: '트렌드 카피, 즉흥 제작', good: '환자 심리 기반 정밀 설계' },
  { label: '타겟', bad: '불특정 다수', good: '치료가 필요한 환자만' },
  { label: '제작 결과물', bad: '예쁜 영상', good: '예약으로 이어지는 영상' },
  { label: '결과 지표', bad: '좋아요, 댓글, 조회수', good: '예약 전환율, 실제 내원 수' },
  { label: '제작 이후', bad: '업로드 후 방치', good: '퍼널 분석 · 지속 최적화' },
]

const funnelData = [
  { label: '잠재 고객 유입', value: 10000, pct: 100, desc: '통합 콘텐츠 — 넓은 접점 확보', rate: null, isLast: false },
  { label: '관심 고객 전환', value: 1000, pct: 65, desc: '핵심 콘텐츠 — 신뢰 · 전문성 구축', rate: '10%', isLast: false },
  { label: '예약 의향 고객', value: 300, pct: 38, desc: '랜딩페이지 — 행동 유도 동선', rate: '30%', isLast: false },
  { label: '실제 예약 환자', value: 100, pct: 20, desc: '최종 전환 — 진료실 입장', rate: '33.3%', isLast: true },
]

const deliverables = [
  {
    icon: '🎯',
    title: '타겟 환자 분석 리포트',
    desc: '원장님 병원에 맞는 타겟 환자 프로파일과 경쟁 분석 결과를 문서로 제공합니다.',
  },
  {
    icon: '📋',
    title: '채널 전략 기획서',
    desc: '6개월 이상의 콘텐츠 방향성과 전환 퍼널 설계가 담긴 마스터 기획서를 제공합니다.',
  },
  {
    icon: '🎬',
    title: '전문 콘텐츠 제작',
    desc: 'TVCF, 유튜브 정기 영상, 숏폼 바이럴까지 — 일관된 브랜드 방향으로 제작합니다.',
  },
  {
    icon: '📊',
    title: '월별 성과 리포트',
    desc: '예약 전환율, 클릭률, 시청 지속 시간 등 핵심 지표를 매월 정리해 드립니다.',
  },
  {
    icon: '🔄',
    title: '지속 최적화 운영',
    desc: '성과 데이터를 기반으로 다음 콘텐츠 전략을 계속 개선하는 순환 시스템입니다.',
  },
  {
    icon: '💬',
    title: '전담 PD 1:1 상담',
    desc: '의료 콘텐츠를 이해하는 전담 PD가 처음부터 끝까지 원장님과 함께합니다.',
  },
]

const promises = [
  {
    num: '01',
    title: '조회수가 아닌 예약전환으로 평가합니다',
    desc: '저희의 성공 지표는 구독자 수나 조회수가 아닙니다. 원장님의 진료실에 실제로 환자가 늘어났는가, 그것만으로 평가받겠습니다.',
  },
  {
    num: '02',
    title: '원장님의 전문성을 가볍게 만들지 않겠습니다',
    desc: '화려함보다 신뢰. 자극적인 편집보다 원장님의 진정성이 전해지는 콘텐츠를 만듭니다. 환자가 원장님을 신뢰하게 만드는 것이 우리의 역할입니다.',
  },
  {
    num: '03',
    title: '데이터로 증명하며 함께 성장합니다',
    desc: '감이 아닌 데이터로 전략을 개선합니다. 매월 성과를 투명하게 공유하고, 더 나은 결과를 향해 함께 발전해 나갑니다.',
  },
]

/* ── 페이지 ────────────────────────────────────────── */
export default function LogicPage() {
  const [heroRef, heroVisible] = useInView(0.1)
  const [probRef, probVisible] = useInView(0.06)
  const [procRef, procVisible] = useInView(0.04)
  const [coreRef, coreVisible] = useInView(0.04)
  const [contentRef, contentVisible] = useInView(0.04)
  const [compRef, compVisible] = useInView(0.06)
  const [funnelRef, funnelVisible] = useInView(0.06)
  const [delivRef, delivVisible] = useInView(0.06)
  const [promRef, promVisible] = useInView(0.08)
  const [ctaRef, ctaVisible] = useInView(0.15)

  return (
    <main className="bg-white text-navy font-sans antialiased">

      {/* ══ NAVBAR ══════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-md border-b border-navy/8 py-3 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* 로고 */}
          <a href="/" aria-label="Higher Production 홈으로">
            <div style={{
              width: '120px', height: '58px',
              backgroundImage: 'url(/higher-logo-dark.png)',
              backgroundSize: '395px 280px',
              backgroundPosition: '-137px -110px',
              backgroundRepeat: 'no-repeat',
            }} />
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="hidden sm:inline-flex items-center gap-1.5 text-navy/45 hover:text-navy text-sm font-medium transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              홈으로
            </a>
            <a href="/#contact"
              className="inline-flex items-center gap-2 bg-royal-blue hover:bg-royal-blue-light text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] blue-glow-sm"
            >
              무료 진단 신청
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* ══ HERO ════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center pt-48 pb-24 px-6 text-center overflow-hidden bg-white">
        {/* 배경 글로우 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 65%)' }} />
        {/* 좌우 라인 */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/10 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/8 to-transparent" />

        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">
                The Conversion System
              </span>
              <div className="section-divider" />
            </div>

            <h1 className="font-serif font-bold text-navy mb-9"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)', lineHeight: 1.12, letterSpacing: '0.01em' }}
            >
              그래서 너네는<br />
              <span className="gradient-text">뭐가 다른데요?</span>
            </h1>

            <p className="text-navy/50 leading-relaxed mx-auto mb-12"
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)', maxWidth: '34rem', wordBreak: 'keep-all' }}
            >
              단순한 영상 제작이 아닌,<br />
              <span className="text-navy/75 font-semibold">고객전환까지 책임지는 4단계 프로세스</span>
            </p>

            {/* 빠른 통계 3개 */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              {[
                { num: '1%', label: '목표 전환율', sub: '10,000명 → 100명 예약' },
                { num: '4단계', label: '정밀 프로세스', sub: '분석 → 기획 → 제작 → 최적화' },
                { num: '100%', label: '예약전환 집중', sub: '조회수가 아닌 성과 측정' },
              ].map((item, i) => (
                <div key={i} className="light-card rounded-2xl p-5 text-center">
                  <div className="font-serif font-black text-royal-blue mb-1"
                    style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', lineHeight: 1 }}
                  >
                    {item.num}
                  </div>
                  <div className="text-navy font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-navy/35 text-xs leading-snug">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* 스크롤 유도 */}
            <div className="flex flex-col items-center gap-2 text-navy/20">
              <span className="text-xs tracking-[0.3em] uppercase font-medium">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-navy/20 to-transparent mx-auto" />
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE PROBLEM ═════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: '#F0F7FF' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/8 to-transparent" />

        <div ref={probRef} className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${probVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-red-400/60" />
              <span className="text-red-500 text-xs font-bold tracking-[0.35em] uppercase">The Problem</span>
              <div className="h-px w-8 bg-red-400/60" />
            </div>
            <h2 className="font-serif font-bold text-navy mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
            >
              왜 대부분의 병원 유튜브는<br />실패하는가
            </h2>
            <p className="text-navy/45 mx-auto leading-relaxed" style={{ fontSize: '1.15rem', maxWidth: '30rem' }}>
              문제는 제작 퀄리티가 아닙니다.<br />전략과 기획의 부재입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problemCards.map((card, i) => (
              <div key={i}
                className={`rounded-2xl bg-white border border-red-100 p-8 transition-all duration-700 ${probVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-red-400">
                    {card.icon}
                  </svg>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 text-red-400 text-xs font-bold px-2.5 py-1 rounded-full mb-4">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  {card.stat}
                </div>
                <h3 className="font-bold text-navy text-lg mb-3">{card.title}</h3>
                <p className="text-navy/50 leading-relaxed" style={{ fontSize: '0.95rem' }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${probVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-serif text-navy/55 leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
              조회수 100만 → 예약 1건 vs{' '}
              <span className="text-navy font-semibold">조회수 1,000 → 예약 10건</span>
            </p>
            <p className="text-navy/35 text-sm mt-2">어떤 콘텐츠가 원장님께 더 나은 콘텐츠일까요?</p>
          </div>
        </div>
      </section>

      {/* ══ CORE SYSTEM ══════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 65%)' }}
        />

        <div ref={coreRef} className="max-w-5xl mx-auto">
          {/* 헤더 */}
          <div className={`text-center mb-24 transition-all duration-700 ${coreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">Core System</span>
              <div className="section-divider" />
            </div>
            <h2 className="font-serif font-bold text-navy"
              style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
            >
              4단계<br />
              <span className="gradient-text">고객전환</span><br />
              프로세스
            </h2>
            <p className="text-navy/50 mt-10 mx-auto"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', maxWidth: '38rem', lineHeight: 1.75, wordBreak: 'keep-all' }}
            >
              잠재 고객이 원장님의 진료실에 앉기까지,<br />
              콘텐츠 하나하나가 정밀하게 설계됩니다.
            </p>
          </div>

          {/* 4단계 카드 */}
          <div className="space-y-5">
            {[
              {
                num: '01',
                title: '통합 콘텐츠',
                tag: '잠재 고객 유입',
                headline: '대중성을 통해 잠재 고객을 모읍니다',
                desc: '원장님의 서비스에 관심 있는 잠재 구매자를 유입시키는 단계입니다. 대중성 있는 의료 정보 콘텐츠와 SNS 홍보를 통해 최대한 많은 잠재 고객과 접점을 만듭니다.',
                example: '예) "임플란트 비용, 얼마가 적당할까요?" 콘텐츠로 임플란트에 관심 있는 잠재 환자를 채널로 유입',
                color: '#007AFF',
                bg: '#F0F7FF',
              },
              {
                num: '02',
                title: '핵심 콘텐츠',
                tag: '신뢰 구축 · 설득',
                headline: '전문성으로 잠재 고객을 설득합니다',
                desc: '유입된 잠재 고객이 "이 병원에 가야겠다"고 결심하게 만드는 단계입니다. 원장님의 전문성과 진료 철학을 깊이 있게 전달해 신뢰를 구축하고 실질적인 예약 의향을 끌어냅니다.',
                example: '예) "30년 경력 전문의의 무통 임플란트 시술법" 콘텐츠로 신뢰와 예약 의향을 동시에 달성',
                color: '#3B88FF',
                bg: '#FFFFFF',
              },
              {
                num: '03',
                title: '랜딩페이지',
                tag: '구매 유도 · 행동',
                headline: '콘텐츠에서 예약 페이지로 직접 연결합니다',
                desc: '영상을 본 환자가 바로 행동으로 이어지도록 설계하는 단계입니다. 설명란 링크(인포크링크 등)를 통해 상담 신청 페이지, 병원 위치 안내, 이벤트 정보로 자연스럽게 연결합니다.',
                example: '예) 영상 설명란 "지금 바로 무료 상담 신청하기 →" 링크로 랜딩페이지 전환',
                color: '#0057D9',
                bg: '#F0F7FF',
              },
              {
                num: '04',
                title: '구매전환',
                tag: '예약 · 내원 · 결제',
                headline: '잠재 고객이 실제 환자로 전환됩니다',
                desc: '모든 콘텐츠 전략이 수렴되는 최종 단계입니다. 예약 완료 → 내원 상담 → 최종 결제까지 이어지는 전환 여정을 완성합니다. 이것이 저희가 정의하는 진짜 성공입니다.',
                example: '예) 예약 완료 후 내원 상담, 실제 시술 및 결제 완료 — 채널 ROI 달성',
                color: '#007AFF',
                bg: '#FFFFFF',
              },
            ].map((step, i) => (
              <div key={i}>
                <div
                  className={`relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${coreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{
                    background: step.bg,
                    border: `1.5px solid rgba(0,122,255,${0.1 + i * 0.04})`,
                    transitionDelay: `${i * 160}ms`,
                    padding: 'clamp(2.5rem, 6vw, 4rem)',
                  }}
                >
                  {/* 대형 배경 숫자 */}
                  <div
                    className="absolute top-4 right-6 font-serif font-black leading-none select-none pointer-events-none"
                    style={{ fontSize: 'clamp(6rem, 18vw, 12rem)', color: `rgba(0,122,255,0.04)`, letterSpacing: '-0.05em' }}
                  >
                    {step.num}
                  </div>

                  <div className="relative z-10">
                    {/* STEP 라벨 + 태그 */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="font-mono font-black text-royal-blue/35 tracking-[0.25em]"
                        style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)' }}
                      >
                        STEP {step.num}
                      </span>
                      <span className="font-bold px-4 py-1.5 rounded-full border"
                        style={{
                          fontSize: 'clamp(0.75rem, 1.3vw, 0.9rem)',
                          color: step.color,
                          background: `${step.color}0D`,
                          borderColor: `${step.color}28`,
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    {/* 단계 제목 */}
                    <h3 className="font-serif font-bold text-navy mb-5"
                      style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-0.025em' }}
                    >
                      {step.title}
                    </h3>

                    {/* 헤드라인 */}
                    <p className="font-semibold text-navy/70 mb-6"
                      style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.55rem)', lineHeight: 1.5 }}
                    >
                      {step.headline}
                    </p>

                    {/* 설명 */}
                    <p className="text-navy/50 leading-relaxed mb-10"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '44rem', lineHeight: 1.85, wordBreak: 'keep-all' }}
                    >
                      {step.desc}
                    </p>

                    {/* 예시 */}
                    <div className="inline-flex items-start gap-3 rounded-2xl px-6 py-4"
                      style={{ background: `${step.color}08`, border: `1px solid ${step.color}22` }}
                    >
                      <span className="text-royal-blue font-black text-base flex-shrink-0 mt-0.5">✦</span>
                      <span className="text-navy/55 leading-relaxed"
                        style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)' }}
                      >
                        {step.example}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 연결 화살표 */}
                {i < 3 && (
                  <div
                    className={`flex justify-center py-5 transition-all duration-500 ${coreVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${i * 160 + 350}ms` }}
                  >
                    <div className="flex flex-col items-center gap-2 text-royal-blue/30">
                      <div className="w-px h-8 bg-gradient-to-b from-royal-blue/25 to-royal-blue/10" />
                      <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                        <path d="M1 1l7 9 7-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 마무리 문구 */}
          <div className={`mt-20 text-center transition-all duration-700 delay-700 ${coreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-serif text-navy/45 leading-relaxed"
              style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.8rem)' }}
            >
              이 4단계가 작동할 때,<br />
              <span className="text-navy font-semibold">조회수 1,000명이 예약 10건이 됩니다.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ══ 4-STEP PROCESS ══════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden bg-white">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/10 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/8 to-transparent" />

        <div ref={procRef} className="max-w-3xl mx-auto">
          {/* 헤더 */}
          <div className={`text-center mb-16 transition-all duration-700 ${procVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">Our Process</span>
              <div className="section-divider" />
            </div>
            <h2 className="font-serif font-bold text-navy mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
            >
              고객맞춤 콘텐츠 제작<br />4단계 시스템
            </h2>
            <p className="text-navy/45 mx-auto leading-relaxed" style={{ fontSize: '1.1rem', maxWidth: '28rem' }}>
              분석부터 최적화까지, 예약전환을 위한 하나의 완결된 시스템
            </p>
          </div>

          {/* 스토리 플로우 */}
          <div className="relative">
            {/* 세로 연결선 */}
            <div className="absolute left-[28px] top-14 bottom-0 w-px pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, #007AFF22, #007AFF44 20%, #007AFF44 80%, transparent)' }}
            />

            {processSteps.map((step, i) => (
              <div key={i}>
                {/* 카드 */}
                <div
                  className={`relative rounded-2xl light-card p-8 hover:border-royal-blue/25 hover:shadow-lg transition-all duration-600 ${procVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                  style={{ transitionDelay: `${i * 160}ms` }}
                >
                  <div className="flex items-start gap-5">
                    {/* 아이콘 + 번호 */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center border"
                        style={{ background: `${step.color}10`, borderColor: `${step.color}25` }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: step.color }}>
                          {step.iconPath}
                        </svg>
                      </div>
                      <span className="text-xs font-mono font-bold" style={{ color: `${step.color}70` }}>
                        {step.num}
                      </span>
                    </div>

                    {/* 콘텐츠 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <h3 className="font-bold text-navy" style={{ fontSize: '1.2rem' }}>{step.title}</h3>
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full border"
                          style={{ color: `${step.color}80`, background: `${step.color}08`, borderColor: `${step.color}20` }}
                        >
                          {step.tag}
                        </span>
                      </div>

                      {/* 포인트 리스트 */}
                      <ul className="space-y-2.5 mb-5">
                        {step.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                              style={{ background: step.color }} />
                            <span className="text-navy/55 leading-relaxed" style={{ fontSize: '0.92rem' }}>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* 인사이트 문구 */}
                      <div className="rounded-xl px-5 py-3.5 border-l-[3px]"
                        style={{ background: `${step.color}06`, borderColor: `${step.color}45` }}
                      >
                        <p className="font-serif italic text-sm" style={{ color: `${step.color}CC` }}>
                          &ldquo;{step.insight}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 연결 화살표 */}
                {i < processSteps.length - 1 && (
                  <div className={`flex items-center pl-7 py-3 transition-all duration-500 ${procVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${i * 160 + 300}ms` }}
                  >
                    <div className="flex flex-col items-center gap-1 text-royal-blue/30">
                      <div className="w-px h-3 bg-royal-blue/20" />
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M1 1l4 5 4-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="ml-3 text-navy/25 text-xs font-medium">다음 단계로</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTENT FUNNEL ══════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: '#F0F7FF' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/8 to-transparent" />

        <div ref={contentRef} className="max-w-3xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">Content Strategy</span>
              <div className="section-divider" />
            </div>
            <h2 className="font-serif font-bold text-navy mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
            >
              고객전환 콘텐츠<br />제작 프로세스
            </h2>
            <p className="text-navy/45 mx-auto leading-relaxed" style={{ fontSize: '1.1rem', maxWidth: '28rem', wordBreak: 'keep-all' }}>
              잠재 고객을 만나고, 신뢰를 쌓고, 예약으로 전환하는<br />4가지 콘텐츠 전략
            </p>
          </div>

          {/* 콘텐츠 타입 플로우 */}
          <div className="relative">
            <div className="absolute left-[22px] top-10 bottom-10 w-0.5 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(0,122,255,0.15), rgba(0,122,255,0.4) 50%, rgba(0,122,255,0.15))' }}
            />

            {[
              {
                num: '01',
                type: '롤플레이 콘텐츠',
                tag: 'Awareness',
                role: '잠재 환자가 처음 채널을 발견하는 진입 콘텐츠',
                keywords: ['조회수', '신뢰', '채널 성장', '브랜드 인지'],
                points: [
                  '검색 유입을 극대화하는 의료 정보 · 증상 해설 콘텐츠',
                  '원장님의 전문성이 자연스럽게 드러나는 스토리텔링 구조',
                  '처음 방문한 잠재 환자가 구독을 누르게 만드는 설계',
                  '트렌드 키워드와 의료 신뢰성을 결합한 바이럴 전략',
                ],
                color: '#007AFF',
              },
              {
                num: '02',
                type: '핵심 콘텐츠',
                tag: 'Trust Building',
                role: '예약 의향을 만드는 전문성 · 신뢰 구축 영상',
                keywords: ['전문성', '케이스', '치료 결과', '신뢰 형성'],
                points: [
                  '환자의 고민과 치료 여정을 깊이 있게 다루는 핵심 영상',
                  '실제 진료 케이스와 치료 결과로 공감과 설득력 동시 확보',
                  '원장님의 철학과 진료 방향이 자연스럽게 전달되는 구조',
                  '경쟁 병원 대비 명확한 차별화 포지셔닝이 드러나는 설계',
                ],
                color: '#3B88FF',
              },
              {
                num: '03',
                type: '랜딩페이지 연동',
                tag: 'Conversion',
                role: '영상에서 예약 페이지로 자연스럽게 이동시키는 동선',
                keywords: ['CTA', '예약 유도', '전환 동선', '행동 유도'],
                points: [
                  '영상 내 명확한 CTA로 시청자가 자연스럽게 행동하도록 유도',
                  '랜딩페이지와 영상 메시지의 완전한 일관성 유지',
                  '예약 장벽을 낮추는 FAQ · 후기 · 상담 연계 콘텐츠 구성',
                  '전환율 측정과 A/B 테스트를 통한 지속 최적화',
                ],
                color: '#0057D9',
              },
              {
                num: '04',
                type: '구독 전환 · 재방문',
                tag: 'Retention',
                role: '한 번 온 환자가 재방문하고 주변에 추천하는 시스템',
                keywords: ['재방문', '구독자', '충성 환자', '브랜드 자산화'],
                points: [
                  '진료 후 환자가 자연스럽게 재구독 · 재방문하게 만드는 콘텐츠',
                  '리뷰 · 후기 · 치료 스토리를 통한 신규 환자 유입 선순환 구조',
                  '채널이 장기적인 브랜드 자산으로 성장하는 누적 효과 설계',
                  '구독자 기반의 자생적 환자 유입 채널 구축',
                ],
                color: '#007AFF',
              },
            ].map((item, i) => (
              <div key={i}>
                <div
                  className={`relative rounded-2xl bg-white border border-navy/8 p-7 transition-all duration-700 hover:border-royal-blue/25 hover:shadow-lg ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-start gap-5">
                    {/* 번호 원 */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center border-2"
                        style={{ background: `${item.color}12`, borderColor: `${item.color}40` }}
                      >
                        <span className="font-mono font-black text-sm" style={{ color: item.color }}>{item.num}</span>
                      </div>
                    </div>

                    {/* 내용 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-navy" style={{ fontSize: '1.15rem' }}>{item.type}</h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border"
                          style={{ color: `${item.color}80`, background: `${item.color}08`, borderColor: `${item.color}22` }}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-navy/50 text-sm mb-4">{item.role}</p>

                      {/* 키워드 태그 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.keywords.map((kw, j) => (
                          <span key={j} className="text-xs px-2.5 py-1 rounded-full border font-medium"
                            style={{ color: `${item.color}90`, background: `${item.color}07`, borderColor: `${item.color}20` }}
                          >
                            {kw}
                          </span>
                        ))}
                      </div>

                      {/* 포인트 리스트 */}
                      <ul className="space-y-2">
                        {item.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                              style={{ background: item.color }} />
                            <span className="text-navy/55 text-sm leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 연결 화살표 */}
                {i < 3 && (
                  <div className={`flex items-center pl-[18px] py-2.5 gap-3 transition-all duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${i * 150 + 250}ms` }}
                  >
                    <div className="flex flex-col items-center gap-1 text-royal-blue/25">
                      <div className="w-px h-3 bg-royal-blue/20" />
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M1 1l4 5 4-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-navy/22 text-xs font-medium">다음 단계로</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON ══════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: '#F0F7FF' }}>
        <div ref={compRef} className="max-w-5xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-700 ${compVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">The Difference</span>
              <div className="section-divider" />
            </div>
            <h2 className="font-serif font-bold text-navy mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
            >
              일반 제작사와의<br />결정적 차이
            </h2>
            <p className="text-navy/45 mx-auto" style={{ fontSize: '1.1rem', maxWidth: '28rem' }}>
              원장님의 소중한 마케팅 예산,<br />
              <strong className="text-navy/65 font-semibold">'영상 제작'</strong>에 쓰셨습니까 아니면{' '}
              <strong className="text-navy/65 font-semibold">'환자 유입'</strong>에 쓰셨습니까?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* 일반 제작사 */}
            <div className={`rounded-2xl bg-red-50 border border-red-200 p-8 transition-all duration-700 delay-100 ${compVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2l10 10M12 2L2 12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-red-500 font-bold text-sm">일반 제작사</div>
                  <div className="text-red-400/60 text-xs">조회수 집착형</div>
                </div>
              </div>
              <ul className="divide-y divide-red-200/50 space-y-0">
                {compRows.map((row, i) => (
                  <li key={i} className="py-4">
                    <div className="text-red-400/60 text-xs font-bold uppercase tracking-wider mb-1.5">{row.label}</div>
                    <div className="text-navy/55 leading-snug" style={{ fontSize: '0.93rem' }}>{row.bad}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 하이어 프로덕션 */}
            <div className={`rounded-2xl bg-white border border-royal-blue/22 shadow-xl p-8 transition-all duration-700 delay-200 ${compVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-royal-blue/10 border border-royal-blue/22 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <polyline points="1,7 5,11 13,3" stroke="#007AFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-royal-blue font-bold text-sm">하이어 프로덕션</div>
                  <div className="text-royal-blue/50 text-xs">예약 전환 집중형</div>
                </div>
              </div>
              <ul className="divide-y divide-navy/6 space-y-0">
                {compRows.map((row, i) => (
                  <li key={i}
                    className={`py-4 transition-all duration-500 ${compVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${350 + i * 70}ms` }}
                  >
                    <div className="text-royal-blue/55 text-xs font-bold uppercase tracking-wider mb-1.5">{row.label}</div>
                    <div className="text-navy font-medium leading-snug" style={{ fontSize: '0.93rem' }}>{row.good}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONVERSION FUNNEL ═══════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden bg-white">
        <div ref={funnelRef} className="max-w-3xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-700 ${funnelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">Conversion Funnel</span>
              <div className="section-divider" />
            </div>
            <h2 className="font-serif font-bold text-navy mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
            >
              10,000명의 유입이<br />
              <span className="gradient-text">100명의 예약</span>으로
            </h2>
            <p className="text-navy/45" style={{ fontSize: '1.1rem' }}>
              단순 조회수가 아닌, 예약으로 이어지는 정밀한 전환 시스템
            </p>
          </div>

          {/* 퍼널 바 */}
          <div className="flex flex-col items-center mb-14">
            {funnelData.map((step, i) => (
              <div key={i} className="w-full flex flex-col items-center">

                {/* 전환율 배지 */}
                {step.rate && (
                  <div className={`mb-2 px-3 py-1 rounded-full text-xs font-bold border transition-all duration-500 ${funnelVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ background: 'rgba(0,122,255,0.06)', borderColor: 'rgba(0,122,255,0.2)', color: '#007AFF', transitionDelay: `${i * 160}ms` }}
                  >
                    전환율 {step.rate}
                  </div>
                )}

                {/* 퍼널 바 */}
                <div
                  className={`relative flex items-center justify-between px-6 rounded-xl overflow-hidden transition-all duration-1000 ${funnelVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    width: funnelVisible ? `${step.pct}%` : '5%',
                    minWidth: funnelVisible ? '220px' : '0px',
                    height: '68px',
                    background: step.isLast
                      ? 'linear-gradient(135deg, #007AFF, #3B88FF)'
                      : `rgba(0,122,255,${0.05 + i * 0.05})`,
                    border: `1px solid rgba(0,122,255,${0.15 + i * 0.12})`,
                    transitionDelay: `${i * 200 + 200}ms`,
                  }}
                >
                  <span className="font-semibold text-sm"
                    style={{ color: step.isLast ? '#ffffff' : 'rgba(10,25,47,0.7)' }}
                  >
                    {step.label}
                  </span>
                  <span className="font-serif font-black"
                    style={{
                      fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                      color: step.isLast ? '#ffffff' : '#007AFF',
                      lineHeight: 1,
                    }}
                  >
                    <CountUp to={step.value} duration={1400 + i * 200} active={funnelVisible} />명
                  </span>
                </div>

                {/* 설명 */}
                <div className={`text-xs mt-2 mb-2 text-navy/35 transition-all duration-500 ${funnelVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${i * 200 + 600}ms` }}
                >
                  {step.desc}
                </div>

                {/* 화살표 */}
                {i < funnelData.length - 1 && (
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="mb-2 text-royal-blue/30"
                    style={{ opacity: funnelVisible ? 1 : 0, transition: `opacity 0.5s ${i * 200 + 400}ms` }}
                  >
                    <path d="M1 1l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* 결과 지표 */}
          <div className={`light-card-blue rounded-2xl p-8 text-center transition-all duration-700 delay-[900ms] ${funnelVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <div className="font-serif font-black text-royal-blue mb-1"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', lineHeight: 1 }}
                >
                  1%
                </div>
                <div className="text-navy/40 text-sm">최종 전환율</div>
                <div className="text-navy/25 text-xs mt-1">10,000명 → 100명 예약</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-px h-12 bg-navy/10 hidden sm:block" />
                <div className="sm:hidden h-px w-full bg-navy/10" />
              </div>
              <div>
                <div className="font-serif font-black text-royal-blue mb-1"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', lineHeight: 1 }}
                >
                  ×100
                </div>
                <div className="text-navy/40 text-sm">일반 대비 효율</div>
                <div className="text-navy/25 text-xs mt-1">0.0001% → 1% 전환율</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT YOU GET ════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: '#F0F7FF' }}>
        <div ref={delivRef} className="max-w-6xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-700 ${delivVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">What You Get</span>
              <div className="section-divider" />
            </div>
            <h2 className="font-serif font-bold text-navy mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
            >
              하이어 프로덕션과<br />함께하면 받는 것들
            </h2>
            <p className="text-navy/45 mx-auto" style={{ fontSize: '1.1rem', maxWidth: '28rem' }}>
              단순 영상 제작이 아닌, 예약전환을 위한 완결된 시스템 전체
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((item, i) => (
              <div key={i}
                className={`group light-card rounded-2xl p-7 hover:border-royal-blue/28 hover:shadow-md transition-all duration-500 ${delivVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-5 select-none">{item.icon}</div>
                <h3 className="font-bold text-navy text-base mb-3">{item.title}</h3>
                <p className="text-navy/48 leading-relaxed" style={{ fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR PROMISE ═════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden bg-white">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/10 to-transparent" />

        <div ref={promRef} className="max-w-5xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-700 ${promVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">Our Promise</span>
              <div className="section-divider" />
            </div>
            <h2 className="font-serif font-bold text-navy mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1 }}
            >
              우리가 약속드리는 것
            </h2>
          </div>

          <div className="space-y-5">
            {promises.map((p, i) => (
              <div key={i}
                className={`light-card-blue rounded-2xl p-8 flex items-start gap-6 hover:border-royal-blue/30 transition-all duration-500 ${promVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-royal-blue/10 border border-royal-blue/20 flex items-center justify-center">
                  <span className="text-royal-blue font-mono font-black text-base">{p.num}</span>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-3">{p.title}</h3>
                  <p className="text-navy/55 leading-relaxed" style={{ fontSize: '0.97rem', wordBreak: 'keep-all' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════ */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: '#F0F7FF' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.12] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 65%)' }}
        />

        <div ref={ctaRef} className="max-w-3xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.35em] uppercase">Free Diagnosis</span>
              <div className="section-divider" />
            </div>

            <h2 className="font-serif font-bold text-navy mb-6"
              style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5rem)', lineHeight: 1.06, letterSpacing: '-0.01em' }}
            >
              우리 병원도<br />
              이 시스템이<br />
              <span className="gradient-text">가능할까요?</span>
            </h2>

            <p className="text-navy/45 leading-relaxed mb-12 mx-auto"
              style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', maxWidth: '26rem', wordBreak: 'keep-all' }}
            >
              채널 현황을 분석하고,<br />
              예약전환을 위한 맞춤 전략을<br />
              <span className="text-navy/70 font-semibold">무료로 안내해드립니다.</span>
            </p>

            <a href="/#contact"
              className="inline-flex items-center gap-3 bg-royal-blue hover:bg-royal-blue-light text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.03] blue-glow shadow-xl"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', padding: '1.15rem 2.5rem' }}
            >
              무료 채널 정밀 진단 신청하기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-navy/30 text-sm">
              <a href="tel:010-3313-0388" className="hover:text-royal-blue transition-colors">
                📞 010-3313-0388
              </a>
              <span className="text-navy/15">·</span>
              <a href="mailto:higher3pd@gmail.com" className="hover:text-royal-blue transition-colors">
                ✉ higher3pd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER MINI ══════════════════════════════ */}
      <footer className="py-7 text-center border-t border-navy/6" style={{ background: '#0A192F' }}>
        <p className="text-white/20 text-xs">© 2026 Higher Production. All rights reserved.</p>
      </footer>

    </main>
  )
}
