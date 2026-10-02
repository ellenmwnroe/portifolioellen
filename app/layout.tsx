import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Caveat, DM_Sans, Instrument_Serif } from 'next/font/google'
import './globals.css'

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', weight: ['500', '700', '800'] })
const serif = Instrument_Serif({ subsets: ['latin'], variable: '--font-serif', weight: '400', style: ['normal', 'italic'] })
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const hand = Caveat({ subsets: ['latin'], variable: '--font-hand', weight: ['600', '700'] })

export const metadata: Metadata = {
  title: 'Ellen Monroe | Design & Social Media',
  description: 'Portfólio de Ellen Monroe — design, social media, audiovisual e frontend em São Luís, MA.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${serif.variable} ${sans.variable} ${hand.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
