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
    { label: '인사이트', href: '#insight' },
    { label: '포트폴리오', href: '#portfolio' },
    { label: '프로세스', href: '/logic' },
    { label: '플랜', href: '#pricing' },
    { label: '문의', href: '#contact' },
  ]

  const logo = { width: 140, height: 68, bSize: '461px 326px', bPos: '-160px -129px' }

  const py = scrolled ? 'py-3' : 'py-5'

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-royal-blue hover:bg-royal-blue-light text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.03] blue-glow-sm text-base px-6 py-3"
          >
            무료 진단 신청
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
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
              <svg width={24} height={24} viewBox="0 0 22 22" fill="none">
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width={24} height={24} viewBox="0 0 22 22" fill="none">
                <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-navy/8 px-6 py-8 shadow-lg">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-navy/65 hover:text-navy font-medium py-2 transition-colors text-xl"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 bg-royal-blue text-white text-center font-bold px-6 py-4 rounded-xl text-lg"
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
