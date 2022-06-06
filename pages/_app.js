import Accessibility from '../components/Accessibility'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Accessibility>
      <Component {...pageProps} />
    </Accessibility>
  )
}

export default MyApp
