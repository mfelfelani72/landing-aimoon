import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { InputSearch } from '../core/components/Input.jsx'
import CoinList from './components/CoinList.jsx';

const CoinLanding = () => {
    // hooks
    const { t } = useTranslation();
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
