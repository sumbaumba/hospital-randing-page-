'use client'

import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '@/hooks/useCountUp'

function StatCard({
  label,
  views,
  viewsUnit,
  conversions,
  started,
  accent,
}: {
  label: string
  views: number
  viewsUnit: string
  conversions: number
  started: boolean
  accent: 'red' | 'blue'
}) {
  const viewCount = useCountUp(views, 2000, started)
  const convCount = useCountUp(conversions, 2000, started)

  const isRed = accent === 'red'

  const formatViews = (n: number) => {
    if (views >= 1000000) return `${(n / 10000).toFixed(0)}만`
    return n.toLocaleString()
  }

  return (
    <div
      className={`relative rounded-2xl p-10 border transition-all duration-500 ${
        isRed
          ? 'border-red-200 bg-red-50'
          : 'border-royal-blue/20 light-card-blue'
      }`}
    >
      {/* Label badge */}
      <div className={`inline-block text-xs font-bold tracking-widest uppercase mb-8 px-4 py-1.5 rounded-full ${
        isRed ? 'bg-red-100 text-red-500' : 'bg-royal-blue/12 text-royal-blue'
      }`}>
        {label}
      </div>

      {/* Views */}
      <div className="mb-8">
        <div className="text-navy/40 text-xs mb-2 uppercase tracking-widest font-semibold">조회수</div>
        <div
          className={`font-serif font-black leading-none ${isRed ? 'text-red-500' : 'text-navy'}`}
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          {formatViews(viewCount)}
          <span className={`ml-1 font-serif font-bold ${isRed ? 'text-red-400' : 'text-navy/60'}`}
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            {viewsUnit}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px mb-8 ${isRed ? 'bg-red-200' : 'bg-royal-blue/15'}`} />

      {/* Conversions */}
      <div>
        <div className="text-navy/40 text-xs mb-2 uppercase tracking-widest font-semibold">예약전환</div>
        <div
          className={`font-serif font-black leading-none flex items-baseline gap-2 ${isRed ? 'text-red-500' : 'text-royal-blue'}`}
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          {convCount}
          <span className="font-sans font-semibold text-xl">명</span>
        </div>
      </div>

      {/* Conversion rate badge */}
      <div className={`mt-6 text-sm font-semibold px-4 py-2 rounded-xl inline-block ${
        isRed ? 'bg-red-100 text-red-500' : 'bg-royal-blue/10 text-royal-blue'
      }`}>
        전환율&nbsp;
        <span className="font-black">
          {isRed ? '0.0001%' : '1%'}
        </span>
        &nbsp;
        <span className={`font-normal text-sm ${isRed ? 'text-red-400' : 'text-royal-blue/70'}`}>
          ({isRed ? '10,000배 낮음' : '10,000배 높음'})
        </span>
      </div>

      {/* Visual bar */}
      <div className="mt-5 w-full bg-navy/8 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-[2.5s] ease-out ${
            isRed ? 'bg-red-400' : 'bg-royal-blue'
          } ${started ? 'w-full' : 'w-0'}`}
          style={!isRed ? { boxShadow: '0 0 8px rgba(0,122,255,0.5)' } : {}}
        />
      </div>
    </div>
  )
}

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((n) =>
            n.classList.add('is-visible')
          )
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="solution" ref={sectionRef} className="relative bg-ice-blue py-32 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-[0.10] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-royal-blue/50" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">
              The Essence
            </span>
            <div className="h-px w-8 bg-royal-blue/50" />
          </div>
          <h2 className="reveal font-serif font-bold text-navy mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            본질의 수치
          </h2>
          <p className="reveal text-navy/50 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: '1.2rem' }}>
            조회수가 중요하지 않습니다.{' '}
            <span className="text-navy font-semibold">본질을 이해해야 합니다.</span>
          </p>
        </div>

        {/* Stats comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <StatCard
            label="잘못된 콘텐츠"
            views={1000000}
            viewsUnit=""
            conversions={1}
            started={started}
            accent="red"
          />
          <StatCard
            label="기획된 콘텐츠"
            views={1000}
            viewsUnit="명"
            conversions={10}
            started={started}
            accent="blue"
          />
        </div>

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
