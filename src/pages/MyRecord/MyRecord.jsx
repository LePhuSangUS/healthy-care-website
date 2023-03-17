//Lib
//Components
import React, { Fragment, useState } from "react";
//Styled
import styles from "./MyRecord.module.less";
import { Button } from "@Components";
import { Row, Col } from "antd";
import {
  RECORD_DATA_LIST,
  MY_EXERCISE_DATA_LIST,
  MY_DIARY_DATA_LIST,
} from "@Consts";
import RecordItem from "./components/RecordItem";
import BodyRecordChart from "./components/BodyRecordChart";
import MyExerciseItem from "./components/MyExerciseItem";
import MyDiaryItem from "./components/MyDiaryItem";

const MyRecord = (props) => {
  const renderRecordList = () => {
    return (
      <Row className={styles.recordList} gutter={[32, 32]} justify="center">
        {RECORD_DATA_LIST.map((item) => {
          return (
            <Col  key={item.id} xs={24} sm={12} md={8}>
              <RecordItem
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
  const renderChart = () => {
    return (
      <Row>
        <BodyRecordChart />
      </Row>
    );
  };

  const renderMyExercise = () => {
    return (
      <div className={styles.myExercise}>
        <div className={styles.title}>
          <span>BODY RECORD</span>
          <span>2021.05.21</span>
        </div>

        <Row gutter={[32, 8]} className={styles.myExerciseContent}>
          {MY_EXERCISE_DATA_LIST.map((item) => {
            return (
              <Col key={item.id} xs={24} sm={12} md={12}>
                <MyExerciseItem
                 
                  label={item.label}
                  value={item.value}
                  time={item.time}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };
  const renderMyDiary = () => {
    return (
      <div className={styles.myDiary}>
        <div className={styles.title}> MY DIARY</div>

        <Row gutter={[8, 8]} className={styles.myDiary}>
          {MY_DIARY_DATA_LIST.map((item) => {
            return (
              <Col key={item.id} xs={24} sm={12} md={6}>
                <MyDiaryItem
                  key={item.id}
                  label={item.label}
                  content={item.content}
                  time={item.time}
                />
              </Col>
            );
          })}
        </Row>

        <Row justify="center">
          <Button>記録をもっと見る</Button>
        </Row>
      </div>
    );
  };

  return (
    <div className={styles.page}>
      {renderRecordList()}
      {renderChart()}
      {renderMyExercise()}
      {renderMyDiary()}
    </div>
  );
};

export default MyRecord;
