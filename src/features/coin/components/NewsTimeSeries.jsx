import React from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  dot,
} from "recharts";
import { dateHelper } from "../../../../utils/helpers/dateHelper.js";

const MoodTimeSeries = (props) => {
  // hooks
  const { t } = useTranslation();

  // consts
  const data = props?.data?.timestamp.map((timestamp, index) => ({
    name: dateHelper(timestamp, "chart"),
    news_count: props?.data?.newsCount[index],
  }));
  return (
    <>
      <div className="w-full flex flex-col jusify-start  left-to-right">
        <LineChart
          width={330}
          height={150}
          data={data}
          margin={{ top: 0, left: -25, bottom: 10 }}
        >
          {/* <CartesianGrid  /> */}
          <XAxis dataKey="name" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          {/* <Tooltip /> */}
          {/* <Legend wrapperStyle={{ paddingTop: 10 }} /> */}

          <Line
            type="monotone"
            dataKey="news_count"
            name="news count"
            stroke="rgba(115, 234, 105, 1)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
        <div className="w-full flex flex-row pb-4 justify-center px-4 gap-2">
          <div className="flex flex-row items-center gap-1">
            <div className="bg-Success-300 w-2 h-2 rounded-full"></div>
            <div className="text-white text-[10px] font-medium font-satoshi">
              {t("news_count")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodTimeSeries;
