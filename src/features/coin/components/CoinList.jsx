import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

// Components

import { ImageLazy } from '../../core/components/Image.jsx'

// Functions

import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper"
import { safeSentenceHelper } from '../../../../utils/helpers/stringHelper.js';

// Constants

import { DEFAULT_COIN_IMAGE } from "../../../app/utils/constant/Defaults.js";

const CoinList = ({ className, ...props }) => {
    // hooks
    const { t } = useTranslation();

    // states
    const [cashedImage, setCashedImage] = useState();

    // functions
    useEffect(() => {
        const coinName = safeSentenceHelper(props?.row?.name);
        const foundItem = props?.cashed_images?.find(item => item[coinName]);
        if (foundItem) {
            setCashedImage(foundItem[coinName]?.base64data);
        }
    }, [])

    return (
        <>
            <div className='flex flex-row gap-2 items-center'>
                <ImageLazy
                    src={
                        cashedImage ?
                            cashedImage :
                            props?.row?.local_image ?
                                props?.row?.local_image :
                                props?.row?.logo ?
                                    props?.row?.logo :
                                    DEFAULT_COIN_IMAGE
                    }
                    onError={(e) => {
                        e.target.src = DEFAULT_COIN_IMAGE;
                    }}

                    alt={props?.row?.name + "-logo"} className={"w-8 h-8 rounded-full"} />
                <div className='flex flex-col w-full gap-2 justify-center'>
                    <div className="text-white text-sm font-medium  leading-none tracking-wide">{props?.row?.name}</div>

                    <div className='flex flex-row w-full justify-between'>
                        <div className="text-Neutral-300 text-[8px] font-normal">{t("news_count")}</div>
                        <div className="text-Neutral-300 text-xs font-normal leading-tight tracking-tight">{props?.row?.latest_news_info?.news_count ? formatNumberHelper(parseInt(props?.row?.latest_news_info?.news_count)) : 0}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinList
