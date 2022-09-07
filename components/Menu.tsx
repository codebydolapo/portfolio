import styles from "../styles/menu.module.css"
// import { useSelector } from 'react-redux'
import { BookmarkIcon, HomeIcon, BriefcaseIcon, CogIcon, MicrophoneIcon, MailIcon } from "@heroicons/react/outline"
import Link from "next/link"
import {useDispatch, useSelector} from 'react-redux'
import {activateHamburger, deactivateHamburger} from '../reducers/actions'

function Menu() {

    interface HamburgerState {
        hamburgerState: boolean
    }

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)

    const dispatch = useDispatch()

    function handleBurgerState(){
        if(hamburgerState  == false){
           dispatch( activateHamburger())
        } else if(hamburgerState == true){
            dispatch(deactivateHamburger())
        }
    }
    return (
        <div className={hamburgerState ? styles.menu : styles.menuActive}>
            {hamburgerState && <>
                <Link href='/#home'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <HomeIcon className={styles.ChevronUpIcon} />
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link href='/#about'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <MicrophoneIcon className={styles.ChevronUpIcon} />
                        <h1>About</h1>
                    </div>
                </Link>
                <Link href='/#portfolio'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <BriefcaseIcon className={styles.ChevronUpIcon} />
                        <h1>Portfolio</h1>
                    </div>
                </Link>
                <Link href='/#skills'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <CogIcon className={styles.ChevronUpIcon} />
                        <h1>Skills</h1>
                    </div>
                </Link>
                <Link href='/#blog'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <BookmarkIcon className={styles.ChevronUpIcon} />
                        <h1>Blog</h1>
                    </div>
                </Link>
                <Link href=''>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <MailIcon className={styles.ChevronUpIcon} />
                        <h1>Contact</h1>
                    </div>
                </Link>
            </>}
        </div>
    )
}

export default Menu