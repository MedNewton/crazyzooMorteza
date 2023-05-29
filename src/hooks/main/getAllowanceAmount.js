import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { usdcTokenAbi, UsdcTokenAddress } from './abi';


//get collateral balance of the user address in the exchange contract
export function GetAllowanceAmount(ownerAddress, spenderAddress) {
  

  const allowanceAmount = useContractRead({
    address: UsdcTokenAddress(),
    abi: usdcTokenAbi,
    functionName: 'allowance',
    args: [ownerAddress, spenderAddress],
    enabled: Boolean(ownerAddress && spenderAddress)
  });
  return allowanceAmount;
}