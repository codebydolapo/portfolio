import styles from "../styles/menu.module.css"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
// import { useSelector } from 'react-redux'
import { BookmarkIcon, HomeIcon, BriefcaseIcon, CogIcon, MicrophoneIcon, MailIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import { activateHamburger, deactivateHamburger, addConnectedAddress, removeConnectedAddress } from '../reducers/actions'
import shortenAddress from "../utils/shortenAddress"


function Menu() {

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)

    const dispatch = useDispatch()

    function handleBurgerState() {
        if (hamburgerState == false) {
            dispatch(activateHamburger())
        } else if (hamburgerState == true) {
            dispatch(deactivateHamburger())
        }
    }

    const _storedAddress = useSelector((state: ConnectedAddress) => state.connectedAddress)

    const [balance, setBalance] = useState<string | undefined>()
    const [currentAccount, setCurrentAccount] = useState<string | undefined>()
    const [chainId, setChainId] = useState<number | undefined>()
    const [chainname, setChainName] = useState<string | undefined>()
    const [connectedStatus, setConnectedStatus] = useState<boolean | undefined>(false)


    // const Window: {window: {ethereum: any}} = window.ethereum
    useEffect(() => {
        const Window = window.ethereum
        if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return
        //client side code
        if (!Window) return
        const provider = new ethers.providers.Web3Provider(Window)
        setConnectedStatus(true)
        provider.getBalance(currentAccount).then((result) => {
            setBalance(ethers.utils.formatEther(result))
        })
        provider.getNetwork().then((result) => {
            setChainId(result.chainId)
            setChainName(result.name)
        })

    }, [currentAccount])

    const connect = () => {
        //client side code
        const Window = window.ethereum

        if (!Window) {
            console.log("please install MetaMask")
            return
        }
        /*
        //change from window.ethereum.enable() which is deprecated
        //see docs: https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts:any)=>{
          if(accounts.length>0) setCurrentAccount(accounts[0])
        })
        .catch('error',console.error)
        */

        //we can do it using ethers.js
        const provider = new ethers.providers.Web3Provider(Window)

        //setting connected status
        setConnectedStatus(true)

        // MetaMask requires requesting permission to connect users accounts
        provider.send("eth_requestAccounts", [])
            .then((accounts) => {
                if (accounts.length > 0) {
                    setCurrentAccount(accounts[0])
                    dispatch(addConnectedAddress(accounts[0]))
                }
            })
            .catch((e) => console.log(e))
    }

    const disconnect = () => {
        console.log("onClickDisConnect")
        setBalance(undefined)
        setCurrentAccount(undefined)
        setConnectedStatus(false)
        dispatch(removeConnectedAddress())
    }

    function handleConnection() {
        if (!connectedStatus) {
            connect()
        }
        else {
            disconnect()
        }
    }


    return (
        <div className={hamburgerState ? styles.menu : styles.menuActive}>
            {hamburgerState && <>
                <Link href='/'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <HomeIcon className={styles.ChevronUpIcon} />
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link href='/about'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <MicrophoneIcon className={styles.ChevronUpIcon} />
                        <h1>About</h1>
                    </div>
                </Link>
                <Link href='/portfolio'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <BriefcaseIcon className={styles.ChevronUpIcon} />
                        <h1>Portfolio</h1>
                    </div>
                </Link>
                <Link href='/skills'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <CogIcon className={styles.ChevronUpIcon} />
                        <h1>Skills</h1>
                    </div>
                </Link>
                <Link href='/blog'>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <BookmarkIcon className={styles.ChevronUpIcon} />
                        <h1>Blog</h1>
                    </div>
                </Link>
                {/* <Link href=''>
                    <div className={`${styles.menuDiv}`} onClick={handleBurgerState}>
                        <MailIcon className={styles.ChevronUpIcon} />
                        <h1>Contact</h1>
                    </div>
                </Link> */}
                {_storedAddress?    
                <button className={`w-[90%] h-[2.5rem] text-base text-white mx-5 bg-[#1DB954] rounded-xl md:invisible xs:visible`}>{shortenAddress(_storedAddress)}</button>:
                <button className={`w-[90%] h-[2.5rem] text-base text-white mx-5 bg-[#1DB954] rounded-xl md:invisible xs:visible`}>Connect wallet</button>
            }

            </>}
        </div>
    )
}

export default Menu