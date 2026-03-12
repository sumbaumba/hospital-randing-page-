'use client'

import { useEffect, useRef } from 'react'

const promises = [
  {
    icon: (
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: '전문 분야에만 집중',
    desc: '잡다한 대행이 아닌, 저희가 가장 자신있고 잘하는 [유튜브 마케팅]만 진행합니다.',
  },
  {
    icon: (
      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: '결과로 증명하는 파트너',
    desc: '화려한 포트폴리오 이미지 대신, 실제 예약전환 수치로 성과를 보고합니다.',
  },
  {
    icon: (
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    title: '단 하나의 파트너십',
    desc: '원장님 한 분 한 분에게 맞춤화된 전략으로, 하나의 진정한 마케팅 파트너가 됩니다.',
  },
]

export default function IdentitySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-scale, .reveal-stagger').forEach((n) =>
            n.classList.add('is-visible')
          )
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white py-32 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Central quote */}
        <div className="reveal-scale text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-royal-blue/50" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">Our Identity</span>
            <div className="h-px w-8 bg-royal-blue/50" />
          </div>

          <h2 className="font-serif font-bold text-navy mb-12" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            우리의 약속
          </h2>

          {/* Main quote */}
          <div className="relative inline-block max-w-3xl mx-auto">
            <div
              className="absolute -top-6 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,122,255,0.4), transparent)' }}
            />
            <div
              className="absolute -bottom-6 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(0,122,255,0.4), transparent)' }}
            />

            <p
              className="font-serif font-bold text-navy leading-relaxed px-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
            >
              저희는<br />
              <span className="gradient-text">[유튜브 마케팅]</span><br />
              전문 업체입니다.
            </p>
            <p
              className="font-serif text-navy/65 leading-relaxed mt-5 px-4"
              style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)' }}
            >
              저희가 자신있고, 잘하는 것만 진행합니다.
            </p>
          </div>

          <p className="mt-12 text-navy/40 max-w-xl mx-auto leading-relaxed" style={{ fontSize: '1.1rem' }}>
            잡다한 대행이 아닌, 결과로 증명하는{' '}
            <span className="text-navy/65 font-medium">단 하나의 파트너</span>가 되겠습니다.
          </p>
        </div>

        {/* Promise cards */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {promises.map((p) => (
            <div
              key={p.title}
              className="group relative light-card-blue rounded-2xl p-8 border border-royal-blue/15 hover:border-royal-blue/40 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-royal-blue/10 group-hover:bg-royal-blue/20 border border-royal-blue/20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <svg className="text-royal-blue" width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-bold text-navy text-lg mb-3">{p.title}</h3>
              <p className="text-navy/50 leading-relaxed" style={{ fontSize: '0.95rem' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Final CTA strip */}
        <div className="reveal">
          <div className="rounded-2xl border border-glow-animate border-royal-blue/25 bg-gradient-to-br from-ice-blue to-white p-12 text-center shadow-lg">
            <p className="font-serif text-navy/60 text-xl mb-3">
              한 편의 의학 다큐멘터리처럼,
            </p>
            <p className="font-serif font-bold text-navy mb-10" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
              정갈하고 품격 있게 원장님의 이야기를 만들겠습니다.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-royal-blue hover:bg-royal-blue-light text-white font-bold px-12 py-5 rounded-xl transition-all duration-300 hover:scale-[1.04] blue-glow"
              style={{ fontSize: '1.1rem' }}
            >
              무료 채널 정밀 진단 신청하기
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
