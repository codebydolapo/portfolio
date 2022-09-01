import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Mainbody from '../components/Mainbody'
import { title } from 'process'

const Home: NextPage = () => {
  return (
    <div className={`${styles.main} font-opensans text-[#4b4f56]`}>
      <Head>
        <title>codebydolapo</title>
        <meta name="description" content="codebydolapo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Mainbody/>
    </div>
  )
}

export default Home
