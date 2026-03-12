'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    emoji: '🎬',
    title: '기획을 할 줄 모르던 PD 시절,',
    desc: '원장님들께 그저 좋은 카메라, 좋은 편집으로 보답해드린다고 했습니다.',
    style: 'neutral',
  },
  {
    emoji: '💔',
    title: '결과는 처참했습니다.',
    desc: "'제작 퀄리티'로 승부하는 시대는 지났습니다.",
    style: 'red',
  },
  {
    emoji: '💡',
    title: '그래서 깨달았습니다.',
    desc: '중요한 것은 카메라가 아니라, 전략과 기획이라는 것을요.',
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
    <section id="story" ref={sectionRef} className="relative bg-ice-blue py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label + Title */}
        <div className="reveal text-center mb-16">
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

        {/* Horizontal 3-column cards with arrow connectors */}
        <div className="reveal-stagger grid items-stretch gap-0"
          style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr' }}
        >
          {steps.map((s, i) => (
            <>
              {/* Card */}
              <div
                key={s.title}
                className={`rounded-3xl text-center flex flex-col items-center justify-start transition-all duration-300 hover:-translate-y-1 px-8 py-12 ${
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
                  style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}
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
                  style={{ fontSize: '1.05rem', wordBreak: 'keep-all' }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Arrow connector — between cards only */}
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className="flex items-center justify-center px-3">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-8 h-px bg-navy/35" />
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="text-navy/50">
                      <path d="M12 8L0 0v16L12 8z" fill="currentColor" />
                    </svg>
                    <div className="w-8 h-px bg-navy/35" />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        {/* ── 하단 핵심 문구 — 세련되고 크게 ── */}
        <div className="reveal mt-16">
          <div className="rounded-3xl bg-white border border-royal-blue/15 shadow-md px-10 py-12 text-center relative overflow-hidden">
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
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
              >
                좋은 영상이 아닌,{' '}
                <span className="gradient-text">좋은 기획</span>이<br className="hidden sm:block" />
                병원을 채웁니다.
              </p>

              {/* 서브 문구 */}
              <p
                className="text-navy/50 leading-relaxed mx-auto"
                style={{ fontSize: '1.1rem', maxWidth: '32rem', wordBreak: 'keep-all' }}
              >
                저희는 처음부터 끝까지 조회수가 아닌,<br />
                <span className="text-navy/75 font-medium">예약전환</span>을 위해 기획합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
