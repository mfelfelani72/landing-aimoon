import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { ImageLazy } from '../../core/components/Image.jsx'

// Functions

import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper"

// Constants

import { DEFAULT_COIN_IMAGE } from "../../../app/utils/constant/Defaults.js";

const CoinList = ({ className, ...props }) => {
    // hooks
    const { t } = useTranslation();

    return (
        <>
            <div className='flex flex-row gap-2 items-center'>
                <ImageLazy src={
                    props?.cashed_images.length !== 0 &&
                        props?.cashed_images?.some((item) =>
                            item.hasOwnProperty(props?.row?.name)
                        )
                        ? props?.cashed_images.filter(
                            (item) => item[props?.row?.name]
                        )[0][props?.row?.name]?.base64data
                        : props?.row?.logo
                }
                    onError={(e) => {
                        e.target.src = DEFAULT_COIN_IMAGE;
                    }} alt={props?.item?.name + "-logo"} className={"w-8 h-8 rounded-full"} />
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
