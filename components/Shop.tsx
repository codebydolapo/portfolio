import { useDispatch, useSelector } from "react-redux";
import { deactivateShopPopup, activateShopPopup } from "../reducers/actions";
import { Button } from "@mui/material";
import { CheckIcon, TrashIcon, ArrowBigLeft, ArrowLeftIcon } from "lucide-react";
import { shopData } from "../data/shopData";
import NFTCard from "./NFTCard";


function Shop() {
  // interface Items {
  //   image?: string;
  //   name?: string;
  //   index: string;
  //   price: string;
  // }

  // function etherToWei(_etherAmount: any) {
  //   return ethers.utils.parseUnits(_etherAmount, "ether");
  // }

  const dispatch = useDispatch();

  // const marketplace = useSelector((state: any) => {
  //   return state.marketplaceContract;
  // });

  // const { image, index, name, price }: Items = useSelector((state: any) => {
  //   return state.itemData;
  // });

  // const account = useSelector((state: { account: string }) => {
  //   return state.account;
  // });

  // async function handlePurchase() {
  //   if (account) {
  //   //     const minter = await marketplace.ownerOf(index)
  //   //   await minter.approve(nfTropolisAddress, index);

  //   //   console.log(await marketplace.ownerOf(index))
  //     const payReceipt = await marketplace.buyNFT(index, {
  //       value: etherToWei(`${0.001}`),
  //       from: account,
  //     });
  //     console.log(payReceipt);
  //   } else {
  //     alert("Please Connect Wallet!");
  //   }
  // }

  function closePopup() {
    dispatch(deactivateShopPopup());
  }



  const shopState = useSelector((state: any) => { return state.shopPopupState })

  function handleShopPopup() {
    shopState ? dispatch(deactivateShopPopup()) : dispatch(activateShopPopup())
  }

  //ADD RATING FUNCTIONALITY FROM MUI

  return (
    <div
      className={`w-[100vw] bg-[#000] absolute xs:top-[50px] flex flex-col items-center justify-center m-auto top-0 bottom-0 left-0 right-0 overflow-scroll`}
    >
      <div className={`w-full h-full flex flex-col items-center justify-between border-2 border-black relative`}>
        <div className={`w-full h-[3rem] absolute left-2 top-2`}>
          <Button
            variant="contained"
            endIcon={<ArrowLeftIcon />}
            className={`border-2 border-[#1da1f2] w-[10rem] h-[2.5rem] md:text-sm mx-2 capitalize xs:text-xs`}
            onClick={handleShopPopup}
          >
            Go Back
          </Button>
        </div>
        <div
          className={`w-full min-h-[100vh] h-auto flex flex-wrap items-center justify-around md:px-5 xs:w-[100%] pt-[5rem] `}
        >

          {shopData.map(({ description, image, name, price }: any) => {
            return (
              <NFTCard
                description={description}
                image={image}
                name={name}
                key={image}
                price={price}
              />
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default Shop;

//<div className = {``}></div>
