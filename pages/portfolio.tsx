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
import Blog from '../components/Blog';

const PortfolioPage: NextPage = () => {
  return (
    <div className={`${styles.main} font-montserrat text-[#4b4f56]`}>
      <Head>
        <title>codebydolapo</title>
        <meta name="description" content="codebydolapo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`w-[100vw] min-h-[100vh] h-auto pt-[50px] text-[#000000a9] ${styles.mainbody}`}>
        <Menu />
        {/* <Intro />
        <About /> */}
        <Portfolio />
        {/* <Skills />
        <Blog /> */}
      </div>
    </div>
  )
}

export default PortfolioPage
