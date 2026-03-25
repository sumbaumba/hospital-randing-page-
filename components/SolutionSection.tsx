'use client'

import { useEffect, useRef } from 'react'

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-scale').forEach((n) =>
            n.classList.add('is-visible')
          )
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="solution" ref={sectionRef} className="relative bg-ice-blue py-20 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Central question */}
        <div className="reveal-scale">
          <div className="relative rounded-2xl border border-royal-blue/20 bg-white p-10 md:p-14 text-center overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #007AFF 0%, transparent 60%)' }}
            />
            <div className="relative z-10">
              <p
                className="font-serif text-navy/80 leading-relaxed mb-8"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
              >
                100만의 바이럴성 조회수가 발생해도,&nbsp;
                <span className="text-red-500 font-semibold">예약전환이 1명</span>이라면
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                1,000명의 조회수로도&nbsp;
                <span className="text-royal-blue font-semibold">10명이 예약전환</span>이 되는 영상이라면
              </p>
              <div
                className="font-serif font-black text-navy"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}
              >
                어떤 콘텐츠가 원장님한테{' '}
                <span className="gradient-text">더 나은 콘텐츠</span>일까요?
              </div>
            </div>
          </div>
        </div>

        {/* Answer */}
        <div className="reveal text-center mt-10">
          <p className="text-navy/40" style={{ fontSize: '1.05rem' }}>
            답은 명확합니다.{' '}
            <span className="text-navy/65 font-medium">
              조회수가 아닌, 예약전환을 만드는 콘텐츠입니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
