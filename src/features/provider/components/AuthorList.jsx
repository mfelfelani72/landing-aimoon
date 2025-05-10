import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { ImageLazy } from '../../core/components/Image.jsx'

// Functions

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
            <div className='flex flex-col justify-center items-center gap-2 py-2 '>
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
                    alt={props?.item?.name + "-logo"} className={"w-10 h-10 rounded-full"} />
                <div className='flex flex-col w-full gap-2 justify-center'>
                    <div className="text-white text-sm text-center font-medium  leading-none tracking-wide capitalize">{props?.row?.name}</div>

                </div>
            </div>
        </>
    )
}

export default AuthorList
