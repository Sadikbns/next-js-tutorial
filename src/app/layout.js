export const metadata = {
    title : 'Next.js',
    description : 'Generated from next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{width: '100%', backgroundColor: 'blueviolet', padding: '1rem'}}>
          <p>
              Header
          </p>
        </header>
        {children}
        <footer style={{width: '100%', backgroundColor: 'red', padding: '1rem'}}>
          <p>
              Footer
          </p>
        </footer>
      </body>
    </html>
  )
}