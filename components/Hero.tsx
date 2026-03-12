'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPercent = (clientX / innerWidth - 0.5) * 20
      const yPercent = (clientY / innerHeight - 0.5) * 10
      const orbs = containerRef.current.querySelectorAll<HTMLElement>('.orb')
      orbs.forEach((orb, i) => {
        const factor = i === 0 ? 1 : -0.6
        orb.style.transform = `translate(${xPercent * factor}px, ${yPercent * factor}px)`
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #F0F7FF 0%, #ffffff 55%, #F8FAFF 100%)',
        }}
      />

      {/* ── Video swap point ──
        To use your own showreel video, add:
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/showreel.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay" />
      */}

      {/* Floating orbs */}
      <div
        className="orb absolute top-1/4 left-[5%] w-[700px] h-[700px] rounded-full opacity-[0.10] transition-transform duration-700 ease-out"
        style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)' }}
      />
      <div
        className="orb absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.07] transition-transform duration-1000 ease-out animate-float"
        style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)', animationDelay: '3s' }}
      />
      <div
        className="animate-float absolute top-[55%] left-[45%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #3B88FF 0%, transparent 70%)' }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,122,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,122,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-royal-blue/50 bg-royal-blue/12 rounded-full px-5 py-2 mb-10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-pulse" />
          <span className="text-royal-blue text-xs font-bold tracking-[0.25em] uppercase">
            Hospital YouTube Marketing
          </span>
        </div>

        {/* Main headline — 압도적으로 크게 */}
        <h1
          className="font-serif font-black text-navy leading-[1.05] mb-8"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
        >
          <span className="block mb-1">조회수가 아닌,</span>
          <span className="block gradient-text">예약전환을</span>
          <span className="block">만듭니다</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-royal-blue/70" />
          <div className="w-2 h-2 rounded-full bg-royal-blue" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-royal-blue/70" />
        </div>

        {/* Sub copy */}
        <p
          className="text-navy/75 leading-relaxed max-w-xl mx-auto mb-12"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}
        >
          영상의 화려함보다 중요한 것은<br />
          환자의 마음을 움직이는&nbsp;
          <span className="text-navy font-semibold">&apos;기획&apos;</span>입니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-royal-blue hover:bg-royal-blue-light text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-[1.04] blue-glow"
            style={{ fontSize: '1.1rem' }}
          >
            무료 채널 정밀 진단 신청
            <span className="group-hover:translate-x-1 transition-transform duration-200 text-xl">→</span>
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 border-2 border-navy/15 hover:border-royal-blue/50 text-navy/60 hover:text-royal-blue px-10 py-5 rounded-xl transition-all duration-300"
            style={{ fontSize: '1.1rem' }}
          >
            포트폴리오 보기
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy/30">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 overflow-hidden">
          <div className="w-px h-full bg-gradient-to-b from-royal-blue/80 to-transparent animate-line-down" />
        </div>
      </div>
    </section>
  )
}
