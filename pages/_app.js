import '../styles/globals.css'
import Navbar from "../components/Layout/Navigation/";

function MyApp({Component, pageProps}) {
  return <><Navbar/><Component {...pageProps} /></>
}

export default MyApp
