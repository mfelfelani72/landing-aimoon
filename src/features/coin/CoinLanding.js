import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

// Components

import { InputSearch } from '../core/components/Input.jsx'
import CoinList from './components/CoinList.jsx';

// Functions

import { ConnectToServer } from '../../../utils/services/api/ConnectToServer.js';

// Constants

import { SYMBOLS } from "./utils/constants/EndPoints.js";

const CoinLanding = () => {
    // hooks
    const { t } = useTranslation();

    // states
    const [symbolsList, setSymbolsList] = useState([]);
    const [symbolsListTemp, setSymbolsListTemp] = useState([]);
    const [priority, setPriority] = useState(0);
    const [cashedImages, setCashedImages] = useState([]);

    let tempImages;

    // functions
    const searchSymbols = (value) => {
        setSymbolsList(
            symbolsListTemp.filter((item) =>
                item.name
                    .replace("-USDT", "")
                    .toLowerCase()
                    .includes(value.toLowerCase())
            )
        );
    };

    const getSymbolsList = () => {
        const parameter = {
            priority: priority,
        };

        const header = {
            headers: {
                authorization: "a669836a04658498f5bc3a42a0ff4109" // this is admin token, dont forget change it
            }
        }

        ConnectToServer("post", SYMBOLS, parameter, header, "coin-landing").then((response) => {
            console.log(response);
        })

    }

    const getCashedImagesLocal = () => {
        const cashedImagesLocal = localStorage.getItem("data-symbols-images");

        if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
    }


    useEffect(() => {
        if (symbolsList.length == 0) {
            getSymbolsList();
            getCashedImagesLocal();
        }
    }, [symbolsList]);
    return (
        <>
            <div className='flex flex-col mt-6'>
                <div className="px-4 text-white text-base font-medium">
                    {t("coin_list_title")}
                </div>
                <div className='px-4 mt-5'>
                    <InputSearch id="coin-search" placeholder={t("search_coin")} className={""} />
                </div>

                <div className='px-4 pb-[7rem] grid grid-cols-2 mt-9 gap-7 bg-background'>
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                    <CoinList />
                </div>
            </div>
        </>
    )
}

export default CoinLanding
