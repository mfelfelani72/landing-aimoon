import React from "react";
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
  // consts
  const data = props?.data?.timestamp.map((timestamp, index) => ({
    name: dateHelper(timestamp, "chart"),
    damp5: props?.data?.damp_5[index],
    damp10: props?.data?.damp_10[index],
    damp15: props?.data?.damp_15[index],
    damp20: props?.data?.damp_20[index],
    damp30: props?.data?.damp_30[index],
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
            dataKey="damp5"
            name="damp 05"
            stroke="rgba(115, 234, 105, 1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp10"
            name="damp 10"
            stroke="rgba(83, 145, 208, 1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp15"
            name="damp 15"
            stroke="rgba(158, 145, 83, 1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp20"
            name="damp 20"
            stroke="rgba(229, 124, 67, 1)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp30"
            name="damp 30"
            stroke="rgba(180, 162, 241, 1)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
        <div className="w-full flex flex-row pb-4 justify-center px-4 gap-2">
          <div className="flex flex-row items-center gap-1">
            <div className="bg-Success-300 w-2 h-2 rounded-full"></div>
            <div className="text-white text-[10px] font-medium font-satoshi">
              Damp 05
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="bg-Tertiary-600 w-2 h-2 rounded-full"></div>
            <div className="text-white text-[10px] font-medium font-satoshi">
              Damp 10
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="bg-Warning-300 w-2 h-2 rounded-full"></div>
            <div className="text-white text-[10px] font-medium font-satoshi">
              Damp 15
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="bg-primary-400 w-2 h-2 rounded-full"></div>
            <div className="text-white text-[10px] font-medium font-satoshi">
              Damp 20
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="bg-secondary-500 w-2 h-2 rounded-full"></div>
            <div className="text-white text-[10px] font-medium font-satoshi">
              Damp 30
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoodTimeSeries;
