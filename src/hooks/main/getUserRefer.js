import { ethers } from 'ethers';
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ZooTokenAddress, preSaleAbi, purchaseAbi, tokenAbi, zooTokenAbi } from './abi';


//get collateral balance of the user address in the exchange contract
export function GetUserRefer(userAddress) {
  

  const refer = useContractRead({
    address: ZooTokenAddress(),
    abi: zooTokenAbi,
    functionName: 'referrer',
    args: [userAddress],
    enabled: Boolean(userAddress)

  });
  return refer;
}