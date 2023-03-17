//Lib
//Components
import React, { Fragment, useState } from "react";
//Styled
import styles from "./RecommendList.module.less";
import { d01 } from "@Assets/images/index";
import { Row, Col } from "antd";
import { RECOMMEND_DATA_LIST, RECOMMEND_IMAGES_DATA_LIST } from "@Consts";
import RecommendItem from "./components/RecommendItem";
import RecommendVideoItem from "./components/RecommendVideoItem";
import { Button } from "@Components";
import { Line } from "@ant-design/plots";

const MyRecord = (props) => {
  const renderRecommendList = () => {
    return (
      <Row className={styles.recommendList} gutter={[32, 32]} justify="center">
        {RECOMMEND_DATA_LIST.map((item) => {
          return (
            <Col xs={24} sm={12} md={6}>
              <RecommendItem
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Col>
          );
        })}
      </Row>
    );
  };
  const renderRecommendVideoList = () => {
    return (
      <Fragment>
        <Row className={styles.recommendVideoList} gutter={[8, 8]}>
          {RECOMMEND_IMAGES_DATA_LIST.map((item) => {
            return (
              <Col xs={24} sm={12} md={6}>
                <RecommendVideoItem
                  key={item.id}
                  image={item.image}
                  date={item.date}
                  tag={item.tag}
                  title={item.title}
                />
              </Col>
            );
          })}
        </Row>
        <Row justify="center">
          <Button>コラムをもっと見る</Button>
        </Row>
      </Fragment>
    );
  };
  return (
    <div className={styles.page}>
      {renderRecommendList()}
      {renderRecommendVideoList()}
    </div>
  );
};

export default MyRecord;
