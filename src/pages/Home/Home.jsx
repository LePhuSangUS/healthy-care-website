//Lib
//Components
import React, { Fragment, useState } from "react";
//Styled
import styles from "./Home.module.less";
import { d01, circle } from "@Assets/images/index";
import { Row, Col } from "antd";
import {
  FILTER_DATA_LIST,
  EATING_DATA_LIST_MOCK,
  CHART_DATA_LIST,
} from "@Consts";
import EatingItem from "./components/EatingItem";
import FilterItem from "./components/FilterItem";
import { Button } from "@Components";
import { Line } from "@ant-design/plots";

const Home = (props) => {
  const [data, setData] = useState(CHART_DATA_LIST);
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
  const renderTopPage = () => {
    return (
      <Row className={styles.topPage}>
        <Col xs={24} sm={12} md={10} className={styles.achievementRateContainer}>
          <div className={styles.achievementRateMain}>
            <img src={d01} alt="d01" />

            <div className={styles.circle}>
              <img src={circle} alt="d01" />
              <div className={styles.rate}>
                <span>05/21</span> <span>75%</span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={14} className={styles.chartContainer}>
          <div className={styles.chartMain}>
          <Line {...config} />
          </div>
         
        </Col>
      </Row>
    );
  };
  const renderFilter = () => {
    return (
      <Row justify="center">
        {FILTER_DATA_LIST.map((item) => {
          return (
            <FilterItem key={item.id} icon={item.icon} label={item.label} />
          );
        })}
      </Row>
    );
  };
  const renderList = () => {
    return (
      <Fragment>
        <Row className={styles.eatingList} gutter={[8, 8]}>
          {EATING_DATA_LIST_MOCK.map((item) => {
            return (
              <Col key={item.id} xs={24} sm={12} md={6}>
                <EatingItem
                  
                  image={item.image}
                  date={item.date}
                  type={item.type}
                />
              </Col>
            );
          })}
        </Row>
        <Row justify="center">
          <Button>記録をもっと見る</Button>
        </Row>
      </Fragment>
    );
  };
  return (
    <div className={styles.page}>
      {renderTopPage()}
      {renderFilter()}
      {renderList()}
    </div>
  );
};

export default Home;
