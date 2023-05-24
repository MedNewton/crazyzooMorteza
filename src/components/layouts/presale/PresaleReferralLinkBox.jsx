import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';
import { useAccount } from 'wagmi';
import { summaryOwner } from '../../../hooks/utils';

const PresaleReferralLinkBox = props => {

    const data = props.data;

    const { address, isConnecting, isConnected, isDisconnected } = useAccount();
	const [referralLink, setReferralLink] = useState('');
    const [isCopied, setIsCopied] = useState(false);


    const getInviteLink = async () => {
		let copyText = window.location.host;
		if (isConnected) {
			copyText = copyText + '/presale?ref=' + address;
			setReferralLink(copyText);
		} else {
			setReferralLink("Connect your wallet");
		}
	}

	useEffect(() => {
		getInviteLink();
	}, [isConnected]);


    const copyTextToClipboard = async (text) => {
		if ("clipboard" in navigator) {
			return await navigator.clipboard.writeText(text);
		} else {
			return document.execCommand("Coped", true, text);
		}
	};


    const handleCopyClick = () => {
		copyTextToClipboard(referralLink)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 2000);
			})
			.catch((err) => {
				console.log(err);
			});
	};


     function summary(owner){
        if(!address) return "connectWallet";
        var firstCharacters = owner.substring(0, 15);
        var lastCharacters = owner.substring(owner.length - 15);
        return firstCharacters + "..."  + lastCharacters;
      }


    return (
        <div className='presaleAddressGlassBox row'>
            <div className="col-4 referralRewardsWithdrawWrapper">
                <Button onClick={handleCopyClick} className="referralRewardsWithdrawBtn">{isCopied ? "Copied!" : "Referral Link"}</Button>
            </div>
            <div className="col-8 referralRewardsWrapper">
                <h5 className="presaleAddressLabel">{summary(referralLink)}</h5>
                
            </div>
        </div>
    );
}

PresaleReferralLinkBox.propTypes = {
    data: PropTypes.array.isRequired,
}


export default PresaleReferralLinkBox;