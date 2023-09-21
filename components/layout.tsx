import "../styles/styles.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Uee OJ",
  description: "新时代OJ Create By Lec",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='zh-CN'
      className='dark'
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
