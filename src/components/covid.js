import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import "../App.css";

function Covid() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Country" bordered={false}>
            <h2>India</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Active Cases" bordered={false}>
            <h2>{data.active}</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Confirmed" bordered={false}>
            <h2>{data.confirmed}</h2>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Deaths" bordered={false}>
            <h2>{data.deaths}</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Recovered" bordered={false}>
            <h2>{data.recovered}</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Last Updated" bordered={false}>
            <h2>{data.lastupdatedtime}</h2>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Delta Confirmed" bordered={false}>
            <h2>{data.deltaconfirmed}</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Delta Deaths" bordered={false}>
            <h2>{data.deltadeaths}</h2>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Delta Recovered" bordered={false}>
            <h2>{data.deltarecovered}</h2>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Covid;
