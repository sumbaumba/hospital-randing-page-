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
        {/*
          렌더링 전에 실행: 기기 화면 너비를 측정해 1280px 레이아웃이
          화면에 꼭 맞게 initial-scale을 계산하여 viewport meta를 직접 생성
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var w=screen.width;if(w>=1280){var m=document.createElement('meta');m.name='viewport';m.content='width=device-width,initial-scale=1';document.head.insertBefore(m,document.head.firstChild);return;}var s=(w/1280).toFixed(6);var m=document.createElement('meta');m.name='viewport';m.content='width=1280,initial-scale='+s+',minimum-scale=0.1,maximum-scale=10';document.head.insertBefore(m,document.head.firstChild);})();`,
          }}
        />
        <noscript>
          <meta name="viewport" content="width=1280" />
        </noscript>
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
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1933146997326174');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=1933146997326174&ev=PageView&noscript=1" alt="" />
        </noscript>
      </head>
      <body className="bg-white text-navy font-sans antialiased">{children}</body>
    </html>
  )
}
