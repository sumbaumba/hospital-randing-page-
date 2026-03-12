'use client'

import { useEffect, useRef } from 'react'

const features = [
  {
    num: '01',
    title: '환자 타겟 정밀 설계',
    desc: '불특정 다수가 아닌, 원장님의 관리가 필요한 환자를 타겟으로 집중합니다. 질환별 · 지역별 · 심리 상태별 세분화된 타겟 전략을 수립합니다.',
    icon: (
      <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: '02',
    title: '의료 심리학 기반 기획',
    desc: '환자가 검색하고, 고민하고, 결정하는 여정을 이해합니다. 의료를 이해하는 PD가 환자의 심리를 설계합니다.',
    icon: (
      <path d="M12 2a8 8 0 100 16A8 8 0 0012 2zm0 0v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: '03',
    title: '원장님 전문성 극대화',
    desc: '화려한 편집보다 원장님의 신뢰와 전문성이 자연스럽게 드러나는 콘텐츠 구조를 만듭니다. 환자가 먼저 연락하게 됩니다.',
    icon: (
      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: '04',
    title: '채널 전략부터 운영까지',
    desc: 'TVCF, 유튜브 운영, 숏폼/바이럴, 기업·정부 영상까지 — 원장님의 브랜드를 하나의 일관된 방향으로 운영합니다.',
    icon: (
      <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger').forEach((n) =>
            n.classList.add('is-visible')
          )
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-32 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/15 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <div className="reveal flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">
                Our Difference
              </span>
            </div>
            <h2 className="reveal font-serif font-bold text-navy mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.15 }}>
              병원 IQ의 차이
            </h2>
            <p className="reveal text-navy/55 leading-relaxed" style={{ fontSize: '1.2rem' }}>
              불특정 다수를 타겟해서 무분별하게 양산되는 콘텐츠가 아닌<br />
              <span className="text-navy font-semibold">원장님의 관리가 필요한 환자를 타겟으로 집중</span>합니다.
            </p>
          </div>

          {/* Quote card */}
          <div className="reveal-right">
            <div className="light-card-blue border-glow-animate rounded-2xl p-9 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)' }}
              />
              {/* Higher Production logo — absolute top-right, no background */}
              <img
                src="/higher-logo-dark.png"
                alt="Higher Production"
                className="absolute bottom-0 right-0 w-full object-contain pointer-events-none"
                style={{ opacity: 0.55, transform: 'translateX(4cm)' }}
              />
              <div className="text-royal-blue/20 font-serif text-8xl font-black leading-none mb-2 select-none">&ldquo;</div>
              <p className="font-serif text-navy/75 leading-relaxed" style={{ fontSize: '1.2rem' }}>
                우리는 의료를 이해하고<br />
                환자의 심리를 설계합니다.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-px bg-royal-blue/40" />
                <span className="text-royal-blue text-xs font-semibold">MEDTUBE 크리에이티브 디렉터</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feat) => (
            <div
              key={feat.num}
              className="group light-card rounded-2xl p-8 hover:border-royal-blue/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-royal-blue/8 group-hover:bg-royal-blue/15 border border-royal-blue/15 flex items-center justify-center transition-colors duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-royal-blue">
                      {feat.icon}
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-2.5">
                    <span className="text-royal-blue/50 text-xs font-mono font-bold">{feat.num}</span>
                    <h3 className="font-bold text-navy text-lg">{feat.title}</h3>
                  </div>
                  <p className="text-navy/50 leading-relaxed" style={{ fontSize: '1rem' }}>{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="reveal mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'TVCF', sub: 'TV 광고 제작' },
            { label: 'YouTube', sub: '채널 운영·기획' },
            { label: 'Short-form', sub: '숏폼 바이럴' },
            { label: 'Enterprise', sub: '기업·정부 영상' },
          ].map((item) => (
            <div key={item.label} className="text-center py-5 px-3 rounded-xl border border-navy/8 hover:border-royal-blue/30 hover:bg-royal-blue/4 transition-all duration-200">
              <div className="text-royal-blue font-bold text-base font-mono mb-1">{item.label}</div>
              <div className="text-navy/40 text-sm">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
