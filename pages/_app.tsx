import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-VT06ZW3CS2"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VT06ZW3CS2');
                `}
            </Script>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}