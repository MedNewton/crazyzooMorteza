import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { PreSaleContractAddress, preSaleAbi, usdcTokenAbi } from './abi';



//get collateral balance of the user address in the exchange contract
export function GetMinimumInvestment() {
  

  const minimum = useContractRead({
    address: PreSaleContractAddress(),
    abi: preSaleAbi,
    functionName: 'minInvestment',
    args: [],
    // enabled: Boolean(tokenAddress)
  });
  // console.log("decimals:", decimals?.data);
  return minimum;
}