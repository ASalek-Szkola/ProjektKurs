import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/icons8-sun.json';

const DarkModeGifSwitch = () => {
    const lottieRef = useRef(null);
    const wrapperRef = useRef(null);
    const wasPausedOnStart = useRef(false);

    const totalFrames = animationData.op;
    const twoThirdFrame = Math.floor(totalFrames * 0.66);

    const [step, setStep] = useState(() => {
        const saved = localStorage.getItem("darkMode");
        return saved === "true" ? 1 : 0;
    });

    // Sync body class
    useEffect(() => {
        document.body.classList.toggle("dark", step === 1);
    }, [step]);


    const handleInit = () => {
        if (lottieRef.current && !wasPausedOnStart.current) {
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

        if (step === 0) {
            lottieRef.current.playSegments([0, twoThirdFrame], true);
            localStorage.setItem("darkMode", "true");
            setStep(1);
        } else {
            lottieRef.current.playSegments([twoThirdFrame, totalFrames], true);
            localStorage.setItem("darkMode", "false");
            setStep(0);
        }
    };

    return (
        <div 
            ref={wrapperRef}
            onClick={toggleTheme}
            style={{ 
                cursor: 'pointer', 
                margin: 'auto',
                width: "var(--icon-width)",
                height: "var(--icon-height)",
                padding: "var(--icon-padding)",
                backgroundColor: "white", 
                borderRadius: "var(--radius)",
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
                style={{
                    width: parseFloat(window.getComputedStyle(document.body).getPropertyValue('--icon-width')),
                    height: parseFloat(window.getComputedStyle(document.body).getPropertyValue('--icon-height'))
                }}
            />
        </div>
    );
};

export default DarkModeGifSwitch;
