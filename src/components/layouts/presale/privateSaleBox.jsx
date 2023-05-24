import React from "react";
import PropTypes from "prop-types";
import Countdown from "react-countdown";
import { Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import ApprovePreSale from '../../ApprovePreSale';
import { useEffect, useState } from 'react';
import BuyingPreSale from '../../BuyingPreSale';
import { SetUSDT } from '../../../hooks/dapp/UseUSDT'
import { ethers } from 'ethers';
import {
    useAccount,
    useConnect,
    useNetwork,
    useWaitForTransaction
} from 'wagmi'
import { ApproveToken } from '../../../hooks/main/approveToke';
import { preSaleContractAddress, usdcTokenAddress } from '../../../hooks/main/abi';
import { toast } from "react-toastify";
import { GetAllowanceAmount } from '../../../hooks/main/getAllowanceAmount';
import { GetTokenDecimals } from '../../../hooks/main/getTokenDecimals';
import { GetUserUsdcBalance } from '../../../hooks/main/getUserUsdcBalance';
import { GetUserRefer } from '../../../hooks/main/getUserRefer';
import { BuyZooToken } from '../../../hooks/main/buyZooToken';
import { GetMinimumInvestment } from '../../../hooks/main/getMinimumInvestment';
import { GetMaximumInvestment } from '../../../hooks/main/getMaximumInvestment';



const CompletedCountdown = () => {
  <span>You are good to go!</span>;
};

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return CompletedCountdown;
  } else {
    if (days < 10) days = "0" + days.toString();
    if (hours < 10) days = "0" + days.toString();
    if (minutes < 10) days = "0" + days.toString();
    if (seconds < 10) days = "0" + days.toString();
    return (
      <div className="Countdown">
        <h5>{days}</h5>
        <h5>{hours}</h5>
        <h5>{minutes}</h5>
        <h5>{seconds}</h5>
      </div>
    );
  }
};

