import './globals.css'

export const metadata = {
  title: 'PorVerse Platform',
  description: 'AI Spiritual Operating System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
