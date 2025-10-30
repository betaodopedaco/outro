import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tradutor IA - Traduza documentos com inteligência artificial',
  description: 'Traduza PDFs, Word e documentos de texto com IA contextual',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
