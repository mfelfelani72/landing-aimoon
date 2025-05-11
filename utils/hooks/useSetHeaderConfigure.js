
import { useEffect } from "react";

// Zustand

import useAppStore from "../../src/app/stores/AppStore.js";

const useSetTitle = (title, backAddress) => {
    // states
    const setTitlePage = useAppStore((state) => state.setTitlePage);
    const setBackAddress = useAppStore((state) => state.setBackAddress);

    // functions
    useEffect(() => {
        setTitlePage(title)
        setBackAddress(backAddress)
        return () => {
            setTitlePage("aimoonhub");
            setBackAddress("/landing")
        }
    }, [setTitlePage, setBackAddress])
};

export default useSetTitle;