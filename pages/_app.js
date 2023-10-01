import { SessionProvider } from 'next-auth/react'
// import Providers from '../app/'
import '../app/style.css'

export default function App({ Component, pageProps, session }) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
