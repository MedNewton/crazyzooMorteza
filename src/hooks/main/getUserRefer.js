import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { preSaleAbi, preSaleContractAddress, purchaseAbi, purchaseContractAddress, tokenAbi, usdcTokenAddress, zooTokenAbi, zooTokenAddress } from './abi';


//get collateral balance of the user address in the exchange contract
export function GetUserRefer(userAddress) {
  

  const refer = useContractRead({
    address: zooTokenAddress,
    abi: zooTokenAbi,
    functionName: 'referrer',
    args: [userAddress],
    enabled: Boolean(userAddress)

  });
  return refer;
}