const PrivateSaleBox = (props) => {
  const data = props.data;
  console.log(data);
  //const countdownTo = data[0].countdownTo;

  const addressZero = '0x0000000000000000000000000000000000000000';
  const [inputAmount, setInputAmount] = useState()
  const [referAddress, setReferAddress] = useState(addressZero);

  const {address, isConnected} = useAccount()
  const { chain, chains } = useNetwork()

  const allowance = GetAllowanceAmount(address, preSaleContractAddress);
  const decimals = GetTokenDecimals(usdcTokenAddress);
  const usdcBalance = GetUserUsdcBalance(address);
  const currentRefer = GetUserRefer(address);
  const minimumInvestment = GetMinimumInvestment();
  const maximumInvestment = GetMaximumInvestment();


  const convertedAllowance = Number(allowance.data) / 10 ** Number(decimals.data);
  let approveAmount = convertedAllowance < Number(inputAmount) ? Number(inputAmount): 0;
  const approve = ApproveToken(usdcTokenAddress, preSaleContractAddress, approveAmount)
  const approveWait = useWaitForTransaction({hash: approve?.data?.hash})
  const buyZooToken = BuyZooToken(address, referAddress, Number(inputAmount))
  const buyZooTokenWait = useWaitForTransaction({hash: buyZooToken?.data?.hash})

  const handleInputAmount = (event) => {
    setInputAmount(event.target.value)
  };


  const approveFunc = async () => {
        
    if(Number(usdcBalance.data)/10**decimals.data < Number(inputAmount)){
        toast.error("You don't have enough funds to buy");
        return;
    }
    if(referAddress == address){
        toast.error("You can't put your address as refer");
        return;
    }
    if(Number(inputAmount) < minimumInvestment.data/10**decimals.data){
        toast.error(`Lower than minimum investment amount (${minimumInvestment.data/10**decimals.data})`);
        return;
    }
    approve.write?.();
}

const buyFunc = async () => {
    if(usdcBalance.data/10**decimals.data < Number(inputAmount)){
        toast.error("You don't have enough funds to buy");
        return;
    }
    if(referAddress == address){
        toast.error("You can't put your address as refer");
        return;
    }
    if(Number(inputAmount) < minimumInvestment.data/10**decimals.data){
        toast.error(`Lower than minimum investment amount (${minimumInvestment.data/10**decimals.data})`);
        return;
    }
    buyZooToken.write?.();
}


const getRefer = async () => {
    if (currentRefer.data != addressZero) {
        console.log("Current refer:", currentRefer.data);
        setReferAddress(currentRefer.data);
        return;
    }
    var lnkStr = window.location.href;   //document.URL;   
    let index = lnkStr.indexOf('?ref=');
    let referAdd = '';
    if (index >= 0) {
        referAdd = lnkStr.substring(index + 5, index + 5 + 42);
        setReferAddress(referAdd);
        console.log("referAdd:", referAdd)
    } else {
        setReferAddress(addressZero);
        // console.log("referAddress:", addressZero);
    }
}

useEffect(() => {
    getRefer();
}, [window.location.href]);

useEffect(() => {
    if(approveWait.isLoading){
        toast.loading("Approving ...");
    }
    if(approveWait.isSuccess){
        allowance.refetch();
        toast.dismiss();
        toast.success("Approved Successfully!");
        approve.reset();
    }
    if(approveWait.isError){
        toast.dismiss();
        toast.warning("Approving Failed!");
        approve.reset();
    }
},[approveWait.isLoading, approveWait.isSuccess, approveWait.isError])


useEffect(() => {
    if(buyZooTokenWait.isLoading){
        toast.loading("Buying Zoo ...");
    }
    if(buyZooTokenWait.isSuccess){
        allowance.refetch();
        toast.dismiss();
        toast.success("You bought token Successfully!");
        buyZooToken.reset();
    }
    if(buyZooTokenWait.isError){
        toast.dismiss();
        toast.warning("Buying Failed!");
        buyZooToken.reset();
    }
},[buyZooTokenWait.isLoading, buyZooTokenWait.isSuccess, buyZooTokenWait.isError])

  function pressMax(){
    if(usdcBalance.data && Number(usdcBalance.data)/10**decimals.data > 0){
      setInputAmount(Number(usdcBalance.data)/10**decimals.data);
    }
  }

  return (
    <div className="privateSaleGlassBox">
      <div className="privateSaleBoxTitleWrapper">Private Sale</div>
      <div className="countdownWrapper">
        <Countdown
          date={Date.now() + data[0].countdownTo}
          renderer={CountdownRenderer}
        />
      </div>
      <div className="mintedProgressBarLabelWrapper">
        <ProgressBar
          min={0}
          max={data[0].privateSaleTo}
          now={data[0].privateSaleFrom}
          id="privateSaleProgressBar"
        />
        <h5 className="privateSaleFrom">
          {data[0].privateSaleFrom.toString()} USDC
          <img
            src="https://assets.coincap.io/assets/icons/usdc@2x.png"
            style={{ height: "1.2em", width: "auto", marginLeft: "2%" }}
            alt=""
          ></img>
        </h5>
        <h5 className="privateSaleTo">
          {data[0].privateSaleTo.toString()} USDC
          <img
            src="https://assets.coincap.io/assets/icons/usdc@2x.png"
            style={{ height: "1.2em", width: "auto", marginLeft: "2%" }}
            alt=""
          ></img>
        </h5>
        <div className="privateSaleInputWrapper">
          <input
            type="number"
            onChange = {handleInputAmount}
            value={inputAmount}
            id="privateSaleInput"
            className="privateSaleInput"
            placeholder="0.0"
          />
          <div onClick={pressMax} className="maxswapIn">Max</div>
        </div>
      </div>
      {convertedAllowance < Number(inputAmount) 
                ?
                <Button className="swapBtn" onClick={approveFunc} >{approve.isLoading ? "Loading ..." : "Approve"}</Button> 
                :
              <Button onClick={buyFunc} className="swapBtn">
                {buyZooToken.isLoading ? "Loading ..." : "Buy with USDC"}
                <img
                  src="https://assets.coincap.io/assets/icons/usdc@2x.png"
                  style={{ height: "1.2em", width: "auto", marginLeft: "1%" }}
                  alt=""
                ></img>
              </Button>
    }
    </div>
  );
};

PrivateSaleBox.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PrivateSaleBox;
