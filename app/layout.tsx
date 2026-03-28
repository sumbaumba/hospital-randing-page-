import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '조회수가 아닌, 예약전환을 만듭니다 | 병원 유튜브 마케팅',
  description:
    '기획을 통해 예약전환을 만드는 병원 유튜브 마케팅 전문 파트너. 100만 조회수보다 1명의 예약전환이 중요합니다.',
  keywords: ['병원 유튜브 마케팅', '의료 콘텐츠', '예약전환', '병원 SNS', '유튜브 운영'],
  openGraph: {
    title: '조회수가 아닌, 예약전환을 만듭니다',
    description: '영상의 화려함보다 중요한 것은 환자의 마음을 움직이는 기획입니다.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Pretendard Font */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        {/* Nanum Pen Script — 필기체 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap"
        />
        {/* Black Han Sans — 공격적 디스플레이 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap"
        />
      </head>
      <body className="bg-white text-navy font-sans antialiased">{children}</body>
    </html>
  )
}
