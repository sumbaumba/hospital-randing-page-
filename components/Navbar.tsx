'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(screen.width < 1280)
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: '스토리', href: '#story' },
    { label: '인사이트', href: '#insight' },
    { label: '포트폴리오', href: '#portfolio' },
    { label: '프로세스', href: '/logic' },
    { label: '플랜', href: '#pricing' },
    { label: '문의', href: '#contact' },
  ]

  // 모바일(1280px 미만): 0.3 스케일 축소 보정용 대형 사이즈
  const logo = isMobile
    ? { width: 320, height: 156, bSize: '1053px 746px', bPos: '-365px -295px' }
    : { width: 140, height: 68,  bSize: '461px 326px',  bPos: '-160px -129px' }

  const py = isMobile
    ? (scrolled ? 'py-8' : 'py-12')
    : (scrolled ? 'py-3' : 'py-5')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-navy/8 shadow-sm'
          : 'bg-transparent'
      } ${py}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0" aria-label="Higher Production">
          <div style={{
            width: `${logo.width}px`,
            height: `${logo.height}px`,
            backgroundImage: 'url(/higher-logo-dark.png)',
            backgroundSize: logo.bSize,
            backgroundPosition: logo.bPos,
            backgroundRepeat: 'no-repeat',
          }} />
        </a>

        {/* Desktop Nav — isMobile 기반 제어 (CSS 브레이크포인트 대신) */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-navy/55 hover:text-navy transition-colors duration-200 text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA + 햄버거 */}
        <div className="flex items-center gap-3">
          {!isMobile && (
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-royal-blue hover:bg-royal-blue-light text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.03] blue-glow-sm text-base px-6 py-3"
            >
              무료 진단 신청
              <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}

          {/* 모바일 햄버거 버튼 */}
          {isMobile && (
            <button
              className="text-navy/60 hover:text-navy p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴"
            >
              {menuOpen ? (
                <svg width={56} height={56} viewBox="0 0 22 22" fill="none">
                  <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width={56} height={56} viewBox="0 0 22 22" fill="none">
                  <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobile && menuOpen && (
        <div className="bg-white border-t border-navy/8 px-6 py-8 shadow-lg">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy/65 hover:text-navy font-medium py-1 transition-colors text-4xl"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-royal-blue text-white text-center font-bold px-8 py-8 rounded-xl text-3xl"
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
