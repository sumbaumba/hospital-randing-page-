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
    title: "원장만의 특별한 '직원'이 되어드립니다.",
    desc: '병원경력 최소 5년이상, 이해도가 높은 마케팅 전문 PD가 환자가 검색하고, 고민하고, 결정하는 여정들을 이해한 심리를 설계합니다.',
    icon: (
      <path d="M12 2a8 8 0 100 16A8 8 0 0012 2zm0 0v8m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: '03',
    title: '환자 눈높이에 맞춘 전문성 강조',
    desc: '원장님의 유니크한 전문성을 환자시선에서 가볍고 이해하기 쉽게 풀어내는 콘텐츠 구조를 만들어, 환자가 먼저 연락하는 구조를 설계합니다.',
    icon: (
      <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: '04',
    title: '채널 운영부터 제작까지',
    desc: '유튜브 채널에 관련된 A to Z 기획부터 제작, 결과 보고 까지 전부 하이어가 진행합니다. 원장님은 치료에만 집중해주시면 됩니다.',
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
    <section ref={sectionRef} className="relative bg-white py-16 md:py-32 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/15 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-blue/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-20">
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
            <div className="light-card-blue border-glow-animate rounded-2xl p-6 md:p-9 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)' }}
              />
              {/* Higher Production logo — desktop only (overflow on mobile) */}
              <img
                src="/higher-logo-dark.png"
                alt="Higher Production"
                className="absolute bottom-0 right-0 w-full object-contain pointer-events-none hidden md:block"
                style={{ opacity: 0.55, transform: 'translateX(4cm)' }}
              />
              <div className="text-royal-blue/20 font-serif text-8xl font-black leading-none mb-2 select-none">&ldquo;</div>
              <p className="font-serif text-navy/75 leading-relaxed" style={{ fontSize: '1.2rem' }}>
                우리는 의료를 이해하고<br />
                환자의 심리를 설계합니다.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-px bg-royal-blue/40" />
                <span className="text-royal-blue text-xs font-semibold">하이어 프로덕션</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feat) => (
            <div
              key={feat.num}
              className="group light-card rounded-2xl p-5 md:p-8 hover:border-royal-blue/30 transition-all duration-300 hover:-translate-y-1"
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
                    <span className="text-royal-blue/50 text-sm font-mono font-bold">{feat.num}</span>
                    <h3 className="font-bold text-navy text-xl">{feat.title}</h3>
                  </div>
                  <p className="text-navy/50 leading-relaxed" style={{ fontSize: '1.1rem' }}>{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
