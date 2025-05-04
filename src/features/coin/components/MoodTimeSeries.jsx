import React, { useState } from "react";

// Components

import { LineChart } from "../../core/components/Chart.jsx";

// Functions

import { dateHelper } from "../../../../utils/helpers/dateHelper.js";

const MoodTimeSeries = ({ className, ...props }) => {
  // consts
  const [data] = useState([
    {
      name: 'damp5',
      data: props?.data?.damp_5,
      color: 'rgba(115, 234, 105, 1)'
    },
    {
      name: 'damp10',
      data: props?.data?.damp_10,
      color: 'rgba(83, 145, 208, 1)'
    },
    {
      name: 'damp15',
      data: props?.data?.damp_15,
      color: 'rgba(158, 145, 83, 1)'
    },
    {
      name: 'damp20',
      data: props?.data?.damp_20,
      color: 'rgba(229, 124, 67, 1)'
    },
    {
      name: 'damp30',
      data: props?.data?.damp_30,
      color: 'rgba(180, 162, 241, 1)'
    },
  ]);
  return (
    <>
      <div className="w-full flex flex-col jusify-start px-4 pb-4 left-to-right">

        <LineChart data={data} categories={props?.data?.timestamp.map((row) =>
          dateHelper(row, "chart")
        )} />
      </div>
    </>
  );
};

export default MoodTimeSeries;
