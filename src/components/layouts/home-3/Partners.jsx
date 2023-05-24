import React from 'react';
import { useEffect, useRef } from 'react';
import { Noise } from 'noisejs';
import { Link } from 'react-router-dom';

import mood from '../../../assets/images/landing/partners/mood.jpg'
import nex from '../../../assets/images/landing/partners/nex.png'
import polygon from '../../../assets/images/landing/partners/polygon.png'
import quickswap from '../../../assets/images/landing/partners/quickswap.png'
import chainlink from '../../../assets/images/landing/partners/chainlink.png'
import gatoscan from '../../../assets/images/landing/partners/gatoscan.svg'
import uniswap from '../../../assets/images/landing/partners/uniswap.png'
import matic from '../../../assets/images/landing/partners/matic.png'
import arbitrum from '../../../assets/images/landing/partners/arbitrum.png'

const CANVAS_WIDTH = 3000;
// The amplitude. The amount the noise affects the movement.
const NOISE_AMOUNT = 5;
// The frequency. Smaller for flat slopes, higher for jagged spikes.
const NOISE_SPEED = 0.004;
// Pixels to move per frame. At 60fps, this would be 18px a sec.
const SCROLL_SPEED = 0.3;

const bubbles = [
    {
        s: 0.6,
        x: 1134,
        y: 20,
        bg: mood,
        l: "https://moodglobalservices.com/"
    },
    {
        s: 0.6,
        x: 1620,
        y: 15,
        bg: nex,
        l: "https://nexlabs-tailwind.netlify.app/"
    },
    {
        s: 0.6,
        x: 1761,
        y: 10,
        bg: polygon,
        l: "https://polygon.technology/"
    },
    {
        s: 0.6,
        x: 2499,
        y: 10,
        bg: quickswap,
        l: "https://quickswap.exchange/"
    },
    {
        s: 0.8,
        x: 2704,
        y: 20,
        bg: chainlink,
        l: "https://chain.link/"
    },
    {
        s: 0.6,
        x: 2271,
        y: 5,
        bg: gatoscan,
        l: "https://gatoscan.com/"
    },
    {
        s: 0.6,
        x: 795,
        y: 10,
        bg: uniswap,
        l: "https://uniswap.org/"
    },
    {
        s: 0.6,
        x: 276,
        y: 15,
        bg: matic,
        l: "https://twitter.com/maticnews_com"
    },
    {
        s: 0.6,
        x: 1310,
        y: 30,
        bg: arbitrum,
        l: "https://arbitrum.io/"
    },
];



const noise = new Noise();

const Partners = () => {

    const animationRef = React.useRef();
    const bubblesRef = React.useRef(
        bubbles.map((bubble) => ({
            ...bubble,
            noiseSeedX: Math.floor(Math.random() * 64000),
            noiseSeedY: Math.floor(Math.random() * 64000),
            xWithNoise: bubble.x,
            yWithNoise: bubble.y,
        })),
    );

    const [isReady, setReady] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 200);

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);


    function animate() {
        bubblesRef.current = bubblesRef.current.map((bubble, index) => {
            const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;
            const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;

            const randomX = noise.simplex2(newNoiseSeedX, 0);
            const randomY = noise.simplex2(newNoiseSeedY, 0);

            const newX = bubble.x - SCROLL_SPEED;

            const newXWithNoise = newX + randomX * NOISE_AMOUNT;
            const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;

            const element = document.getElementById(`bubble-${index}`);

            if (element) {
                element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;
            }

            return {
                ...bubble,
                noiseSeedX: newNoiseSeedX,
                noiseSeedY: newNoiseSeedY,
                x: newX < -200 ? CANVAS_WIDTH : newX,
                xWithNoise: newXWithNoise,
                yWithNoise: newYWithNoise,
            };
        });

        animationRef.current = requestAnimationFrame(animate);
    }



    const backgroundPositions = [];


    useEffect(() => {
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);
            }
        }
    }, [])



    return (
        <div className="partnersWrapper">
            <h5 className='introductionTitle'>Partners</h5>
            <div className="bubbles">
                {bubbles.map((bubble, index) => (
                    <Link to={bubble.l}>
                        <div
                            className="bubble"
                            id={`bubble-${index}`}
                            key={`${bubble.x} ${bubble.y}`}
                            style={{
                                backgroundImage: `url(${bubble.bg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`,
                            }}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );

}

export default Partners;