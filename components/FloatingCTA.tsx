'use client'

export default function FloatingCTA({
  planHref = '#pricing',
  contactHref = '#contact',
}: {
  planHref?: string
  contactHref?: string
}) {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3"
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(10,25,47,0.10)',
        borderRadius: '999px',
        padding: '10px 14px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 2px 12px rgba(0,122,255,0.10)',
        whiteSpace: 'nowrap',
      }}
    >
      {/* 플랜 보러가기 */}
      <a
        href={planHref}
        className="flex items-center gap-2 text-navy font-semibold hover:text-royal-blue transition-colors duration-200"
        style={{ fontSize: '0.95rem', padding: '8px 18px' }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        플랜 보러가기
      </a>

      {/* 구분선 */}
      <div className="w-px h-5 bg-navy/12" />

      {/* 무료 진단 신청 */}
      <a
        href={contactHref}
        className="flex items-center gap-2 bg-royal-blue hover:bg-royal-blue-light text-white font-bold transition-all duration-200 hover:scale-[1.03] blue-glow-sm"
        style={{ fontSize: '0.95rem', padding: '8px 20px', borderRadius: '999px' }}
      >
        무료 진단 신청
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}
