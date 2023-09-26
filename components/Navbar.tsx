import { ethers } from "ethers"
import styles from "../styles/navbar.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { activateHamburger, deactivateHamburger } from '../reducers/actions'
import { useState, useEffect } from "react"
// import Window from './window'
import shortenAddress from '../utils/shortenAddress'
import { addConnectedAddress, removeConnectedAddress } from "../reducers/actions"


function Navbar() {

    const hamburgerState = useSelector((state: HamburgerState) => state.hamburgerState)
    const _storedAddress = useSelector((state: ConnectedAddress) => state.connectedAddress)

    const dispatch = useDispatch()

    function handleBurgerState() {
        if (hamburgerState == false) {
            dispatch(activateHamburger())
        } else if (hamburgerState == true) {
            dispatch(deactivateHamburger())
        }
    }

    const activeNav = "#FFBF00"
    const inactiveNav = "FFF"


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
        // <div className = {`w-full h-[50px] bg-[#0b4572] flex flex-row fixed z-[5]`}>
        hamburgerState ?
            <div className={`w-full h-[50px] bg-[#fff] flex flex-row fixed top-0 z-[5]`}>
                <div className={`w-1/2 h-full px-2 flex flex-row justify-start items-center`}>
                    <img className={`md:h-[40px] md:w-[40px] rounded-full mr-3 xs:w-[30px] xs:h-[30px]`} src='/icons/logo.jfif' alt='' />
                    <h1 className={`text-[#000] md:text-3xl font-bold font-oswald xs:text-xl`}>CodeByDolapo.Com</h1>
                </div>
                <div className={`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
                    {currentAccount ? 
                    <button className={`w-[10rem] md:h-[2.5rem] md:text-base text-white mx-5 bg-[#000] md:rounded-xl md:visible xs:invisible xs:rounded-lg xs:h-[1.7rem] xs:text-[0.7rem]`} onClick={handleConnection}>{shortenAddress(currentAccount)}</button> 
                    :
                        <button className={`w-[10rem] md:h-[2.5rem] md:text-base text-white mx-5 bg-[#000] md:rounded-xl md:visible xs:invisible xs:rounded-lg xs:h-[1.7rem] xs:text-[0.7rem]`} onClick={handleConnection}>Connect wallet</button>
                    }
                    <div className={`${styles.hamburger}`} onClick={handleBurgerState}>
                        <div className={`${styles.lineActive}`} id={`${hamburgerState && styles.line1}`}></div>
                        <div className={`${styles.middleLineActive}`} id={`${hamburgerState && styles.line2}`}></div>
                        <div className={`${styles.lineActive}`} id={`${hamburgerState && styles.line3}`}></div>
                    </div>
                </div>
            </div> :
            <div className={`w-full h-[50px] bg-[#000] flex flex-row fixed z-[5]`}>
                <div className={`w-1/2 h-full px-2 flex flex-row justify-start items-center`}>
                    <img className={`md:h-[40px] md:w-[40px] rounded-full mr-3 xs:w-[30px] xs:h-[30px]`} src='/icons/logo.jfif' alt='' />
                    <h1 className={`text-[#fff] md:text-3xl font-bold font-oswald xs:text-xl`}>CodeByDolapo.Com</h1>
                </div>
                <div className={`w-1/2 h-full px-3 flex flex-row justify-end items-center`}>
                    {_storedAddress ?
                        <button className={`w-[10rem] md:h-[2.5rem] md:text-base text-black mx-5 bg-[#fff] md:rounded-xl md:visible xs:invisible xs:rounded-lg xs:h-[1.7rem] xs:text-[0.7rem]`} onClick={handleConnection}>{shortenAddress(_storedAddress)}</button> 
                        :
                        <button className={`w-[10rem] md:h-[2.5rem] md:text-base text-black mx-5 bg-[#fff] md:rounded-xl md:visible xs:invisible xs:rounded-lg xs:h-[1.7rem] xs:text-[0.7rem]`} onClick={handleConnection}>Connect Wallet</button>}
                    <div className={`${styles.hamburger}`} onClick={handleBurgerState}>
                        <div className={`${styles.lineInactive}`} id={`${hamburgerState && styles.line1}`}></div>
                        <div className={`${styles.middleLineInactive}`} id={`${hamburgerState && styles.line2}`}></div>
                        <div className={`${styles.lineInactive}`} id={`${hamburgerState && styles.line3}`}></div>
                    </div>
                </div>
            </div>
    )
}

export default Navbar

///ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
//pear boring try myself quiz maple rain embark shrimp clutch vague recall