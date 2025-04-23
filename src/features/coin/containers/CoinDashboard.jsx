import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Components

import TabInfoAnalysisNews from "../components/TabInfoAnalysisNews.jsx"

// Constants

import { OFFLINE_COIN_ANALYZE } from "../utils/constants/EndPoints.js"

// Functions

import { ConnectToServer } from '../../../../utils/services/api/ConnectToServer.js';

const CoinDashboard = () => {
    // hooks
    const location = useLocation();

    // states

    const [coinAnalyze, setCoinAnalyze] = useState();

    // functions

    const getOfflineCoinAnalyze = async () => {
        const parameter = {
            symbol: location?.state?.symbol?.name,
        };

        const header = {
            headers: {
                authorization: "a669836a04658498f5bc3a42a0ff4109" // this is admin token, dont forget change it
            }
        }

        ConnectToServer("post", OFFLINE_COIN_ANALYZE, parameter, header, "coin-dashboard").then((response) => {
            if (response?.data?.return) {
                setCoinAnalyze(response.data.data);
            }
        })
    };

    useEffect(() => {
        if (!coinAnalyze) {
            getOfflineCoinAnalyze();
        }
    })

    return (
        <>
            <div className='bg-background pb-[7rem] mt-6'>
                <TabInfoAnalysisNews symbol={location?.state?.symbol} coin_analyze={coinAnalyze} />
            </div>
        </>
    )
}

export default CoinDashboard
