import { useState, useEffect, useMemo } from 'react';

const useDevice = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch device
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const deviceInfo = useMemo(() => {
        const orientation = screenWidth > screenHeight ? 'landscape' : 'portrait';

        let type;
        if (screenWidth < 576) {
            type = 'mobile';
        } else if (screenWidth >= 576 && screenWidth < 992) {
            type = 'ipad';
        } else {
            type = 'desktop';
        }

        return {
            type,
            orientation,
            screenWidth,
            screenHeight,
            isTouchDevice,
            isMobile: type === 'mobile',
            isIpad: type === 'ipad',
            isDesktop: type === 'desktop',
        };
    }, [screenWidth, screenHeight, isTouchDevice]);

    return deviceInfo;
};

export default useDevice;