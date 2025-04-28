
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

// Components

import { InputSearch } from '../core/components/Input.jsx'
import AuthorList from './components/AuthorList.jsx';
import LoaderPage from '../../app/components/LoaderPage.jsx';

// Functions

import { ConnectToServer } from '../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../utils/lib/arraysEqual.js";

// Constants

import { AUTHORS_NAMES } from "./utils/constants/EndPoints.js";

const AuthorLanding = () => {
    // hooks
    const { t } = useTranslation();
    const navigate = useNavigate();

    // states
    const [authorsList, setAuthorsList] = useState([]);
    const [authorsListTemp, setAuthorsListTemp] = useState([]);
    const [priority, setPriority] = useState(2);
    const [category, setCategory] = useState("cryptocurrencies");

    const [cashedImages, setCashedImages] = useState([]);

    let tempImages;

    // functions
    const searchAuthors = (value) => {
      setAuthorsList(
        authorsListTemp.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    };

    const getAuthorsList = () => {
        const parameter = {
            category: category,
            priority: priority,
        };
        const header = {
            headers: {
                authorization: "a669836a04658498f5bc3a42a0ff4109" // this is admin token, dont forget to change it
            }
        }

        ConnectToServer("post", AUTHORS_NAMES, parameter, header, "coin-landing").then((response) => {
            if (response?.data?.return) {
                tempImages = response?.data?.data.author_list.map((item) => item?.picUrl);
              
                
                if (
                    !arraysEqual(
                        tempImages,
                        response?.data?.data.author_list.map((item) => item?.picUrl),
                        "data-authors-images"
                    ) ||
                    !localStorage.getItem("data-authors-images")
                ) {
                    cashImages(
                        "data-authors-images",
                        response?.data?.data.author_list.map((item) => item?.name),
                        response?.data?.data.author_list.map((item) => item?.picUrl)
                    );
                }
                // for news image
                setAuthorsList(response?.data?.data.author_list);
                setAuthorsListTemp(response?.data?.data.author_list);
            }
        })
    }

    const getCashedImagesLocal = () => {
        const cashedImagesLocal = localStorage.getItem("data-authors-images");
        if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
    }

    useEffect(() => {
        if (authorsList.length == 0) {
            getAuthorsList();
            getCashedImagesLocal();
        }

    }, [authorsList]);
    return (
        <>
            <div className='flex flex-col mt-6  '>
                <div className="px-4 text-white text-base font-medium">
                    {t("author_list_title")}
                </div>
                <div className='px-4 mt-5'>
                    <InputSearch onChange={(e) => searchAuthors(e.target.value)} id="author-search" placeholder={t("search_authors")} className={""} />
                </div>

                <div className='px-4 pb-[7rem] flex flex-col w-full justify-center mt-9 gap-6 bg-background'>
                    {authorsList?.length == 0 ? <LoaderPage className={"w-full bg-background "} /> :
                        <>
                            {authorsList?.map((row, index) => (
                                <div className='cursor-pointer' onClick={(event) => {
                                    event.preventDefault();
                                    navigate("/dashboard/author", {
                                        state: { author: row },
                                    });
                                }} key={index}>
                                    <AuthorList cashed_images={cashedImages} id={index + "-" + row?.name} row={row} />
                                </div>
                            ))}
                        </>
                    }

                </div>
            </div>
        </>
    )
}


export default AuthorLanding
