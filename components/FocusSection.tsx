'use client'

import { useEffect, useRef } from 'react'

const pillars = [
  {
    num: '01',
    title: '콘텐츠별 타겟팅 설정',
    desc: '원장님의 관리가 필요한 다양한\n상황에 놓여진 환자별 타겟 구조설정',
    numColor: '#3B88FF',
    borderColor: 'border-royal-blue/20',
    bgColor: 'bg-blue-50/60',
  },
  {
    num: '02',
    title: '전환 중심 기획',
    desc: '예약 전환을 위한\n하이어만의 프로세스 수립',
    numColor: '#007AFF',
    borderColor: 'border-royal-blue/30',
    bgColor: 'bg-blue-50/40',
  },
  {
    num: '03',
    title: '\'유튜브 마케팅\' 전문가',
    desc: '다른 마케팅 업무와 병행하지 않습니다.\n저희가 자신있고, 잘하는 것만 진행합니다',
    numColor: '#0057CC',
    borderColor: 'border-royal-blue/20',
    bgColor: 'bg-blue-50/50',
  },
]

export default function FocusSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-stagger').forEach((n) =>
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
    <section ref={sectionRef} className="relative bg-white py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-royal-blue/50" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">
              Our Approach
            </span>
            <div className="h-px w-8 bg-royal-blue/50" />
          </div>
          <h2
            className="font-serif font-bold text-navy leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            불특정 다수가 아닌,<br />
            <span className="text-royal-blue">타겟 환자</span>에게 집중해야합니다.
          </h2>
        </div>

        {/* 3 pillars — left-to-right with arrow connectors */}
        <div
          className="reveal-stagger grid items-stretch gap-0"
          style={{ gridTemplateColumns: '1fr auto 1fr auto 1fr' }}
        >
          {pillars.map((p, i) => (
            <div key={p.num} className="contents">
              {/* Card */}
              <div className={`rounded-2xl border ${p.borderColor} ${p.bgColor} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 px-8 py-10 flex flex-col items-center text-center`}>
                {/* Number */}
                <span
                  className="font-serif font-black leading-none mb-5 select-none"
                  style={{ fontSize: '5rem', color: p.numColor, opacity: 0.35 }}
                >
                  {p.num}
                </span>
                {/* Title */}
                <h3
                  className="font-bold text-navy mb-3"
                  style={{ fontSize: '1.25rem' }}
                >
                  {p.title}
                </h3>
                {/* Desc */}
                <p
                  className="text-navy/50 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: '1rem', wordBreak: 'keep-all' }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Arrow connector */}
              {i < pillars.length - 1 && (
                <div className="flex items-center justify-center px-4">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-navy/18"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
