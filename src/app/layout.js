export const metadata = {
    // title : 'Next.js', STRING TITLE (SIMPLEST)
    title : {
      default: "Seddik Next.js", // default fallback title
      template: "%s | Seddik Next.js", // this will be changed for each route, that %s will contain the route title 
      // absolute : "", this should be implemented in the route title so that it will be independent from these def and template titles
      // See example in docs page
    },
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