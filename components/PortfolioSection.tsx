'use client'

import { useEffect, useRef, useState } from 'react'

const portfolioItems = [
  { name: '서울 강남 성형외과',   category: '유튜브 채널 운영', desc: '일반인의 시선으로 풀어낸 깊이있는 성형 해답',                  videoId: 'mXfO_2FejCg', url: 'https://youtu.be/mXfO_2FejCg' },
  { name: '서울 강남점 피부과',   category: '홍보 영상',        desc: '병원의 신념과 미학적 가치를 형상화한 브랜드 필름',              videoId: 'NeTnSRgr7p8', url: 'https://youtu.be/NeTnSRgr7p8' },
  { name: '서울 강서점 피부과',   category: '유튜브 채널 운영', desc: '전문의의 정밀한 심미안과 진정성 있는 소통을 결합한 큐레이션',   videoId: '411ID1dC8Wg', url: 'https://youtu.be/411ID1dC8Wg' },
  { name: '서울 은평점 피부과',   category: '홍보 영상',        desc: '진심어린 환대의 마음을 담아낸 프리미엄 병원 홍보 영상',         videoId: '3-iWgxCAvO0', url: 'https://youtu.be/3-iWgxCAvO0' },
  { name: '서울 강서점 비뇨기과', category: '유튜브 채널 운영', desc: '남성 건강 전문 콘텐츠로 신뢰를 쌓고 실제 예약으로 연결되는 채널', videoId: 'SKp4Wfvstmw', url: 'https://youtu.be/SKp4Wfvstmw' },
  { name: '서울 중구 치과',       category: '유튜브 채널 운영', desc: '치과 공포를 낮추고 전문의 신뢰를 높이는 콘텐츠 전략',           videoId: 'hxmkb6RHtEA', url: 'https://www.youtube.com/watch?v=hxmkb6RHtEA' },
  { name: '서울 강서점 치과',     category: '유튜브 채널 운영', desc: '환자 관점에서 설계한 치과 정보 채널, 예약 전환 극대화',          videoId: 'yBoet0OX__w', url: 'https://youtu.be/yBoet0OX__w?si=NxnalGcXf8guMUrQ' },
  { name: '경기 성남 한의원',     category: '유튜브 채널 운영', desc: '한방 치료의 현대적 가치를 전달하는 전문 콘텐츠 운영',            videoId: 'd6_-Ud2lXN8', url: 'https://youtu.be/d6_-Ud2lXN8' },
  { name: '인천 청라점 피부과',   category: '유튜브 채널 운영', desc: '지역 환자를 정확히 타겟하는 피부과 채널 마케팅',                 videoId: '0YGthrfCNzk', url: 'https://youtu.be/0YGthrfCNzk' },
  { name: '인천 송도점 피부과',   category: '유튜브 채널 운영', desc: '예약 전환에 최적화된 피부 케어 전문 유튜브 운영',               videoId: 'k7Ma_aasBHs', url: 'https://youtu.be/k7Ma_aasBHs' },
  { name: '인천 계양점 정형외과', category: '콘텐츠 제작',      desc: '관절·척추 치료 전문성을 환자 언어로 담아낸 콘텐츠',             videoId: 'GEZh4LC7AIg', url: 'https://youtu.be/GEZh4LC7AIg' },
  { name: '피부과 전문의 네트워크', category: '현장 스케치',    desc: '피부과 전문의들의 생생한 현장을 담은 리얼 스케치',               videoId: 'vU9we8Vu1wA', url: 'https://youtu.be/vU9we8Vu1wA' },
  { name: '피부과 전문의 네트워크', category: '현장 스케치',    desc: '네트워크 행사 현장의 전문성과 열정을 담은 기록',                 videoId: '88TQw5hDzS0', url: 'https://youtu.be/88TQw5hDzS0' },
  { name: '피부과 전문의 네트워크', category: '현장 스케치',    desc: '전문의 커뮤니티의 협업과 성장을 담은 다큐멘터리 스타일 스케치',   videoId: 'CX03k8dM6k8', url: 'https://youtu.be/CX03k8dM6k8' },
]

// Row 1: items 0–6, Row 2: items 7–13 (shifted start for visual variety)
const row1 = portfolioItems.slice(0, 7)
const row2 = portfolioItems.slice(7)

const categoryColor: Record<string, string> = {
  '유튜브 채널 운영': 'bg-royal-blue/10 text-royal-blue',
  '홍보 영상':        'bg-ice-blue-dark text-navy/65',
  '콘텐츠 제작':      'bg-ice-blue-dark text-navy/65',
  '현장 스케치':      'bg-ice-blue-dark text-navy/65',
}

function PortfolioCard({ item }: { item: typeof portfolioItems[0] }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-[200px] sm:w-[260px] bg-white rounded-2xl border border-navy/8 overflow-hidden hover:border-royal-blue/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative h-[114px] sm:h-[148px] overflow-hidden bg-ice-blue">
        <img
          src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-royal-blue/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2.5 ${categoryColor[item.category] ?? 'bg-ice-blue text-navy/60'}`}>
          {item.category}
        </span>
        <h3 className="font-bold text-navy text-sm leading-snug group-hover:text-royal-blue transition-colors mb-1.5">
          {item.name}
        </h3>
        <p className="text-navy/45 text-xs leading-relaxed line-clamp-2">
          {item.desc}
        </p>
      </div>
    </a>
  )
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setRevealed(true); observer.unobserve(el) }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="relative bg-ice-blue py-16 md:py-32 overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)' }}
      />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} text-center mb-8 md:mb-14`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-royal-blue/50" />
            <span className="text-royal-blue text-xs font-bold tracking-[0.3em] uppercase">Portfolio</span>
            <div className="h-px w-8 bg-royal-blue/50" />
          </div>
          <h2 className="font-serif font-bold text-navy mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            작업 포트폴리오
          </h2>
          <p className="text-navy/50" style={{ fontSize: '1.2rem' }}>
            기획에서 결과까지, 실제 성과로 증명합니다.
          </p>
        </div>
      </div>

      {/* Marquee rows — full bleed */}
      <div className={`transition-opacity duration-700 delay-200 ${revealed ? 'opacity-100' : 'opacity-0'} space-y-5`}>

        {/* Row 1 — left, 35s */}
        <div className="overflow-hidden">
          <div className="flex gap-5 w-max" style={{ animation: 'marqueeLeft 35s linear infinite' }}>
            {[...row1, ...row1, ...row1].map((item, i) => (
              <PortfolioCard key={`r1-${i}`} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 — right, 45s */}
        <div className="overflow-hidden">
          <div className="flex gap-5 w-max" style={{ animation: 'marqueeRight 45s linear infinite' }}>
            {[...row2, ...row2, ...row2].map((item, i) => (
              <PortfolioCard key={`r2-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`text-center mt-8 md:mt-14 transition-all duration-700 delay-500 ${revealed ? 'opacity-100' : 'opacity-0'}`}>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-royal-blue hover:text-white border-2 border-royal-blue hover:bg-royal-blue px-8 py-4 rounded-xl font-bold transition-all duration-300"
          style={{ fontSize: '1.05rem' }}
        >
          무료 채널 진단으로 시작하기
          <span>→</span>
        </a>
      </div>
    </section>
  )
}
