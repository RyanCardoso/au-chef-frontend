import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'
import { Header } from '@/components/molecules'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Au Chef',
  description:
    'Explore o delicioso cardápio do restaurante Au Chef, onde cada prato é uma obra-prima culinária. Descubra uma variedade de sabores inspirados na gastronomia internacional, preparados com os ingredientes mais frescos. Desde pratos clássicos até criações inovadoras, nosso menu oferece uma experiência gastronômica única que vai encantar seu paladar. Reserve sua mesa e mergulhe em uma jornada culinária inesquecível no coração da nossa cozinha.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
