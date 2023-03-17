import React, { useState } from "react";
import { Line } from "@ant-design/plots";
import { CHART_DATA_LIST, BODY_RECORD_FILTER_DATA_LIST } from "@Mock";
import styles from "./BodyRecordChart.module.less";
import FilterItem from "./FilterItem";
export default function BodyRecordChart() {
  const [data, setData] = useState(CHART_DATA_LIST);
  const [currentValue, setCurrentValue] = useState("年");
  const config = {
    data,
    xField: "time",
    yField: "value",
    legend: false,
    seriesField: "category",
    color: ["#8FE9D0", "#FFCC21"],
    meta: {
      value: {
        min: 0,
        max: 300,
      },
    },
    point: {},
    theme: "default", // 'dark',
    tooltip: false,
    xAxis: {
      label: {
        style: {
          fill: "#fff",
        },
      },
      line: false,
      grid: {
        line: {
          style: {
            stroke: "#777777",
            lineWidth: 0.5,
          },
        },
      },
    },
    yAxis: false,
  };
  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <span>BODY RECORD</span>
        <span>2021.05.21</span>
      </div>
      <Line {...config} />
      <div className={styles.filter}>
        {BODY_RECORD_FILTER_DATA_LIST?.map((item) => (
          <FilterItem
            key={item.id}
            onChange={setCurrentValue}
            label={item.label}
            value={item.value}
            currentValue={currentValue}
          />
        ))}
      </div>
    </div>
  );
}
