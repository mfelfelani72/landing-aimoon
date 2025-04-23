import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  dot
} from "recharts";
import { dateHelper } from "../../../../utils/helpers/dateHelper.js";

function MoodTimeSeries(props) {
  const data = props.data.timestamp.map((timestamp, index) => ({
    name: dateHelper(timestamp, "chart"),
    damp5: props.data.damp_5[index],
    damp10: props.data.damp_10[index],
    damp15: props.data.damp_15[index],
    damp20: props.data.damp_20[index],
    damp30: props.data.damp_30[index],
  }));
  return (
    <>
      <div className="w-full flex flex-row justify-center mx-[2rem]">
        <LineChart
          width={352}
          height={150}
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid  />
          <XAxis dataKey="name" tick={{ fill: "rgba(0,0,0,0.5)" }} />
          <YAxis tick={{ fill: "rgba(0,0,0,0.5)" }} />
          {/* <Tooltip /> */}
          {/* <Legend wrapperStyle={{ paddingTop: 10 }} /> */}

          <Line
            type="monotone"
            dataKey="damp5"
            name="damp 05"
            stroke="rgba(222, 49, 99, 1)"
            strokeWidth={1}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp10"
            name="damp 10"
            stroke="rgba(255, 127, 80, 1)"
            strokeWidth={1}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp15"
            name="damp 15"
            stroke="rgba(159, 226, 191, 1)"
            strokeWidth={1}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp20"
            name="damp 20"
            stroke="rgba(100, 149, 237, 1)"
            strokeWidth={1}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="damp30"
            name="damp 30"
            stroke="rgba(28, 40, 51, 1)"
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </div>
    </>
  );
}

export default MoodTimeSeries;
