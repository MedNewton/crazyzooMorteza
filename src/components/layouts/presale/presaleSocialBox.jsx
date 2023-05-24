import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  BsTwitter,
  BsDiscord,
  BsInstagram,
  BsTelegram,
  BsMedium,
} from "react-icons/bs";
import { TbLetterC } from "react-icons/tb";
import { FaTelegramPlane, FaRobot } from "react-icons/fa";

const PresaleSocialBox = (props) => {
  const data = props.data;

  return (
    <div className="presaleAddressGlassBox row">
      <div className="col-12 presaleSocialLinksWrapper">
        <h5 className="presaleWhitepaperLabel">Know more</h5>
        <div className="presaleSocialBtnsWrapper">
          <Button
            className="presaleSocialBtn"
            onClick={() => {
              window.location.href =
                "https://zealy.io/c/crazyzooprotocol/questboard";
            }}
          >
            <svg
              role="img"
              aria-label="Logo"
              width="15"
              height="15"
              viewBox="0 0 84 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.37693 7.24204L2.21093 7.07439L2.19659 10.2718L2.19499 10.9383C2.19404 11.4575 2.19278 12.3538 2.19152 13.8639C2.189 16.8839 2.18648 22.3606 2.18648 32.1883V33.4507L5.93775 37.234C4.45243 38.1765 2.96008 39.1081 1.46088 40.0289L0.0117395 40.919L0 61.9962L17.303 79.4581L18.4389 79.533C39.6703 80.9317 61.5054 79.3798 81.9636 72.2615L84 71.553V46.2255L79.5741 41.7618C80.3282 41.011 81.0806 40.2538 81.8275 39.492L82.7005 38.6015V37.3491C82.7005 36.4847 82.7031 31.9577 82.7056 27.6449L82.7114 17.974L64.8894 0L63.1155 0.599323C44.6964 6.82238 24.941 8.27802 5.37693 7.24204ZM64.0755 3.48918L79.6887 19.2356C79.6887 19.2356 79.6786 35.6178 79.6786 37.3491C78.9365 38.1061 78.1881 38.8592 77.4372 39.6067C76.7181 40.3225 75.9966 41.0331 75.2759 41.737L80.9781 47.4879V69.3804C61.0119 76.3276 39.6051 77.8732 18.6359 76.4917L3.02263 60.7351L3.03271 42.6319C4.74009 41.5832 6.43886 40.5206 8.12874 39.4436C9.00082 38.8879 9.87053 38.3283 10.7378 37.7649L5.2084 32.1883C5.2084 21.7569 5.21124 16.2286 5.21391 13.3372C5.21627 10.7806 5.21849 10.2856 5.21849 10.2856C6.22478 10.3388 7.23201 10.3856 8.23997 10.4256C27.065 11.1728 46.1422 9.54808 64.0755 3.48918Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.21844 10.2855C25.0188 11.334 45.1819 9.87248 64.0754 3.48917L79.6887 19.2356C79.6887 19.2356 79.6786 35.6178 79.6786 37.3491C78.2256 38.8311 76.749 40.2981 75.2759 41.737L80.978 47.4879V69.3804C61.0119 76.3275 39.605 77.8732 18.6358 76.4917L3.02258 60.7351L3.03267 42.6319C5.62116 41.042 8.18985 39.4201 10.7378 37.7649L5.20836 32.1883C5.20836 12.5337 5.21844 10.2855 5.21844 10.2855Z"
                fill="#0D0D0D"
              ></path>
              <path
                d="M73.6348 27.2004V35.9777C63.8941 45.3443 54.1535 53.5121 44.4229 60.7961C54.5967 60.1155 64.7603 58.4799 74.9442 55.5135C74.9442 58.7542 74.9442 61.9848 74.9442 65.2255C60.9023 69.3297 46.8706 70.884 32.8388 70.884C30.1191 70.884 27.3994 70.8231 24.6797 70.7113V61.9339C34.4203 55.6861 44.161 48.7882 53.8916 40.8947C46.8908 41.7988 39.8899 42.1849 32.8891 42.1849C30.8745 42.1849 28.87 42.1544 26.8554 42.0934C26.8554 38.8527 26.8554 35.6221 26.8554 32.3814C28.8498 32.4424 30.8343 32.4728 32.8288 32.4728C46.4274 32.4728 60.026 31.0201 73.6247 27.1902L73.6348 27.2004Z"
                fill="white"
              ></path>
            </svg>
          </Button>
          <Button
            className="presaleSocialBtn"
            onClick={() => {
              window.location.href =
                "https://www.docdroid.net/zmGOBgK/official-1st-wp-crazyzoo-pdf";
            }}
          >
            <FaRobot size={15} color={"#fff"} />
          </Button>
          <Button
            className="presaleSocialBtn"
            onClick={() => {
              window.location.href = "https://medium.com/@CrazyZoo_io";
            }}
          >
            <BsMedium size={15} color={"#fff"} />
          </Button>
          <Button
            className="presaleSocialBtn"
            onClick={() => {
              window.location.href =
                "https://crazyzoos-organization.gitbook.io/crazy-zoo-protocol-documentation/o";
            }}
          >
            <TbLetterC size={15} color={"#fff"} />
          </Button>
          <Button
            className="presaleSocialBtn"
            onClick={() => {
              window.location.href = "https://discord.com/invite/crazyzoo";
            }}
          >
            <BsDiscord size={15} color={"#fff"} />
          </Button>
          <Button
            className="presaleSocialBtn"
            onClick={() => {
              window.location.href = "https://t.me/CrazyZoo_Global";
            }}
          >
            <BsTelegram size={15} color={"#fff"} />
          </Button>
          <Button
            className="presaleSocialBtn"
            onClick={() => {
              window.location.href = "https://twitter.com/CrazyZoo_io";
            }}
          >
            <BsTwitter size={15} color={"#fff"} />
          </Button>
        </div>
      </div>
      <div className="col-12 presaleWhitepaperWrapper">
        <h5 className="presaleWhitepaperLabel">Check our whitepaper</h5>
        <Button
          className="presaleWhitepaperBtn"
          onClick={() => {
            window.location.href =
              "https://crazyzoos-organization.gitbook.io/crazy-zoo-protocol-documentation/";
          }}
        >
          Check in here
        </Button>
      </div>
    </div>
  );
};

PresaleSocialBox.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PresaleSocialBox;
