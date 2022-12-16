import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import { dark } from '@/styles/themes/dark'
import { light } from '@/styles/themes/light'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/x-icon" href="/img/icon_512.png" />
          <link rel="shortcut" href="/img/icon_512.png" />
          <link rel="apple-touch-icon" href="/img/icon_512.png" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
          <title>Boilerplate - NextJs/Typescript</title>
        </Head>
      </Head>
      <ThemeProvider theme={light || dark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
