import React from 'react';
import { Button } from 'react-bootstrap';
import { GetToken, SetToken } from '../../hooks/dapp/useToken'
import { useEffect, useState } from 'react';
import { useNetwork } from 'wagmi'
import { SetUniswapIntermediary } from '../../hooks/dapp/UseUniswap'
import { SetNFT, GetNFT } from '../../hooks/dapp/UseNFT'
import { SetPreSale, GetPreSale } from '../../hooks/dapp/UsePreSale'
import { GetStaking, SetStaking } from '../../hooks/dapp/UseStaking';
import { SetUSDT, GetUSDT } from '../../hooks/dapp/UseUSDT'
import leaves5 from '../../assets/images/minting/Leaves_05.svg'
import leaves1 from '../../assets/images/minting/Leaves_01.svg'
import leaves8 from '../../assets/images/minting/Leaves_08.svg'
import leaves7 from '../../assets/images/minting/Leaves_07.svg'
import "react-datepicker/dist/react-datepicker.css";
import { ethers } from 'ethers';
import DatePicker from "react-datepicker";






const AdminFunctions = () => {

  const [MarketWallet, setMarketWallet] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)//0xb17943D0340100b08e81de93577929C80C6E46e7
  const [StakingWallet, setStakingWallet] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)//0x362507631d465562dc038Ea48532088C1E2974d1
  const [FeeCollector, setFeeCollector] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)//0x1f04c6AB1de5f9e8CCE3Ba2E32d6d266438A3c59
  const [OtherToken, setOtherToken] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [directMinting, setDirectMinting] = useState(false)
  const [minId, setMinId] = useState(1)
  const [diff, setDiff] = useState(2)
  const [collectorWallet, setCollectorWallet] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [cap, setCap] = useState(0)
  const [rate, setRate] = useState(0)
  const [minInvestment, setMinInvestment] = useState(0)
  const [maxInvestment, setMaxInvestment] = useState(0)
  const [referrerFee, setReferrerFee] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [zooToken, setZooToken] = useState(0)
  const [usdtToken, setUsdtToken] = useState(0)
  const [Minter, setMinter] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [stakingContract, setStakingApprove] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [amountForStakingApprove, setAmountForStakingApprove] = useState()

  const [NFTAddress, setNFTAddress] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [UsdcAddress, setUsdcAddress] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [ZooAddress, setZooAddress] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [SwapAddress, setSwapAddress] = useState(process.env.REACT_APP_TEMPORARY_ADDRESS)
  const [ranges, setRanges] = useState([])

  const { chain, chains } = useNetwork()



  const { data: MarketingWallet } = GetToken('marketingWallet', chain.id)
  const { data: StakingContractAddress } = GetToken('StakingContractAddress', chain.id)
  // const { data: OtherTokens } = GetToken('OtherTokens',chain.id)
  const { data: StakingFee } = GetToken('StakingFee', chain.id)
  const { data: MarketingFee } = GetToken('MarketingFee', chain.id)
  const { data: ReferrarFee } = GetToken('ReferrarFee', chain.id)
  const { data: lemurMaxId } = GetNFT('lemurMaxId', chain.id)
  const { data: gorillaMaxId } = GetNFT('gorillaMaxId', chain.id)
  const { data: feeCollector } = GetNFT('feeCollector', chain.id)
  const { data: chargeFeeOnMint } = GetNFT('chargeFeeOnMint', chain.id)
  const { data: directMintEnabled } = GetNFT('directMintEnabled', chain.id)
  const { data: nftCollection } = GetStaking('nftCollection', chain.id)
  const { data: USDCToken } = GetStaking('_USDCToken', chain.id)
  const { data: ZooToken } = GetStaking('ZooToken', chain.id)
  const { data: swap } = GetStaking('_swap', chain.id)
  
  // const { data: directMintEnabled } = GetNFT('directMintEnabled',chain.id)  
  useEffect(() => {
    const rang = lemurMaxId.toNumber()
    const array = [];
    array.push(1)
    for (let x = rang; x <= gorillaMaxId.toNumber(); x = x + rang) {
      array.push(x)
    }
    setRanges(array)
  }, [lemurMaxId, gorillaMaxId])

  
  const { data: dataSetMarketingWallet, isLoading: isLoadingSetMarketingWallet, isSuccess: isSuccessSetMarketingWallet, write: setMarketingWallet } = SetToken('setMarketingWallet', [`${MarketWallet}`], chain.id)
  const { data: dataSetStakingContractAddress, isLoading: isLoadingSetStakingContractAddress, isSuccess: isSuccessSetStakingContractAddress, write: setStakingContractAddress } = SetToken('setStakingContractAddress', [`${StakingWallet}`], chain.id)
  const { data: dataSetOtherToken, isLoading: isLoadingSetOtherToken, isSuccess: isSuccessSetOtherToken, write: SetOtherToken } = SetUniswapIntermediary('setOtherToken', [`${OtherToken}`, `true`], chain.id)
  const { data: dataSetRange, isLoading: isLoadingSetRange, isSuccess: isSuccessSetRange, write: SetSetRange } = SetNFT('setRange', [`${minId}`, `${diff}`], chain.id)
  const { data: dataSetFeeCollectorAddress, isLoading: isLoadingSetFeeCollectorAddress, isSuccess: isSuccessSetFeeCollectorAddress, write: setFeeCollectorAddress } = SetNFT(`setFeeCollector`, [`${FeeCollector}`], chain.id)
  const { data: dataDirectMinting, isLoading: isLoadingDirectMinting, isSuccess: isSuccessDirectMinting, write: DirectMinting } = SetNFT(`setDirectMinting`, [`${directMinting}`], chain.id)
  const { data: dataStartPreSale, isLoading: isLoadingStartPreSale, isSuccess: isSuccessStartPreSale, write: StartPreSale } = SetPreSale(`startPreSale`, [`${collectorWallet}`, `${cap}`, `${rate}`, `${minInvestment}`, `${maxInvestment}`, `${referrerFee}`, `${endTime}`, `${zooToken}`, `${usdtToken}`], chain.id)
  const { data: dataStartSetMinter, isLoading: isLoadingSetMinter, isSuccess: isSuccessSetMinter, write: SetMinterRole } = SetToken(`setMinter`, [`${Minter}`], chain.id)
  const { data: dataNFTAddress, isLoading: isLoadingNFTAddress, isSuccess: isSuccessNFTAddress, write: _SetNFTAddress } = SetStaking(`setNFTAddress`, [`${NFTAddress}`], chain.id)
  const { data: dataUsdcAddress, isLoading: isLoadingUsdcAddress, isSuccess: isSuccessUsdcAddress, write: _SetUsdcAddress } = SetStaking(`setUsdcAddress`, [`${UsdcAddress}`], chain.id)
  const { data: dataZooAddress, isLoading: isLoadingZooAddress, isSuccess: isSuccessZooAddress, write: _SetZooAddress } = SetStaking(`setZooAddress`, [`${ZooAddress}`], chain.id)
  const { data: dataSwapAddress, isLoading: isLoadingSwapAddress, isSuccess: isSuccessSwapAddress, write: _SetSwapAddress } = SetStaking(`setSwapAddress`, [`${SwapAddress}`], chain.id)
  const { data: dataStakingApprove, isLoading: isLoadingStakingApprove, isSuccess: isSuccessStakingApprove, write: StakingApprove } = SetUSDT('approve', [`${stakingContract}`, `${amountForStakingApprove}`], chain.id)


  const handleSetMarketWallet = (event) => {
    setMarketWallet(event.target.value);
  };
  const handleSetStakingWallet = (event) => {
    setStakingWallet(event.target.value);
  };
  const handleSetOtherToken = (event) => {
    setOtherToken(event.target.value);
  };
  const handleFeeCollectorWallet = (event) => {
    setFeeCollector(event.target.value);
  };
  const handleMintId = (event) => {
    setMinId(event.target.value);
  };
  const handleDiff = (event) => {
    setDiff(event.target.value);
  };
  const handleDirectMinting = () => {
    if (directMinting) {
      setDirectMinting(false);
    } else {
      setDirectMinting(true);
    }
  };

  const handleCollectorWallet = (event) => {
    setCollectorWallet(event.target.value);
  };

  const handleCap = (event) => {
    const amountString = Number(event.target.value).toFixed();
    const Amount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(6));
    setCap(Amount);
  };

  const handleRate = (event) => {
    const amountString = Number(event.target.value).toFixed();
    const Amount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18));
    setRate(Amount);
  };

  const handleMinInvestment = (event) => {
    const amountString = Number(event.target.value).toFixed();
    const Amount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18));
    setMinInvestment(Amount);
  };
  const handleMaxInvestment = (event) => {
    const amountString = Number(event.target.value).toFixed();
    const Amount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18));
    setMaxInvestment(Amount);
  };
  const handleReferrerFee = (event) => {
    const amountString = Number(event.target.value).toFixed();
    const Amount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(6));
    setReferrerFee(Amount);
  };
  const handleZooToken = (event) => {
    setZooToken(event.target.value);
  };
  const handleUsdtToken = (event) => {
    setUsdtToken(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleSetNFTAddress = (event) => {
    setNFTAddress(event.target.value);
  };
  const handleSetUsdcAddress = (event) => {
    setUsdcAddress(event.target.value);
  };
  const handleSetMinter = (event) => {
    setMinter(event.target.value);
  };
  const handleSetZooAddress = (event) => {
    setZooAddress(event.target.value);
  };
  const handleSetSwapAddress = (event) => {
    setSwapAddress(event.target.value);
  };
  const handleSetStakingAddress = (event) => {
    setStakingApprove(event.target.value);
  };

  const handleSetStakingApprovedAmount = (event) => {
    const amountString = Number(event.target.value).toFixed();
    const Amount = ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18));
    setAmountForStakingApprove(Amount);
  };

  const SetStakingApprove = async () => {
    await StakingApprove?.();
  };
  const SetNFTAddress = async () => {
    await setMarketingWallet?.();
  };
  const SetUsdcAddress = async () => {
    await setMarketingWallet?.();
  };
  const SetZooAddress = async () => {
    await setMarketingWallet?.();
  };
  const SetSwapAddress = async () => {
    await setMarketingWallet?.();
  };
  const SetMarketWalletAddress = async () => {
    await setMarketingWallet?.();
  };
  const SetStakingWalletAddress = async () => {
    await setStakingContractAddress?.();
  };
  const SetFeeCollectorAddress = async () => {
    await setFeeCollectorAddress?.();
  };
  const SetOtherTokenAddress = async () => {
    await SetOtherToken?.();
  };
  const SetRange = async () => {
    await SetSetRange?.();
  };
  const SetDirectMinting = async () => {
    await DirectMinting?.();
  };

  const SetMinter = async () => {
    await SetMinterRole?.();
  };

  const handleSubmit = async () => {
    try {
      const selectedDateTime = new Date(`${date}T${time}`);
      const epochTime = Math.floor(selectedDateTime.getTime() / 1000);
      setEndTime(epochTime);
      await StartPreSale?.();
    } catch (error) {
      console.error("Error occurred during StartPreSale:", error);
    }
  };

  return (
    <div className='adminPage' style={{ overflow: "auto" }}>
      <img src={leaves1} className="mintingLeaves1" alt="" />
      <img src={leaves5} className="mintingLeaves5" alt="" />
      <img src={leaves8} className="mintingLeaves8" alt="" />
      <img src={leaves7} className="mintingLeaves7" alt="" />

      <div className="mintingBoxWrapper ">
        <div className="mintingGlassBox">
          <div className="mintingBoxTitleWrapper">Values Required to initiate Zoo</div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">
              <input className='AdminInputFieldsFont' type="text" placeholder='wallet address' onChange={handleSetMarketWallet} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current Market Wallet</h5>
              <h5 className='mintedData'>{`${MarketingWallet || 0}`}</h5>
            </div>
            <div className="AdminSetValuesBtn">
              <Button className="adminBtn" disabled={MarketWallet == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetMarketWalletAddress}>set marketWallet address in token Contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">

              <input className='AdminInputFieldsFont' type="text" placeholder='staking address' onChange={handleSetStakingWallet} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current Staking Wallet</h5>
              <h5 className='mintedData'>{`${StakingContractAddress || 0} `}</h5>
            </div>
            <div className="AdminSetValuesBtn">

              <Button className="swapBtn" disabled={StakingWallet == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetStakingWalletAddress}>set stakingWallet address in token Contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">
              <input type="text" className='AdminInputFieldsFont' placeholder='Other Token address' onChange={handleSetOtherToken} />

            </div>
            {/* <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current Market Wallet</h5>
              <h5 className='mintedData'>{`0x34Baffa584cF55d1CCF8d8A2762e938e6f765F3E`}</h5>
            </div> */}
            <div className="AdminSetValuesBtn">

              <Button className="swapBtn" disabled={OtherToken == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetOtherTokenAddress}>Add Other Tokens for swapping with Zoo tokens in uniswapIntermediary Contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">

              <input type="text" className='AdminInputFieldsFont' placeholder='FeeCollector Wallet' onChange={handleFeeCollectorWallet} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current FeeCollector Wallet</h5>
              <h5 className='mintedData'>{`${feeCollector || 0}`}</h5>
            </div>
            <div className="AdminSetValuesBtn">

              <Button className="swapBtn" disabled={FeeCollector == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetFeeCollectorAddress}>Add Fee Collector Wallet in NFT Contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">
              <div className="AdminNFTrange">
                <input className='AdminInputFieldsFont' type="text" placeholder='Minimum Id' onChange={handleMintId} />
                <input className='AdminInputFieldsFont' type="text" placeholder='difference' onChange={handleDiff} />
              </div>
            </div>
            <div className="adminCurrentTextContainer">
              <div className="adminCurrentText">
                <h5 className='mintedLabel'>LemurMin.Id</h5>
                <h5 className='mintedData'>{`${ranges[0]}`}</h5>
              </div>
              <div className="adminCurrentText">
                <h5 className='mintedLabel'>LemurMax.Id</h5>
                <h5 className='mintedData'>{`${ranges[1]}`}</h5>
              </div>
            <div className="adminCurrentText">
              <h5 className='mintedLabel'>rhinoMin.Id</h5>
              <h5 className='mintedData'>{`${ranges[1]+1}`}</h5>
            </div>
            <div className="adminCurrentText">
              <h5 className='mintedLabel'>rhinoMax.Id</h5>
              <h5 className='mintedData'>{`${ranges[2]}`}</h5>
            </div>
            <div className="adminCurrentText">
              <h5 className='mintedLabel'>gorillaMin.Id</h5>
              <h5 className='mintedData'>{`${ranges[2]+1}`}</h5>
            </div>
            <div className="adminCurrentText">
              <h5 className='mintedLabel'>gorillaMax.Id</h5>
              <h5 className='mintedData'>{`${ranges[3]}`}</h5>
            </div>
            </div>
            <div className="AdminSetValuesBtn">

              <Button className="swapBtn" disabled={minId == 0 || diff == 1 || ranges[1] > 0} onClick={SetRange}>Setting Id rages</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="">

              <label className="switch">
                <input type="checkbox" onChange={handleDirectMinting} />
                <span className="slider"></span>
              </label>
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current Status of Direct Minting</h5>
              <h5 className='mintedData'>{`${directMintEnabled } `}</h5>
            </div>
            <div className="AdminSetValuesBtn">

              <Button className="swapBtn" onClick={SetDirectMinting}>DirectMingting in NFT contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">

            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='Fee Collector address' onChange={handleCollectorWallet} />
            </div>

            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='Cap' onChange={handleCap} />
            </div>

            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='Price of Nft' onChange={handleRate} />
            </div>

            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='minimum Investment' onChange={handleMinInvestment} />
            </div>

            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='maximum Investment' onChange={handleMaxInvestment} />
            </div>

            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='referrer Fee' onChange={handleReferrerFee} />
            </div>

            <div className="dateFields">
              <div className="AdminInputFields_mutiple_date">
                <input className="AdminInputFieldsFont" type="date" placeholder='Date' onChange={handleDateChange} />
              </div>
              <div className="AdminInputFields_mutiple_date">
                <input className="AdminInputFieldsFont" type="time" placeholder='Time' onChange={handleTimeChange} />
              </div>
            </div>

            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='ZooToken' onChange={handleZooToken} />
            </div>
            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='UsdtToken' onChange={handleUsdtToken} />
            </div>
            <div className="AdminSetValuesBtn">
              <Button className="swapBtn" onClick={handleSubmit}>Set Values to start PreSale</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">
              <input type="text" className="AdminInputFieldsFont" placeholder='Address for Minting' onChange={handleSetMinter} />
            </div>
            <div className="AdminSetValuesBtn">
              <Button className="swapBtn" disabled={Minter == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetMinter}>Enable Minting for Wallet in Token Contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">

              <input type="text" className="AdminInputFieldsFont" placeholder='NFTAddress address' onChange={handleSetNFTAddress} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current NFTAddress</h5>
              <h5 className='mintedData'>{`${nftCollection || 0}`}</h5>
            </div>
            <div className="AdminSetValuesBtn">
              <Button className="swapBtn" disabled={NFTAddress == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetNFTAddress}>Change Nft Address in Staking Contract</Button>
            </div>
          </div>
          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">

              <input type="text" className="AdminInputFieldsFont" placeholder='UsdcAddress address' onChange={handleSetUsdcAddress} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current USDC_Contract Wallet</h5>
              <h5 className='mintedData'>{`${USDCToken || 0}`}</h5>
            </div>
            <div className="AdminSetValuesBtn">

              <Button className="swapBtn" disabled={UsdcAddress == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetUsdcAddress}>Change USDC Address in Staking Contract</Button>
            </div>
          </div>
          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">

              <input type="text" className="AdminInputFieldsFont" placeholder='ZooAddress address' onChange={handleSetZooAddress} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current TokenContract Wallet</h5>
              <h5 className='mintedData'>{`${ZooToken || 0}`}</h5>
            </div>
            <div className="AdminSetValuesBtn">

              <Button className="swapBtn" disabled={ZooAddress == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetZooAddress}>Change TokenContract Address in Staking Contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">

              <input type="text" className="AdminInputFieldsFont" placeholder='SwapAddress address' onChange={handleSetSwapAddress} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Current SwapContract Wallet</h5>
              <h5 className='mintedData'>{`${swap || 0}`}</h5>
            </div>
            <div className="AdminSetValuesBtn">
              <Button className="swapBtn" disabled={SwapAddress == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetSwapAddress}>Change SwapContract Address in Staking Contract</Button>
            </div>
          </div>

          <div className="AdminInputsWrapper">
            <div className="AdminInputFields">
              <input type="text" className="AdminInputFieldsFont" placeholder='Staking Contract address' onChange={handleSetStakingAddress} />
            </div>
            <div className="AdminInputFields_mutiple">
              <input className="AdminInputFieldsFont" type="text" placeholder='amount to be approved for staking contract for By Pressurre Mechanism' onChange={handleSetStakingApprovedAmount} />
            </div>
            <div className="AdminCurrentText">
              <h5 className='mintedLabel'>Approve Staking Contract</h5>
              <h5 className='mintedData'>{`0x34Baffa584cF55d1CCF8d8A2762e938e6f765F3E`}</h5>
            </div>
            <div className="AdminSetValuesBtn">
              <Button className="swapBtn" disabled={stakingContract == process.env.REACT_APP_TEMPORARY_ADDRESS} onClick={SetStakingApprove}>Approve Staking Contract in USDT Contract</Button>
            </div>
          </div>

        </div>

      </div>



    </div>
  );

}

export default AdminFunctions;


