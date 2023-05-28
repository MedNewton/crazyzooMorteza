import { BigNumber, ethers } from "ethers";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { GetTokenDecimals } from "./getTokenDecimals";
import { str } from "../utils";
import { preSaleAbi, preSaleContractAddress, usdcTokenAbi, usdcTokenAddress } from "./abi";

export function BuyZooToken(user, refer, amount) {
  
    const tokenDecimals = GetTokenDecimals(usdcTokenAddress);
    const convertedAmount = amount
      ? str(amount * 10 ** Number(tokenDecimals.data))
      : 0;
  
    const { config } = usePrepareContractWrite({
      address: preSaleContractAddress,
      abi: preSaleAbi,
      functionName: "buyZooTokens",
      args: [user, refer, convertedAmount],
      enabled: Boolean(user),
      overrides:{
        gasLimit: 1000000
      }
    });
    // console.log("approve inputs :", spender, convertedAmount);
    const { data, isLoading, isSuccess, write, status, reset } =
      useContractWrite(config);
  
    if (!user || !refer || !amount) {
      return {
        data: undefined,
        isLoading: undefined,
        isSuccess: undefined,
        write: undefined,
        status: undefined,
        reset:undefined
      };
    } else {
      return {
        data,
        isLoading,
        isSuccess,
        write,
        status,
        reset
      };
    }
  }