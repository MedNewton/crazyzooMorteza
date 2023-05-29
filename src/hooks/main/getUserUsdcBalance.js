import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { UsdcTokenAddress, usdcTokenAbi } from './abi';



//get collateral balance of the user address in the exchange contract
export function GetUserUsdcBalance(ownerAddress) {
  

  const allowanceAmount = useContractRead({
    address: UsdcTokenAddress(),
    abi: usdcTokenAbi,
    functionName: 'balanceOf',
    args: [ownerAddress],
    enabled: Boolean(ownerAddress)
  });
  return allowanceAmount;
}