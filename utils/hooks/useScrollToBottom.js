import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for detecting when scrolling reaches the bottom of the page
 * @param {number} [threshold=100] - Distance from page bottom to trigger detection (in pixels)
 * @param {function} [onBottomReached] - Optional callback function that executes when bottom is reached
 * @returns {boolean} Whether the scroll has reached the bottom
 */
const useScrollToBottom = (threshold = 100) => {
    const [isBottom, setIsBottom] = useState(false);

    const checkIfBottomReached = useCallback(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        return windowHeight + scrollTop >= documentHeight - threshold;
    }, [threshold]);

    const handleScroll = useCallback(() => {
        if (checkIfBottomReached()) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    }, [checkIfBottomReached]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return isBottom;
};

export default useScrollToBottom;