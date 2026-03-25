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
    <section id="insight" ref={sectionRef} className="relative bg-white pt-32 pb-4 overflow-hidden">
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

        {/* ── WHY VIEWS DON'T MATTER ─────────────────────── */}
        <div className="reveal mb-28">

          {/* Editorial question */}
          <div className="text-center mb-16">
            <h3
              className="font-serif font-bold text-navy mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.2, wordBreak: 'keep-all' }}
            >
              조회수가 왜 중요하지 않을까요?
            </h3>
            <p className="text-navy/50 mx-auto" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', maxWidth: '38rem', lineHeight: 1.9, wordBreak: 'keep-all' }}>
              조회수는 <span className="text-navy/75 font-semibold">2가지 방법</span>으로 &lsquo;구매&rsquo;가 가능합니다.<br />
              그리고 두 방법 모두, 병원 매출에는 전혀 도움이 되지 않습니다.
            </p>
          </div>

          {/* Two method cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">

            {/* Method 01 */}
            <div className="relative rounded-3xl border border-red-200/70 bg-red-50/50 p-10 md:p-12 overflow-hidden">
              <div className="absolute -top-6 -right-3 font-serif font-black text-red-100/80 select-none pointer-events-none" style={{ fontSize: '9rem', lineHeight: 1 }}>01</div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-7 px-4 py-2.5 rounded-2xl bg-red-500 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white flex-shrink-0">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.8" />
                    <line x1="7" y1="4" x2="7" y2="7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="7" cy="10" r="0.8" fill="currentColor" />
                  </svg>
                  <span className="text-white font-bold text-sm tracking-wide">구글 광고 조회수</span>
                </div>
                <h4 className="font-serif font-bold text-navy mb-4" style={{ fontSize: 'clamp(1.35rem, 2.8vw, 1.9rem)', lineHeight: 1.25, wordBreak: 'keep-all' }}>
                  광고비는 나가는데,<br />환자 반응은 없습니다.
                </h4>
                <p className="text-navy/55 leading-relaxed mb-7" style={{ fontSize: '1rem', wordBreak: 'keep-all', lineHeight: 1.8 }}>
                  구글 광고를 통한 조회수는 기본적으로 비용이 발생합니다. 광고 노출로 조회량은 늘어날 수 있지만, 실질적인 환자들의 반응은 거의 없습니다.
                </p>
                {/* Fake analytics */}
                <div className="rounded-2xl bg-white border border-red-200/60 p-5">
                  <p className="text-navy/30 text-xs font-semibold tracking-wider uppercase mb-4">실제 광고 채널 사례</p>
                  <div className="space-y-3.5">
                    {[
                      { label: '조회수', value: '128,432', pct: '100%', color: 'bg-red-200' },
                      { label: '좋아요', value: '12', pct: '0.6%', color: 'bg-red-400' },
                      { label: '댓글', value: '0', pct: '0%', color: 'bg-red-400' },
                      { label: '예약 문의', value: '0건', pct: '0%', color: 'bg-red-400' },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-navy/45 text-xs">{s.label}</span>
                          <span className={`text-xs font-bold ${s.label === '조회수' ? 'text-navy/65' : 'text-red-500'}`}>{s.value}</span>
                        </div>
                        <div className="w-full bg-red-100/70 rounded-full h-1.5">
                          <div className={`${s.color} rounded-full h-1.5 transition-all`} style={{ width: s.pct, minWidth: s.pct === '0%' ? '0' : '6px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-red-400/75 text-xs mt-5 text-center font-medium">조회수만 많고, 좋아요·댓글·예약은 0인 패턴</p>
                </div>
              </div>
            </div>

            {/* Method 02 */}
            <div className="relative rounded-3xl border border-red-200/70 bg-red-50/50 p-10 md:p-12 overflow-hidden">
              <div className="absolute -top-6 -right-3 font-serif font-black text-red-100/80 select-none pointer-events-none" style={{ fontSize: '9rem', lineHeight: 1 }}>02</div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-7 px-4 py-2.5 rounded-2xl bg-red-500 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white flex-shrink-0">
                    <line x1="2" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="12" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <span className="text-white font-bold text-sm tracking-wide">사설업체 &lsquo;작업&rsquo;</span>
                </div>
                <h4 className="font-serif font-bold text-navy mb-4" style={{ fontSize: 'clamp(1.35rem, 2.8vw, 1.9rem)', lineHeight: 1.25, wordBreak: 'keep-all' }}>
                  채널 성장에<br />아무런 도움이 안 됩니다.
                </h4>
                <p className="text-navy/55 leading-relaxed mb-7" style={{ fontSize: '1rem', wordBreak: 'keep-all', lineHeight: 1.8 }}>
                  공들여 제작한 영상들을 그대로 망치는 지름길입니다. 유튜브 알고리즘 생태계를 파괴할 뿐만 아니라, 최악의 경우 <span className="text-red-500 font-semibold">계정 삭제</span>까지 가능합니다.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: '⚠️', text: '유튜브 알고리즘 신호 왜곡' },
                    { icon: '📉', text: '실제 구독자 이탈률 급증' },
                    { icon: '🚫', text: '최악의 경우 채널 영구 삭제' },
                    { icon: '💸', text: '제작비 + 작업비용 이중 낭비' },
                    { icon: '🎬', text: '공들인 영상이 그대로 묻힘' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-red-100/80">
                      <span className="text-sm flex-shrink-0">{item.icon}</span>
                      <span className="text-navy/60 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Insight paragraphs */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-navy/60 leading-relaxed mb-5" style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.95, wordBreak: 'keep-all' }}>
              실질적인 매출 전환을 만들기 위해서는<br />
              <span className="text-navy font-semibold">원장님이 하고 싶은 채널이 아닌,</span><br />
              모든 제작 중심이 <span className="text-royal-blue font-bold">&lsquo;환자&rsquo;</span>로 변환되어야 합니다.
            </p>
            <p className="text-navy/50 leading-relaxed mb-5" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.95, wordBreak: 'keep-all' }}>
              영상을 보고 작은 것 하나라도 얻어가는 게 있어야 합니다.<br />
              아무리 좋은 장비, 실력, 가격, 시설 접근성을 소개해봤자<br />
              <span className="text-navy/70 font-medium">이런 콘텐츠들은 다른 병원들과의 경쟁만 악화하고 자랑에 지나지 않습니다.</span>
            </p>
            <div className="h-px w-12 bg-navy/10 mx-auto my-8" />
            <p className="text-navy/55 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.95, wordBreak: 'keep-all' }}>
              시청자, 환자들이 주로 병원을 찾게 되는 순간—<br />
              <span className="text-navy font-semibold">그 상황과 감정에 공감하고,</span> 진심으로 다가가는 것이 중요합니다.
            </p>
          </div>

          {/* Transition CTA */}
          <div
            className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #E3EEFF 100%)', border: '1px solid rgba(0,122,255,0.12)' }}
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 120%, #007AFF 0%, transparent 65%)' }} />
            <div className="relative z-10">
              <p
                className="font-serif font-bold text-navy mb-4"
                style={{ fontSize: 'clamp(1.7rem, 3.8vw, 3rem)', lineHeight: 1.2, wordBreak: 'keep-all' }}
              >
                그래서 저희는<br />
                <span className="gradient-text">4단계 정밀 프로세스</span>를 만들었습니다.
              </p>
              <p className="text-navy/50 mb-10" style={{ fontSize: '1.1rem', wordBreak: 'keep-all' }}>
                감각이 아닌 전략으로, 조회수가 아닌 예약전환으로.
              </p>
              <a
                href="/logic"
                className="inline-flex items-center gap-3 bg-royal-blue text-white font-bold rounded-full px-9 py-4 transition-all duration-200 hover:bg-royal-blue-light hover:shadow-lg hover:-translate-y-0.5"
                style={{ fontSize: '1.1rem' }}
              >
                프로세스 알아보기
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── QUESTION BRIDGE ──────────────────────────── */}
        <div className="reveal py-20">
          <div
            className="relative rounded-3xl overflow-hidden mx-auto"
            style={{ maxWidth: '820px', background: '#FFFFFF', border: '1px solid rgba(0,122,255,0.10)', boxShadow: '0 8px 48px rgba(0,122,255,0.07)' }}
          >
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #007AFF 0%, #3B88FF 50%, #007AFF 100%)' }} />

            <div className="px-10 md:px-16 py-14 text-center">
              {/* Comparison lines */}
              <div className="space-y-5 mb-10">
                <p className="text-navy/65 leading-relaxed" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)', wordBreak: 'keep-all' }}>
                  100만의 바이럴성 조회수가 발생해도,{' '}
                  <span className="text-red-500 font-bold">예약전환이 1명</span>이라면
                </p>
                <div className="flex items-center gap-4 justify-center">
                  <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,122,255,0.2))' }} />
                  <span className="text-royal-blue/30 text-xl font-light">↕</span>
                  <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(90deg, rgba(0,122,255,0.2), transparent)' }} />
                </div>
                <p className="text-navy/65 leading-relaxed" style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)', wordBreak: 'keep-all' }}>
                  10,000명의 조회수로도{' '}
                  <span className="text-royal-blue font-bold">10명이 예약전환</span>이 되는 영상이라면
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-12 mx-auto mb-10" style={{ background: 'rgba(0,122,255,0.15)' }} />

              {/* Big question */}
              <p
                className="font-serif font-black text-navy leading-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.02em', wordBreak: 'keep-all' }}
              >
                어떤 콘텐츠가 원장님한테<br />
                <span className="gradient-text">더 나은 콘텐츠</span>일까요?
              </p>

              {/* Answer */}
              <p className="mt-8 text-navy/40 font-medium" style={{ fontSize: '1.2rem' }}>
                답은 명확합니다.{' '}
                <span className="text-navy/65">조회수가 아닌, 예약전환을 만드는 콘텐츠입니다.</span>
              </p>
            </div>
          </div>
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
          <div className="reveal-left relative rounded-2xl overflow-hidden border border-red-200 bg-red-50 p-8 flex flex-col">
            {/* Decorative X — sharp square corners, thick */}
            <svg className="absolute top-4 right-4 text-red-300" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <line x1="5" y1="5" x2="33" y2="33" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
              <line x1="33" y1="5" x2="5" y2="33" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
            </svg>
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-500 text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
                조회수 집착
              </span>
            </div>
            <h3 className="font-serif font-bold text-navy text-2xl mb-6">
              &apos;예쁜 영상&apos;의 함정
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '📹', text: '고화질 카메라, 좋은 편집만 강조' },
                { icon: '👁', text: '조회수는 높을 수 있지만, 예약 전환 없음' },
                { icon: '💸', text: '제작비 지출 → 성과 없음' },
                { icon: '😔', text: '환자들의 눈높이를 고려하지 않은 전문성 강조' },
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
                <span className="text-red-500 font-black font-serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>5~10명</span>
              </div>
              <div className="mt-3 w-full bg-red-200/60 rounded-full h-2">
                <div className="bg-red-400 rounded-full h-2" style={{ width: '0.1%', minWidth: '5px' }} />
              </div>
            </div>
            <p className="mt-auto pt-7 text-center text-red-400/80 font-semibold leading-relaxed" style={{ fontSize: '0.95rem', wordBreak: 'keep-all', letterSpacing: '0.01em' }}>
              불특정 다수를 타겟으로<br />무분별하게 양산되는 콘텐츠
            </p>
          </div>

          {/* Right: The right approach */}
          <div className="reveal-right relative rounded-2xl overflow-hidden border border-royal-blue/20 light-card-blue p-8 flex flex-col">
            {/* Decorative V — thick checkmark */}
            <svg className="absolute top-4 right-4 text-royal-blue/40" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <polyline points="4,20 15,31 34,7" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 bg-royal-blue/10 border border-royal-blue/25 text-royal-blue text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><polyline points="1,5 4,8 9,2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" /></svg>
                전략적 타겟팅
              </span>
            </div>
            <h3 className="font-serif font-bold text-navy text-2xl mb-6">
              &apos;하이어만 가능한 영상 제작&apos;
            </h3>
            <ul className="space-y-4">
              {[
                { icon: '🎯', text: '예약이 필요한 환자만 타겟하는 기획' },
                { icon: '🧠', text: '환자 심리와 구매 여정을 설계' },
                { icon: '📈', text: '조회수는 낮아도 예약전환율 극대화' },
                { icon: '🏥', text: '눈높이에 맞춘 설명과 공감대 강조' },
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
              <div className="flex items-center justify-between gap-2 flex-nowrap">
                <span className="text-royal-blue font-black font-serif whitespace-nowrap" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>10,000명</span>
                <span className="text-royal-blue/50 text-base flex-shrink-0">→</span>
                <span className="text-royal-blue font-black font-serif whitespace-nowrap" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>10~50명</span>
              </div>
              <div className="mt-3 w-full bg-royal-blue/15 rounded-full h-2">
                <div className="bg-royal-blue rounded-full h-2 blue-glow-sm" style={{ width: '1%', minWidth: '36px' }} />
              </div>
            </div>
            <p className="mt-9 text-center text-royal-blue/70 font-semibold leading-relaxed" style={{ fontSize: '0.95rem', wordBreak: 'keep-all', letterSpacing: '0.01em' }}>
              원장님의 관리가 필요한<br />환자를 타겟으로 집중
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
