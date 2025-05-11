import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

// Components

import { InputSearch } from '../core/components/Input.jsx'
import CoinList from './components/CoinList.jsx';
import LoaderPage from '../../app/components/LoaderPage.jsx';

// Functions

import { ConnectToServer } from '../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../utils/lib/arraysEqual.js";
import { safeSentenceHelper } from '../../../utils/helpers/stringHelper.js';

// Hooks

import useSetHeaderConfigure from '../../../utils/hooks/useSetHeaderConfigure.js';

// Constants

import { SYMBOLS } from "./utils/constants/EndPoints.js";

// Zustand

import useAppStore from "../../app/stores/AppStore.js";

const CoinLanding = () => {
    // hooks
    const { t } = useTranslation();
    const navigate = useNavigate();
    useSetHeaderConfigure("coins_list","/dashboard/home")

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
                authorization: sessionStorage.getItem("session_id")
            }
        }

        ConnectToServer("post", SYMBOLS, parameter, header, "coin-landing").then((response) => {
            if (response?.data?.return) {
                tempImages = response?.data?.data?.map((item) => item?.logo);
                if (
                    !arraysEqual(
                        tempImages,
                        response?.data?.data?.map((item) => item?.logo),
                        "data-dashboard-coins-images"
                    ) ||
                    !localStorage.getItem("data-dashboard-coins-images")
                ) {
                    cashImages(
                        "data-dashboard-coins-images",
                        response?.data?.data?.map((item) => safeSentenceHelper(item?.name)),
                        response?.data?.data?.map((item) => item?.logo)
                    );
                    getCashedImagesLocal();
                }
                setSymbolsList(response?.data?.data);
                setSymbolsListTemp(response?.data?.data);
            }
        })
    }

    const getCashedImagesLocal = () => {
        const cashedImagesLocal = localStorage.getItem("data-dashboard-coins-images");
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
            <div className='flex flex-col mt-[9.5rem]'>
                <div className="fixed top-[7.25rem] z-50 w-96 bg-background px-4 py-[1rem] text-white text-base font-medium">
                    {t("coin_list_title")}
                </div>
                <div className='fixed top-[10rem] z-50 w-96 bg-background px-4 py-[1rem]'>
                    <InputSearch onChange={(e) => searchSymbols(e.target.value)} id="coin-search" placeholder={t("search_coin")} className={""} />
                </div>

                <div className='px-4 mt-[6rem] pb-[7rem] grid grid-cols-2 gap-7 bg-background'>
                    {symbolsList?.length == 0 ? <LoaderPage className={"w-full bg-background mx-[6rem]"} /> :
                        <>
                            {symbolsList?.map((row, index) => (
                                <div className='cursor-pointer' onClick={(event) => {
                                    event.preventDefault();
                                    navigate("/dashboard/coin", {
                                        state: { symbol: row },
                                    });
                                }} key={index}>
                                    <CoinList cashed_images={cashedImages} id={index + "-" + row?.name} row={row} />
                                </div>
                            ))}
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default CoinLanding
