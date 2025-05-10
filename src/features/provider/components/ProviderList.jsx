import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { ImageLazy } from '../../core/components/Image.jsx'

// Functions

import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper.js"

// Constants

import { DEFAULT_COIN_IMAGE } from "../../../app/utils/constant/Defaults.js";

const ProviderList = ({ className, ...props }) => {
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
            <div className='flex flex-row gap-2 items-center'>
                <ImageLazy
                    src={
                        cashedImage ?
                            cashedImage :
                            props?.row?.local_image ?
                                props?.row?.local_image :
                                props?.row?.logoUrl ?
                                    props?.row?.logoUrl :
                                    DEFAULT_COIN_IMAGE
                      
                    }
                    onError={(e) => {
                        e.target.src = DEFAULT_COIN_IMAGE;
                    }}
                    alt={props?.item?.name + "-logo"} className={"w-10 h-10 rounded-full"} />
                <div className='flex flex-col w-full gap-2 justify-center'>
                    <div className="text-white text-sm font-medium  leading-none tracking-wide capitalize">{props?.row?.name}</div>

                    <div className='flex flex-row w-full justify-between'>
                        <div className="text-Neutral-300 text-[8px] font-normal">{t("news_count")}</div>
                        <div className="text-Neutral-300 text-xs font-normal leading-tight tracking-tight">{props?.row?.newsCount ? formatNumberHelper(parseInt(props?.row?.newsCount)) : 0} +</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProviderList
