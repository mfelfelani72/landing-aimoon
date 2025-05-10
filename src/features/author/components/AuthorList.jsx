import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

// Components

import { ImageLazy } from '../../core/components/Image.jsx'

// Functions

import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper.js"
import { safeSentenceHelper } from "../../../../utils/helpers/stringHelper.js"
// Constants

import { DEFAULT_AVATAR_IMAGE } from "../../../app/utils/constant/Defaults.js";

const AuthorList = ({ className, ...props }) => {
    // hooks
    const { t } = useTranslation();

    // states
    const [cashedImage, setCashedImage] = useState();
    
    // functions
    useEffect(() => {
      
            const authorName = safeSentenceHelper(props?.row?.name);
            const foundItem = props?.cashed_images?.find(item => item[authorName]);
            if (foundItem) {
                setCashedImage(foundItem[authorName]?.base64data);
            }
       
    }, []);

    return (
        <>
            <div className='flex flex-row w-full justify-center gap-2 items-center  p-3 h-20 bg-[#11101A] rounded-2xl'>
                <ImageLazy
                    src={
                        cashedImage ?
                            cashedImage :
                            props?.row?.local_image ?
                                props?.row?.local_image :
                                props?.row?.picUrl ?
                                    props?.row?.picUrl :
                                    DEFAULT_AVATAR_IMAGE
                    }
                    onError={(e) => {
                        e.target.src = DEFAULT_AVATAR_IMAGE;
                    }}
                    alt={props?.item?.name + "-logo"} className={"w-8 h-8 rounded-full"} />
                <div className='flex flex-col w-full gap-2 justify-center'>
                    <div className="self-stretch text-white text-sm font-medium leading-none tracking-wide" >{props?.row?.name}</div>

                    <div className='flex flex-row w-full justify-between items-center'>
                        <div className="self-stretch inline-flex justify-end items-center gap-1 left-to-right">
                            <div className="text-white text-xs font-normal leading-tight tracking-tight"> + {formatNumberHelper(parseInt(props?.row?.newsCount))}</div>
                            <div className="flex justify-start items-end gap-[5px]">
                                <div className="justify-start text-Neutral-300 text-[0.5rem] font-normal ">{t("news_count")}</div>
                            </div>
                        </div>

                        <div className="min-w-28 h-5 bg-background-light rounded-md overflow-hidden">
                            <div className="flex gap-1 p-1 items-center justify-between w-full h-full">
                                <span className="text-[0.625rem] text-neutral-300 font-normal  ">
                                    {t("some_text")}
                                </span>
                                <span className="text-[0.625rem] text-white font-normal  leading-none tracking-wide">
                                    {props?.row?.worked?.charAt(0).toUpperCase() + props?.row?.worked?.slice(1)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorList
