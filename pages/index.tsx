import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/mainbody.module.css'
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'
import { title } from 'process'
import Menu from '../components/Menu'
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import About from '../components/About'
import Skills from '../components/Skills';
import Blog from '../components/Blog'
import Shop from '../components/Shop'
import { useDispatch, useSelector } from 'react-redux'
import { deactivateShopPopup, activateShopPopup } from '../reducers/actions'
import ShopButton from '../components/ShopButton'

const Home: NextPage = () => {

  const dispatch = useDispatch()

  const shopState = useSelector((state: any) => { return state.shopPopupState })

  function handleShopPopup() {
    shopState ? dispatch(deactivateShopPopup()) : dispatch(activateShopPopup())
  }


  return (
    <div className={`${styles.main} font-montserrat text-[#4b4f56] relative`}>
      <Head>
        <title>codebydolapo</title>
        <meta name="description" content="codebydolapo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`w-[100vw] min-h-[100vh] h-auto relative text-[#000000a9] ${styles.mainbody}`}>
        <Menu />
        <Intro />
       {!shopState && <ShopButton/>}
       {shopState && <Shop />}
      </div>
    </div>
  )
}

export default Home
