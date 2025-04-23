import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

// Components

import { InputSearch } from '../core/components/Input.jsx'
import CoinList from './components/CoinList.jsx';

// Functions

import { ConnectToServer } from '../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../utils/lib/arraysEqual.js";

// Constants

import { SYMBOLS } from "./utils/constants/EndPoints.js";
import LoaderPage from '../../app/components/LoaderPage.jsx';

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
            if (response?.data?.return) {
                tempImages = response?.data?.data.map((item) => item?.logo);
                if (
                    !arraysEqual(
                        tempImages,
                        response?.data?.data.map((item) => item?.logo),
                        "data-symbols-images"
                    ) ||
                    !localStorage.getItem("data-symbols-images")
                ) {
                    cashImages(
                        "data-symbols-images",
                        response?.data?.data.map((item) => item?.name),
                        response?.data?.data.map((item) => item?.logo)
                    );
                }
                // for news image
                setSymbolsList(response?.data?.data);
                setSymbolsListTemp(response?.data?.data);
            }

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
        console.log(symbolsList)
    }, [symbolsList]);
    return (
        <>
            <div className='flex flex-col mt-6'>
                <div className="px-4 text-white text-base font-medium">
                    {t("coin_list_title")}
                </div>
                <div className='px-4 mt-5'>
                    <InputSearch onChange={(e) => searchSymbols(e.target.value)} id="coin-search" placeholder={t("search_coin")} className={""} />
                </div>

                <div className='px-4 pb-[7rem] grid grid-cols-2 mt-9 gap-7 bg-background'>
                    {symbolsList?.length == 0 ? <LoaderPage className={"w-full bg-background mx-[6rem]"} /> :
                        <>
                            {symbolsList?.map((row, index) => (
                                <div key={index}>
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
