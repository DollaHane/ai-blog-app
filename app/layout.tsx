import './globals.css'
import Providers from './components-global/providers'

export const metadata = {
  title: 'AI Blog App',
  description: 'Blog application integrated with OpenAI for content generation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Cinzel+Decorative&family=Fauna+One&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
