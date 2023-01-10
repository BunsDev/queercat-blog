import '../styles/globals.css'

import Header from '../components/Header/Header'

export default function App({ Component, pageProps }) {
  return (
  <div className='app'>
    <Header></Header>
    <Component {...pageProps} />
  </div>
  )
}
