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

    //
    return(
        <div className = {`w-full h-[50px] bg-[#60b4f5] flex flex-row fixed z-[5]`}>
            <div className = {`w-1/2 h-full px-2 flex flex-row justify-start items-center`}>
                <img className = {`h-[40px] w-[40px] rounded-full mr-3`} src = '/icons/cbd.png' alt = ''/>
                <h1 className = {`text-[white] text-3xl font-bold font-oswald`}>CodeByDolapo.Com</h1>
            </div>
            <div className = {`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
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