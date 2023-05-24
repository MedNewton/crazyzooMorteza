import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { usdcTokenAbi, usdcTokenAddress } from './abi';



//get collateral balance of the user address in the exchange contract
export function GetUserUsdcBalance(ownerAddress) {
  

  const allowanceAmount = useContractRead({
    address: usdcTokenAddress,
    abi: usdcTokenAbi,
    functionName: 'balanceOf',
    args: [ownerAddress],
    enabled: Boolean(ownerAddress)
  });
  return allowanceAmount;
}