import { useDispatch, useSelector } from "react-redux";
import { activateShopPopup, deactivateShopPopup } from "../reducers/actions";



function ShopButton(){

const dispatch = useDispatch()

const shopState = useSelector((state: any)=> {return state.shopPopupState})

function handleShopPopup(){
    shopState ? dispatch(deactivateShopPopup()) : dispatch(activateShopPopup())
}


    return(
        <div className = {`z-[10] w-[3rem] h-[3rem] absolute rounded-full bottom-5 right-5 flex items-center justify-center cursor-pointer`}
        onClick={handleShopPopup}
        >
            <img src = {`/icons/shop.webp`} className = {`w-[95%]`}/>
        </div>
    )
}

export default ShopButton