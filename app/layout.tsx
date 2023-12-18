import type { Metadata } from 'next'
import './globals.css'
import { inter } from './ui/fonts'
import Provider from './ui/Provider';



export const metadata: Metadata = {
  title: {
    template: '%s | Lista de Tarefas',
    default: 'Lista de Tarefas',
  },
  description: 'Lista de Tarefas',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
