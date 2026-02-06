import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/icons8-sun.json';

const DarkModeGifSwitch = ({ width = 200, height = 200 }) => {
    const [step, setStep] = useState(0);
    const lottieRef = useRef(null);

    const totalFrames = animationData.op;
    const twoThirdFrame = Math.floor(totalFrames * 0.66);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.goToAndStop(0, true);
        }
    }, []);

    const toggleTheme = () => {
        if (!lottieRef.current) return;

        if (step === 0) {
            lottieRef.current.playSegments([0, twoThirdFrame], true);
            document.body.classList.add("dark");
            setStep(1);
        } else {
            lottieRef.current.playSegments([twoThirdFrame, totalFrames], true);
            document.body.classList.remove("dark");
            setStep(0);
        }
    };

    return (
        <div onClick={toggleTheme}
            style={{ 
                cursor: 'pointer', 
                margin: 'auto',
                width,
                height,
                backgroundColor: "white"
            }}>

            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={false}
                autoplay={false}
                style={{
                    width,
                    height
                }}
            />
        </div>
    );
};

export default DarkModeGifSwitch;
