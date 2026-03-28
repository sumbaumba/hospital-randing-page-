export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-navy border-t border-white/5 py-10 md:py-14 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #007AFF 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-12">
          {/* Brand */}
          <div>
            {/* 로고: 이미지 3508x2481, 콘텐츠 (1221,982)~(2287,1499)=1066x517 */}
            {/* 스케일=68/517=0.1315 → backgroundSize:461px 326px */}
            <div className="mb-4">
              <div style={{
                width: '140px',
                height: '68px',
                backgroundImage: 'url(/higher-logo.png)',
                backgroundSize: '461px 326px',
                backgroundPosition: '-160px -129px',
                backgroundRepeat: 'no-repeat',
              }} />
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              조회수가 아닌, 예약전환을 만드는<br />
              병원 유튜브 마케팅 전문 파트너
            </p>
          </div>

          {/* Links */}
          <div className="md:mx-auto">
            <h4 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: '스토리', href: '#story' },
                { label: '솔루션', href: '#solution' },
                { label: '포트폴리오', href: '#portfolio' },
                { label: '우리의 약속', href: '#identity' },
                { label: '무료 진단 신청', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/35 hover:text-white/70 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:ml-auto">
            <h4 className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:010-3313-0388" className="flex items-center gap-2.5 text-white/35 hover:text-white/70 text-sm transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  010-3313-0388
                </a>
              </li>
              <li>
                <a href="mailto:higher3pd@gmail.com" className="flex items-center gap-2.5 text-white/35 hover:text-white/70 text-sm transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  higher3pd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                {/* YouTube */}
                <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-lg border border-white/10 hover:border-royal-blue/40 flex items-center justify-center text-white/30 hover:text-royal-blue transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg border border-white/10 hover:border-royal-blue/40 flex items-center justify-center text-white/30 hover:text-royal-blue transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* KakaoTalk */}
                <a href="#" aria-label="KakaoTalk" className="w-8 h-8 rounded-lg border border-white/10 hover:border-royal-blue/40 flex items-center justify-center text-white/30 hover:text-royal-blue transition-all duration-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.63 1.524 4.937 3.824 6.337L5 21l4.5-2.5c.82.18 1.67.5 2.5.5 5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {currentYear} Higher Production. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/20 text-xs">
            <a href="#" className="hover:text-white/40 transition-colors">개인정보처리방침</a>
            <span>·</span>
            <a href="#" className="hover:text-white/40 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
