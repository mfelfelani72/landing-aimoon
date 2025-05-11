
import { useEffect } from "react";

// Zustand

import useAppStore from "../../src/app/stores/AppStore.js";

const useSetTitle = (title) => {
    // states
    const setTitlePage = useAppStore((state) => state.setTitlePage);

    // functions
    useEffect(() => {
        setTitlePage(title)
        return () => {
            setTitlePage("aimoonhub");
        }
    }, [setTitlePage])
};

export default useSetTitle;