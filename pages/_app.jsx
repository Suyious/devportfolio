import '../styles/globals.css'
import LeftSidebar from "../components/Sidebar/Left"
import RightSidebar from "../components/Sidebar/Right"
import Navbar from "../components/Layout/Navigation/";

function MyApp({Component, pageProps}) {
  return <>
    <Navbar/>
    <div className='sidebar_main'>
      <LeftSidebar/>
      <RightSidebar/>
    </div>
    <Component {...pageProps} />
  </>
}

export default MyApp
