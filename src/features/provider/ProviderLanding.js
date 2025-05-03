import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

// Components

import { InputSearch } from '../core/components/Input.jsx'
import ProviderList from './components/ProviderList.jsx';
import LoaderPage from '../../app/components/LoaderPage.jsx';

// Functions

import { ConnectToServer } from '../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../utils/lib/arraysEqual.js";

// Constants

import { PROVIDER_NAMES } from "./utils/constants/EndPoints.js";

const CoinLanding = () => {
    // hooks
    const { t } = useTranslation();
    const navigate = useNavigate();

    // states
    const [providersList, setProvidersList] = useState([]);
    const [providersListTemp, setProvidersListTemp] = useState([]);
    const [cashedImages, setCashedImages] = useState([]);
    const [priority, setPriority] = useState(2);
    const [category, setCategory] = useState("cryptocurrencies");


    let tempImages;

    // functions
    const searchProviders = (value) => {
        setProvidersList(
            providersListTemp.filter((item) =>
                item.name
                    .replace("-USDT", "")
                    .toLowerCase()
                    .includes(value.toLowerCase())
            )
        );
    };

    const getProvidersList = () => {
        const parameter = {
            category: category,
            priority: priority,
        };
        const header = {
            headers: {
                authorization: "a669836a04658498f5bc3a42a0ff4109" // this is admin token, dont forget change it
            }
        }

        ConnectToServer("post", PROVIDER_NAMES, parameter, header, "provider-landing").then((response) => {
            if (response?.data?.return) {
                tempImages = response?.data?.data?.provider_list.map((item) => item?.logoUrl);
                if (
                    !arraysEqual(
                        tempImages,
                        response?.data?.data?.provider_list.map((item) => item?.logoUrl),
                        "data-providers-images"
                    ) ||
                    !localStorage.getItem("data-providers-images")
                ) {
                    cashImages(
                        "data-providers-images",
                        response?.data?.data?.provider_list.map((item) => item?.name),
                        response?.data?.data?.provider_list.map((item) => item?.logoUrl)
                    );
                }
                // for news image
                // console.log(response?.data?.data?.provider_list);
                
                setProvidersList(response?.data?.data?.provider_list);
                setProvidersListTemp(response?.data?.data?.provider_list);
            }
        })
    }

    const getCashedImagesLocal = () => {
        const cashedImagesLocal = localStorage.getItem("data-providers-images");
        if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
    }

    useEffect(() => {
        if (providersList.length == 0) {
            getProvidersList();
            getCashedImagesLocal();
        }

    }, [providersList]);
    return (
        <>
            <div className='flex flex-col mt-6'>
                <div className="px-4 text-white text-base font-medium">
                    {t("provider_list_title")}
                </div>
                <div className='px-4 mt-5'>
                    <InputSearch onChange={(e) => searchProviders(e.target.value)} id="provider-search" placeholder={t("search_provider")} className={""} />
                </div>

                <div className='px-4 pb-[7rem] grid grid-cols-2 mt-9 gap-7 bg-background'>
                    {providersList?.length == 0 ? <LoaderPage className={"w-full bg-background mx-[6rem]"} /> :
                        <>
                            {providersList?.map((row, index) => (
                                <div className='cursor-pointer' onClick={(event) => {
                                    event.preventDefault();
                                    navigate("/dashboard/provider", {
                                        state: { provider: row },
                                    });
                                }} key={index}>
                                    <ProviderList cashed_images={cashedImages} id={index + "-" + row?.name} row={row} />
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
