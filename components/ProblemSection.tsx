'use client'

import { useEffect, useRef } from 'react'

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger').forEach((n) => {
            n.classList.add('is-visible')
          })
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
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Opening impact statement ── */}
        <div className="reveal text-center mb-24">
          <p
            className="font-serif font-black text-navy leading-[1.1] mb-2"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)' }}
          >
            조회수가 중요하지 않습니다.
          </p>
          <p
            className="font-serif font-black text-royal-blue leading-[1.1] mb-12"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)' }}
          >
            본질을 이해해야 합니다.
          </p>
          <div className="h-px w-16 bg-navy/12 mx-auto mb-10" />
          <p
            className="font-serif text-navy/50 leading-relaxed mx-auto"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)', maxWidth: '30rem', wordBreak: 'keep-all' }}
          >
            어떤 콘텐츠가 원장님한테<br className="sm:hidden" /> 더 나은 콘텐츠일까요?
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-red-400/60" />
            <span className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">The Problem</span>
            <div className="h-px w-8 bg-red-400/60" />
          </div>
          <h2 className="reveal font-serif font-bold text-navy mb-5" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            허상의 늪
          </h2>
          <p className="reveal text-navy/50 max-w-xl mx-auto leading-relaxed" style={{ fontSize: '1.2rem' }}>
            단순히 &apos;예쁜 영상&apos;만으로는 병원의 문턱을 넘게 할 수 없습니다.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Left: The wrong approach */}
          <div className="reveal-left relative rounded-2xl overflow-hidden border border-red-200 bg-red-50 p-8">
            {/* Decorative X — sharp square corners, thick */}
            <svg className="absolute top-4 right-4 text-red-300" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <line x1="5" y1="5" x2="33" y2="33" stroke="currentColor" strokeWidth="5" strokeLinecap="square"/>
              <line x1="33" y1="5" x2="5" y2="33" stroke="currentColor" strokeWidth="5" strokeLinecap="square"/>
            </svg>
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-500 text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/></svg>
                조회수 집착
              </span>
            </div>
            <h3 className="font-serif font-bold text-navy text-2xl mb-6">
              &apos;예쁜 영상&apos;의 함정
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '📹', text: '고화질 카메라, 좋은 편집만 강조' },
                { icon: '👁', text: '조회수는 높지만 예약전환 0건' },
                { icon: '💸', text: '제작비 지출 → 성과 없음' },
                { icon: '😔', text: '원장님의 전문성이 가볍게 보임' },
                { icon: '🔄', text: '매번 새 콘텐츠를 만들어도 반복 실패' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <span className="text-navy/55 leading-relaxed" style={{ fontSize: '1rem' }}>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Metric */}
            <div className="mt-8 rounded-xl bg-red-100 border border-red-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-navy/40 text-sm">월 조회수</span>
                <span className="text-navy/40 text-sm">예약전환</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-black font-serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>100만</span>
                <span className="text-red-400/60 text-lg">→</span>
                <span className="text-red-500 font-black font-serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>1명</span>
              </div>
              <div className="mt-3 w-full bg-red-200/60 rounded-full h-2">
                <div className="bg-red-400 rounded-full h-2" style={{ width: '0.1%', minWidth: '5px' }} />
              </div>
              <div className="text-right mt-2">
                <span className="text-red-400 text-sm font-semibold">전환율 0.0001%</span>
              </div>
            </div>
            <p className="mt-5 text-center text-red-400/80 font-medium leading-snug" style={{ fontSize: '0.95rem', wordBreak: 'keep-all' }}>
              불특정 다수를 타겟으로<br />무분별하게 양산되는 콘텐츠
            </p>
          </div>

          {/* Right: The right approach */}
          <div className="reveal-right relative rounded-2xl overflow-hidden border border-royal-blue/20 light-card-blue p-8">
            {/* Decorative V — thick checkmark */}
            <svg className="absolute top-4 right-4 text-royal-blue/40" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <polyline points="4,20 15,31 34,7" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter"/>
            </svg>
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 bg-royal-blue/10 border border-royal-blue/25 text-royal-blue text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="1,5 4,8 9,2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/></svg>
                전략적 타겟팅
              </span>
            </div>
            <h3 className="font-serif font-bold text-navy text-2xl mb-6">
              &apos;기획된 영상&apos;의 힘
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '🎯', text: '예약이 필요한 환자만 타겟하는 기획' },
                { icon: '🧠', text: '환자 심리와 구매 여정을 설계' },
                { icon: '📈', text: '조회수는 낮아도 예약전환율 극대화' },
                { icon: '🏥', text: '원장님의 전문성과 신뢰를 부각' },
                { icon: '💡', text: '콘텐츠마다 명확한 CTA와 전환 흐름' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <span className="text-navy/65 leading-relaxed" style={{ fontSize: '1rem' }}>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Metric */}
            <div className="mt-8 rounded-xl bg-royal-blue/8 border border-royal-blue/20 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-navy/40 text-sm">월 조회수</span>
                <span className="text-navy/40 text-sm">예약전환</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-royal-blue font-black font-serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>1,000명</span>
                <span className="text-royal-blue/50 text-lg">→</span>
                <span className="text-royal-blue font-black font-serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>10명</span>
              </div>
              <div className="mt-3 w-full bg-royal-blue/15 rounded-full h-2">
                <div className="bg-royal-blue rounded-full h-2 blue-glow-sm" style={{ width: '1%', minWidth: '36px' }} />
              </div>
              <div className="text-right mt-2">
                <span className="text-royal-blue text-sm font-bold">전환율 1%</span>
              </div>
            </div>
            <p className="mt-5 text-center text-royal-blue/70 font-medium leading-snug" style={{ fontSize: '0.95rem', wordBreak: 'keep-all' }}>
              원장님의 관리가 필요한<br />환자를 타겟으로 집중
            </p>
          </div>
        </div>

        {/* Bottom message */}
        <div className="reveal text-center mt-14">
          <p className="text-navy/40 leading-relaxed" style={{ fontSize: '1.05rem' }}>
            지인이 관리하거나 기획 없는 영상은 결국&nbsp;
            <span className="text-navy/65 font-medium">원장님의 전문성을 가볍게 만들 뿐</span>입니다.
          </p>
        </div>
      </div>
    </section>
  )
}
