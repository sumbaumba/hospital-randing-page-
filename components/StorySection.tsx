'use client'

import { Fragment, useEffect, useRef } from 'react'

const steps = [
  {
    emoji: '🎬',
    title: '감각으로만 기획했던\nPD 시절',
    desc: "'감각'을 통한 기획은\n시청자가 원하는 콘텐츠가\n될 수 없었습니다.",
    style: 'neutral',
  },
  {
    emoji: '💔',
    title: '결과는 처참했습니다.',
    desc: '전환율 0~1%,\n유튜브 제작에 돈만\n쏟아붓는 상황이 되었습니다.',
    style: 'red',
  },
  {
    emoji: '💡',
    title: '그래서 깨달았습니다.',
    desc: '중요한 것은 병원이 판매하는\n서비스에 맞춰 시청자의 감성을\n건드려야 한다는걸요.',
    style: 'blue',
  },
]

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-stagger').forEach((node) => {
            node.classList.add('is-visible')
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="story" ref={sectionRef} className="relative bg-ice-blue py-16 md:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label + Title */}
        <div className="reveal text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-royal-blue/50" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">
              Our Story
            </span>
            <div className="h-px w-10 bg-royal-blue/50" />
          </div>
          <h2
            className="font-serif font-bold text-navy"
            style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 1.15 }}
          >
            실패에서 배운 진실
          </h2>
        </div>

        {/* 3-column cards with arrow connectors (mobile: stacked, desktop: horizontal) */}
        <div className="reveal-stagger grid grid-cols-1 gap-5 story-grid">
          {steps.map((s, i) => (
            <Fragment key={s.title}>
              {/* Card */}
              <div
                className={`rounded-3xl text-center flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-1 px-6 py-8 md:px-8 md:py-12 ${
                  s.style === 'red'
                    ? 'bg-red-50 border border-red-200'
                    : s.style === 'blue'
                    ? 'bg-white border border-royal-blue/22 shadow-lg'
                    : 'bg-white border border-navy/8 shadow-sm'
                }`}
              >
                {/* Emoji */}
                <div className="leading-none select-none mb-7" style={{ fontSize: '3.8rem' }}>
                  {s.emoji}
                </div>

                {/* Title */}
                <h3
                  className={`font-serif font-bold leading-snug mb-5 ${
                    s.style === 'red'
                      ? 'text-red-600'
                      : s.style === 'blue'
                      ? 'text-royal-blue'
                      : 'text-navy'
                  }`}
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)', whiteSpace: 'pre-line' }}
                >
                  {s.title}
                </h3>

                {/* Description — 충분히 크고 진하게 */}
                <p
                  className={`leading-relaxed ${
                    s.style === 'red'
                      ? 'text-red-500/80'
                      : s.style === 'blue'
                      ? 'text-navy/65'
                      : 'text-navy/60'
                  }`}
                  style={{ fontSize: '1.05rem', wordBreak: 'keep-all', whiteSpace: 'pre-line' }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Arrow connector — between cards only (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-px bg-navy/35" />
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="text-navy/50">
                      <path d="M12 8L0 0v16L12 8z" fill="currentColor" />
                    </svg>
                    <div className="w-8 h-px bg-navy/35" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* ── 하단 핵심 문구 — 세련되고 크게 ── */}
        <div className="reveal mt-10 md:mt-16">
          <div className="rounded-3xl bg-white border border-royal-blue/15 shadow-md px-6 py-8 md:px-10 md:py-12 text-center relative overflow-hidden">
            {/* 배경 블루 글로우 */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 120%, #007AFF 0%, transparent 65%)' }}
            />

            <div className="relative z-10">
              {/* 작은 상단 라벨 */}
              <p
                className="text-navy/35 font-medium mb-4 tracking-wide uppercase"
                style={{ fontSize: '0.8rem', letterSpacing: '0.2em' }}
              >
                The Insight
              </p>

              {/* 핵심 문구 — 크고 강하게 */}
              <p
                className="font-serif font-bold text-navy leading-snug mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', wordBreak: 'keep-all' }}
              >
                저희의 목표는 조회수와 구독자가 아닙니다.<br />
                <span className="gradient-text">'매출이 증가되는 채널운영'</span>이 목표입니다.
              </p>

              {/* 서브 문구 */}
              <p
                className="text-navy/50 leading-relaxed mx-auto"
                style={{ fontSize: '1.1rem', maxWidth: '32rem', wordBreak: 'keep-all' }}
              >
                좋은 영상이 아닌, 좋은 기획이<br />
                병원을 채웁니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
