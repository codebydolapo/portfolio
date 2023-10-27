import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/items.module.css";
import { useEffect, useState, useMemo } from "react";
// import getNFTURL from '../utils/getNFTURL';
import { Matic } from "@web3uikit/icons";
// import { useAccount } from "wagmi";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
// import toast from 'react-hot-toast';

interface Collection {
  description: string;
  image: any;
  name: string;
  index: string;
  price: string;
  isOwned: boolean;
  // listingStatus: any
}

function NFTCard({ description, image, name, price }: any) {
  const dispatch = useDispatch();

  // const { address, isConnected } = useAccount();

  

  function truncateString(str: string, length: number) {
    if (str.length <= length) {
      return str; // No truncation needed
    } else {
      return str.slice(0, length) + "..."; // Truncate and add ellipsis
    }
  }

  return (
    // <div
    //   className={`md:w-[18rem] md:h-[29rem] rounded-xl bg-[#000] md:m-3 relative xs:w-[48%] xs:min-h-[20rem] xs:my-5 cursor-pointer border-2 border-white ${styles.item}`}
    // >
      <div
        className={`md:w-[18rem] md:h-[18rem] xs:w-[45vw] xs:h-[45vw] rounded-xl overflow-hidden m-2 relative`}
      >
        <img
          className={`rounded-tl-xl rounded-tr-xl md:w-auto md:h-full xs:w-full xs:h-auto ${styles.image}`}
          alt=""
          src={image}
        />
        <div className={`h-[15%] w-full flex items-center justify-end absolute bottom-0 bg-[#0000006c] px-2`}>
            <h3
              className={`md:text-lg md:mx-2 font-extrabold text-[#FFF] xs:text-sm sm:mx-1`}
            >
              {price ? price : 0}
            </h3>
            <Matic fontSize={"1.5rem"} />
          </div>
      </div>
      // <div
      //   className={`w-full h-[11rem] flex flex-col items-center justify-around`}
      // >
      //   <div
      //     className={`w-full md:h-[30%] px-2 flex items-center justify-start xs:h-[23%]`}
      //   >
      //     <h3 className={`text-sm text-[#fff] font-bold`}>{name}</h3>
      //   </div>
      //   <div
      //     className={`w-full md:h-[40%] px-3 flex flex-col items-start justify-center xs:h-[50%]`}
      //   >
      //     <h3 className={`md:text-sm text-[#fff] xs:text-xs `}>
      //       {truncateString(description, 95)}
      //     </h3>
      //   </div>
      //   <div
      //     className={`w-full md:h-[30%] px-3 flex items-center justify-between xs:h-[23%]`}
      //   >
      //     <div className={`w-[75%] h-full flex items-center justify-start`}>
      //       {/* <div className={`w-[7rem] h-[2rem] rounded-md bg-[#00ff00] flex items-center justify-center`}>
      //                           <p className={`text-sm text-white`}>Available</p>
      //                       </div> */}
      //       <Button variant="contained" endIcon={<CheckIcon />} className = {`bg-[#0080FF]`}>
      //         Available
      //       </Button>
      //     </div>
      //     <div className={`w-[25%] h-full flex items-center justify-end `}>
      //       <h3
      //         className={`md:text-base md:mx-2 font-bold text-[#0080FF] xs:text-sm sm:mx-1`}
      //       >
      //         {price ? price : 0}
      //       </h3>
      //       <Matic fontSize={"1rem"} />
      //     </div>
      //   </div>
      // </div>
    // </div>
    // </Link>
  );
}

export default NFTCard;
