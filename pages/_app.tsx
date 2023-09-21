import { NextUIProvider } from "@nextui-org/react"
import "../styles/styles.css"
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
