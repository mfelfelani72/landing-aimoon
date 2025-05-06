import React from "react";

// Components

import { ImageLazy } from "./Image.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn";
import { dateHelper } from "../../../../utils/helpers/dateHelper.js";

// Constants

import { DEFAULT_NEW_IMAGE } from "../../../app/utils/constant/Defaults.js";

// Svg

import avatar from "../../../../assets/images/png/avatar.png";
import { DonutChart } from "./Chart.jsx";
import { t } from "i18next";

const NewsBox = ({ className, children, ...props }) => {
  // functions
  const findMaxData = () => {

    let maxItem = props?.row?.Negative;
    let colorItem = "#D80F0F";

    if (props?.row?.Neutral > maxItem) {
      maxItem = props?.row?.Neutral
      colorItem = "#6A6783";
    }
    if (props?.row?.Positive > maxItem) {
      maxItem = props?.row?.Positive
      colorItem = "white";
    }
    return {
      maxItem: maxItem,
      colorItem: colorItem
    };
  };
  return (
    <>
      <div className={cn("w-full h-full flex flex-col", className)}>
        {/* header */}
        <div className="flex flex-row items-center justify-between px-2">
          <div className="text-sm font-medium capitalize cursor-pointer">
            {props?.row?.provider}
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="text-sm font-bold pt-0.5">{props?.row?.author}</div>
            <ImageLazy
              src={props?.row?.author_info?.picUrl}
              onError={(e) => {
                e.target.src = avatar;
              }}
              alt={props?.row?.author}
              className={"w-8 h-8 rounded-full"}
            />
          </div>
        </div>
        {/* picture */}

        <div className="relative mt-2">
          <ImageLazy
            src={
              props?.cashed_images?.length > 0
                ? props.cashed_images.find(item =>
                  item[props?.row?.created_at]?.url === props?.row?.thImage || item[props?.row?.created_at]?.url === props?.row?.local_image
                )?.[props?.row?.name]?.base64data || props?.row?.thImage
                : props?.row?.thImage
            }

            onError={(e) => {
              e.target.src = DEFAULT_NEW_IMAGE;
            }}
            alt={props?.row?.title}
            className={"w-full h-44 rounded-t-[1.25rem]"}
          />
          <div className="w-full h-36 left-0 bottom-0 absolute bg-gradient-to-b from-black/0 to-zinc-950 inline-flex items-end justify-between p-4">
            <div className="w-[4.5rem]">
              <div className='relative'>
                <div style={{ color: findMaxData()?.colorItem }} className="absolute -top-[1.5rem] rtl:left-0 ltr:right-0 w-5 h-5">{findMaxData()?.maxItem * 100}%</div>
                <div className="absolute -top-[3rem] rtl:-right-[0.85rem] ltr:-left-[0.85rem] w-[65px] h-[65px]">
                  <DonutChart width={65} height={65} data={[{
                    name: t("negative"),
                    y: props?.row?.Negative,
                    color: "#D80F0F",
                  }, {
                    name: 'positive',
                    y: props?.row?.Positive,
                    color: "white",
                  }, {
                    name: 'neutral',
                    y: props?.row?.Neutral,
                    color: "#6A6783",
                  }]} />
                </div>

              </div>
            </div>
            {props?.row?.author_info && <div className='flex flex-col gap-1 justify-center items-center'>
              <div className="text-base font-medium left-to-right">
                {props.row?.author_info["last_week_count"].toLocaleString() +
                  " / " +
                  props.row?.author_info["AvgNewsPERweek"].toLocaleString()}
              </div>
              <div className="w-16 h-1.5 relative rounded-3xl">
                <div className="w-16 h-1.5 left-0 top-0 absolute bg-gray-500 rounded-3xl" />
                <div style={{ width: `min(64px, calc(${props.row?.author_info["last_week_count"] / props.row?.author_info["AvgNewsPERweek"]} * 64px))` }} className="h-1.5 left-0 top-0 absolute bg-white rounded-3xl" />
              </div>
            </div>}

            {props.row?.provider_info && <div className='flex flex-col gap-1 justify-center items-center'>
              <div className="text-base font-medium left-to-right">
                {props.row?.provider_info["last_week_count"].toLocaleString() +
                  " / " +
                  props.row?.provider_info["AvgNewsPERweek"].toLocaleString()}
              </div>
              <div className="left-to-right w-16 h-1.5 bg-gray-500 rounded-3xl">
                <div style={{ width: `min(64px, calc(${props.row?.provider_info["last_week_count"] / props.row?.provider_info["AvgNewsPERweek"]} * 64px))` }} className='h-1.5 bg-white rounded-3xl transition-all duration-1000'></div>
              </div>
            </div>}

          </div>
        </div>

        {/* title */}
        <div className="flex flex-col bg-[#28263a] rounded-b-[1.25rem] p-4">
          <div className="text-Neutral-100 text-base font-medium leading-snug">
            {props?.row?.title_foreign
              ? props?.row?.title_foreign
              : props?.row?.title}
          </div>

          <div className="text-Neutral-300 text-sm font-normal leading-tight tracking-tight my-2 left-to-right font-satoshi">
            {dateHelper(props?.row?.pubDate, "difference")}
          </div>

          <div className="w-full max-h-36 text-sm text-Neutral-100 font-normal leading-relaxed tracking-tight scrollbar overflow-auto py-2 pl-4">
            {props?.row?.summary_foreign
              ? props?.row?.summary_foreign
              : props?.row?.summaryEn}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsBox;
