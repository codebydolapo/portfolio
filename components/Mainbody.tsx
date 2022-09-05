import styles from '../styles/mainbody.module.css'
import Menu from './Menu'
import Intro from './Intro';
import Portfolio from './Portfolio';
import About from './About'
import Skills from './Skills';
import Blog from './Blog';


function Mainbody(){

    

    return(
        <div className = {`w-[100vw] min-h-[100vh] h-auto mt-[50px] text-[#000000a9] ${styles.mainbody}`}>
            <Menu/>
            <Intro/>
            <About/>
            <Portfolio/>
            <Skills/>
            <Blog/>
        </div>
    )
}

export default Mainbody;