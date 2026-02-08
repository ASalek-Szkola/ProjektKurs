import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/icons8-sun.json';

const DarkModeGifSwitch = ({ width = 200, height = 200 }) => {
    const lottieRef = useRef(null);
    const wasPausedOnStart = useRef(false);

    const totalFrames = animationData.op;
    const twoThirdFrame = Math.floor(totalFrames * 0.66);

    const [step, setStep] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved === "true" ? 1 : 0;
    });

    // Body class sync
    useEffect(() => {
        if (step === 1) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [step]);

    const handleInit = () => {
        if (lottieRef.current && !wasPausedOnStart.current) {
            // Snap to appropirate frame on load
            if (step === 1) {
                lottieRef.current.goToAndStop(twoThirdFrame, true);
            } else {
                lottieRef.current.goToAndStop(0, true);
            }
            wasPausedOnStart.current = true;
        }
    };

    const toggleTheme = () => {
        if (!lottieRef.current) return;

        // With animation
        if (step === 0) {
            // Light -> Dark
            lottieRef.current.playSegments([0, twoThirdFrame], true);
            localStorage.setItem("darkMode", "true");
            setStep(1);
        } else {
            // Dark -> Light
            lottieRef.current.playSegments([twoThirdFrame, totalFrames], true);
            localStorage.setItem("darkMode", "false");
            setStep(0);
        }
    };

    return (
        <div 
            onClick={toggleTheme}
            style={{ 
                cursor: 'pointer', 
                margin: 'auto',
                width,
                height,
                backgroundColor: "white", 
                borderRadius: "0.75em",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={false}
                autoplay={false}
                onDOMLoaded={handleInit}
                style={{ width, height }}
            />
        </div>
    );
};

export default DarkModeGifSwitch;