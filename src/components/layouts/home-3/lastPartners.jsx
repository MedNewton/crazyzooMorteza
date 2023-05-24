import React from "react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

import mood from "../../../assets/images/landing/partners/mood.jpg";
import nex from "../../../assets/images/landing/partners/nex.png";
import polygon from "../../../assets/images/landing/partners/polygon.png";
import quickswap from "../../../assets/images/landing/partners/quickswap.png";
import chainlink from "../../../assets/images/landing/partners/chainlink.png";
import gatoscan from "../../../assets/images/landing/partners/gatoscan.svg";
import uniswap from "../../../assets/images/landing/partners/uniswap.png";
import matic from "../../../assets/images/landing/partners/mtc.png";
import arbitrum from "../../../assets/images/landing/partners/arb.png";

const LastPartners = () => {
  return (
    <section className="partnersWrapper">
      <h5 className="introductionTitle" style={{ marginBottom: "4%" }}>
        Partners
      </h5>
      <Marquee loop={0} pauseOnHover={true}>
        <Link to={"https://moodglobalservices.com/"} target="_blank">
          <img className="marqueeImage" src={mood} alt="" />
        </Link>
        <Link to={"https://nexlabs-tailwind.netlify.app/"} target="_blank">
          <img className="marqueeImage" src={nex} alt="" />
        </Link>
        <Link to={"https://polygon.technology/"} target="_blank">
          <img className="marqueeImage" src={polygon} alt="" />
        </Link>
        <Link to={"https://quickswap.exchange/"} target="_blank">
          <img className="marqueeImage" src={quickswap} alt="" />
        </Link>
        <Link to={"https://chain.link/"} target="_blank">
          <img className="marqueeImage" src={chainlink} alt="" />
        </Link>
        <Link to={"https://gatoscan.com/"} target="_blank">
          <img className="marqueeImage" src={gatoscan} alt="" />
        </Link>
        <Link to={"https://uniswap.org/"} target="_blank">
          <img className="marqueeImage" src={uniswap} alt="" />
        </Link>
        <Link to={"https://twitter.com/maticnews_com"} target="_blank">
          <img className="marqueeImage" src={matic} alt="" />
        </Link>
        <Link to={"https://arbitrum.io/"} target="_blank">
          <img className="marqueeImage" src={arbitrum} alt="" />
        </Link>
        <Link to={"https://moodglobalservices.com/"} target="_blank">
          <img className="marqueeImage" src={mood} alt="" />
        </Link>
        <Link to={"https://nexlabs-tailwind.netlify.app/"} target="_blank">
          <img className="marqueeImage" src={nex} alt="" />
        </Link>
        <Link to={"https://polygon.technology/"} target="_blank">
          <img className="marqueeImage" src={polygon} alt="" />
        </Link>
        <Link to={"https://quickswap.exchange/"} target="_blank">
          <img className="marqueeImage" src={quickswap} alt="" />
        </Link>
        <Link to={"https://chain.link/"} target="_blank">
          <img className="marqueeImage" src={chainlink} alt="" />
        </Link>
        <Link to={"https://gatoscan.com/"} target="_blank">
          <img className="marqueeImage" src={gatoscan} alt="" />
        </Link>
        <Link to={"https://uniswap.org/"} target="_blank">
          <img className="marqueeImage" src={uniswap} alt="" />
        </Link>
        <Link to={"https://twitter.com/maticnews_com"} target="_blank">
          <img className="marqueeImage" src={matic} alt="" />
        </Link>
        <Link to={"https://arbitrum.io/"} target="_blank">
          <img className="marqueeImage" src={arbitrum} alt="" />
        </Link>
        <Link to={"https://moodglobalservices.com/"} target="_blank">
          <img className="marqueeImage" src={mood} alt="" />
        </Link>
        <Link to={"https://nexlabs-tailwind.netlify.app/"} target="_blank">
          <img className="marqueeImage" src={nex} alt="" />
        </Link>
        <Link to={"https://polygon.technology/"} target="_blank">
          <img className="marqueeImage" src={polygon} alt="" />
        </Link>
        <Link to={"https://quickswap.exchange/"} target="_blank">
          <img className="marqueeImage" src={quickswap} alt="" />
        </Link>
        <Link to={"https://chain.link/"} target="_blank">
          <img className="marqueeImage" src={chainlink} alt="" />
        </Link>
        <Link to={"https://gatoscan.com/"} target="_blank">
          <img className="marqueeImage" src={gatoscan} alt="" />
        </Link>
        <Link to={"https://uniswap.org/"} target="_blank">
          <img className="marqueeImage" src={uniswap} alt="" />
        </Link>
        <Link to={"https://twitter.com/maticnews_com"} target="_blank">
          <img className="marqueeImage" src={matic} alt="" />
        </Link>
        <Link to={"https://arbitrum.io/"} target="_blank">
          <img className="marqueeImage" src={arbitrum} alt="" />
        </Link>
      </Marquee>
    </section>
  );
};

export default LastPartners;
