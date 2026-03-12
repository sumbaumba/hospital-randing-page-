'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: '스토리', href: '#story' },
    { label: '솔루션', href: '#solution' },
    { label: '포트폴리오', href: '#portfolio' },
    { label: '문의', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-navy/8 py-3 shadow-sm'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        {/* 로고: background-image 크롭 방식 (가장 안정적) */}
        {/* 이미지 3508x2481, 콘텐츠 (1221,982)~(2287,1499)=1066x517 */}
        {/* 스케일=68/517=0.1315 → backgroundSize:461px 326px, backgroundPosition:-160px -129px */}
        <a href="#" className="flex-shrink-0" aria-label="Higher Production">
          <div style={{
            width: '140px',
            height: '68px',
            backgroundImage: 'url(/higher-logo-dark.png)',
            backgroundSize: '461px 326px',
            backgroundPosition: '-160px -129px',
            backgroundRepeat: 'no-repeat',
          }} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/55 hover:text-navy transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-royal-blue hover:bg-royal-blue-light text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] blue-glow-sm"
          >
            무료 진단 신청
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy/60 hover:text-navy p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-navy/8 px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy/65 hover:text-navy text-lg font-medium py-1 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-royal-blue text-white text-center font-bold px-5 py-4 rounded-xl text-base"
              onClick={() => setMenuOpen(false)}
            >
              무료 채널 진단 신청
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
