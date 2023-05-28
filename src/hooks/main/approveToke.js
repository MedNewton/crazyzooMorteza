import { BigNumber, ethers } from "ethers";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { GetTokenDecimals } from "./getTokenDecimals";
import { str } from "../utils";
import { usdcTokenAbi } from "./abi";

export function ApproveToken(tokenAddress, spender, amount) {
  
    const tokenDecimals = GetTokenDecimals(tokenAddress);
    const convertedAmount = amount
      ? str(amount * 10 ** Number(tokenDecimals.data))
      : 0;
  
    const { config } = usePrepareContractWrite({
      address: tokenAddress,
      abi: usdcTokenAbi,
      functionName: "approve",
      args: [spender, convertedAmount],
      enabled: Boolean(amount),
      overrides:{
        gasLimit: 500000
      }
    });
    // console.log("approve inputs :", spender, convertedAmount);
    const { data, isLoading, isSuccess, write, status, reset } =
      useContractWrite(config);
  
    if (!tokenAddress || !spender || !amount) {
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