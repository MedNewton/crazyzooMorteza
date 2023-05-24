import React from "react";
import PropTypes from "prop-types";
import { GetMinimumInvestment } from '../../../hooks/main/getMinimumInvestment';
import { GetMaximumInvestment } from '../../../hooks/main/getMaximumInvestment';
import { GetTokenDecimals } from '../../../hooks/main/getTokenDecimals';
import { usdcTokenAddress } from '../../../hooks/main/abi';

const PresalePriceGlassBox = (props) => {
  const data = props.data;

  const decimals = GetTokenDecimals(usdcTokenAddress);
  const minimumInvestment = GetMinimumInvestment();
  const maximumInvestment = GetMaximumInvestment();
  return (
    <div className="presalePriceGlassBox">
      <div className="presaleTokenPrice">
        <h5 className="presaleTokenPriceLabel">Presale Price</h5>
        <div className="presaleTokenPriceData">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginRight: "3%"
            }}
          >
            <h5
              className="hdlsz"
              style={{ whiteSpace: "nowrap", marginBottom: "0px !important" }}
            >
              {data[0].tokenPriceMatic.toString()} USDC
            </h5>
            <img
              src="https://assets.coincap.io/assets/icons/usdc@2x.png"
              style={{ height: "1.2em", width: "auto", marginLeft: "5%", marginRight: "3%" }}
              alt=""
            ></img>
            =
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "5%"
            }}
          >
            <h5
              className="hdlsz"
              style={{ whiteSpace: "nowrap", marginBottom: "0px !important" }}
            >
              {data[0].tokenPriceUSDT} ZOO
            </h5>

            <img
              src="https://crazyzoobeta.themoroccan.dev/static/media/Paw_coin.c67bb8827e840541c793.png"
              style={{ height: "1.2em", width: "auto", marginLeft: "2%" }}
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div className="row presaleMinMaxWrapper">
        <div className="col-6 presaleMin">
          <div className="presaleTokenPrice">
            <h5 className="presaleTokenPriceLabel">Minimum Buy</h5>
            <h5 className="presaleTokenPriceData">
            {(Number(minimumInvestment.data)/10**Number(decimals.data))} $USDT
            </h5>
          </div>
        </div>
        <div className="col-6 presaleMax">
          <div className="presaleTokenPrice">
            <h5 className="presaleTokenPriceLabel">Maximum Buy</h5>
            <h5 className="presaleTokenPriceData">
            {Number(maximumInvestment.data)/10**Number(decimals.data)} $USDT
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

PresalePriceGlassBox.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PresalePriceGlassBox;
