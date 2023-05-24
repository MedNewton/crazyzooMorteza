import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { usdcTokenAbi } from './abi';



//get collateral balance of the user address in the exchange contract
export function GetTokenDecimals(tokenAddress) {
  

  const decimals = useContractRead({
    address: tokenAddress,
    abi: usdcTokenAbi,
    functionName: 'decimals',
    args: [],
    enabled: Boolean(tokenAddress)
  });
  // console.log("decimals:", decimals?.data);
  return decimals;
}