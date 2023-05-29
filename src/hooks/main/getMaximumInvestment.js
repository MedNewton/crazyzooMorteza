import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { PreSaleContractAddress, preSaleAbi, usdcTokenAbi } from './abi';



//get collateral balance of the user address in the exchange contract
export function GetMaximumInvestment() {
  

  const max = useContractRead({
    address: PreSaleContractAddress(),
    abi: preSaleAbi,
    functionName: 'maxInvestment',
    args: [],
    // enabled: Boolean(tokenAddress)
  });
  // console.log("decimals:", decimals?.data);
  return max;
}