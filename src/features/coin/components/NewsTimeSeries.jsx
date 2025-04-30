import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import { LineChart } from "../../core/components/Chart.jsx";

// Functions

import { dateHelper } from "../../../../utils/helpers/dateHelper.js";

const MoodTimeSeries = (props) => {
  // hooks
  const { t } = useTranslation();

  // consts


  // consts
  const [data] = useState([
    {
      name: t("news_count"),
      data: props?.data?.newsCount,
      color: 'rgba(115, 234, 105, 1)'
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
