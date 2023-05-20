import styles from "../styles/navbar.module.css"
import {useDispatch, useSelector} from 'react-redux'
import {activateHamburger, deactivateHamburger} from '../reducers/actions'

interface HamburgerState{
    hamburgerState: boolean
}

function Navbar(){

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)

    const dispatch = useDispatch()

    function handleBurgerState(){
        if(hamburgerState  == false){
           dispatch( activateHamburger())
        } else if(hamburgerState == true){
            dispatch(deactivateHamburger())
        }
    }

    const activeNav = "#FFBF00"
    const inactiveNav = "FFF"

    
    return(
        // <div className = {`w-full h-[50px] bg-[#0b4572] flex flex-row fixed z-[5]`}>
        hamburgerState ? 
        <div className = {`w-full h-[50px] bg-[#FFBF00] flex flex-row fixed z-[5]`}>
            <div className = {`w-1/2 h-full px-2 flex flex-row justify-start items-center`}>
                <img className = {`md:h-[40px] md:w-[40px] rounded-full mr-3 xs:w-[30px] xs:h-[30px]`} src = '/icons/logo.jfif' alt = ''/>
                <h1 className = {`text-[white] md:text-3xl font-bold font-oswald xs:text-xl`}>CodeByDolapo.Com</h1>
            </div>
            <div className = {`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
                <button className = {`w-[10rem] md:h-[2.5rem] md:text-base text-white mx-5 bg-[black] md:rounded-xl md:visible xs:invisible xs:rounded-lg xs:h-[1.7rem] xs:text-[0.7rem]`}>Connect wallet</button>
                <div className = {`${styles.hamburger}`} onClick = {handleBurgerState}>
                    <div className={`${styles.line}`} id = {`${hamburgerState && styles.line1}`}></div>
                    <div className={`${styles.middleLine}`} id = {`${hamburgerState && styles.line2}`}></div>
                    <div className={`${styles.line}`} id = {`${hamburgerState && styles.line3}`}></div>
                </div>
            </div>
        </div> :
        <div className = {`w-full h-[50px] bg-[#FFF] flex flex-row fixed z-[5]`}>
        <div className = {`w-1/2 h-full px-2 flex flex-row justify-start items-center`}>
            <img className = {`md:h-[40px] md:w-[40px] rounded-full mr-3 xs:w-[30px] xs:h-[30px]`} src = '/icons/logo.jfif' alt = ''/>
            <h1 className = {`text-[black] md:text-3xl font-bold font-oswald xs:text-xl`}>CodeByDolapo.Com</h1>
        </div>
        <div className = {`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
            <button className = {`w-[10rem] md:h-[2.5rem] md:text-base text-white mx-5 bg-[#FFBF00] md:rounded-xl md:visible xs:invisible xs:rounded-lg xs:h-[1.7rem] xs:text-[0.7rem]`}>Connect wallet</button>
            <div className = {`${styles.hamburger}`} onClick = {handleBurgerState}>
                <div className={`${styles.line}`} id = {`${hamburgerState && styles.line1}`}></div>
                <div className={`${styles.middleLine}`} id = {`${hamburgerState && styles.line2}`}></div>
                <div className={`${styles.line}`} id = {`${hamburgerState && styles.line3}`}></div>
            </div>
        </div>
    </div>
    )
}

export default Navbar