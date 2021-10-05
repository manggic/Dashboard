import React, { useState } from "react";
import "../styles/Dashboard.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DatePicker, Space } from "antd";
import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";
import * as Bootstrap from "react-icons/bs";
import * as FontAwesome from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { card, verticalLineseperator } from "../common/components";

import { cardTodayData, cardTotalData, data } from "../data/Dashboard";
const { RangePicker } = DatePicker;

function Dashboard() {
  const [state, setstate] = useState({
    whatCountToShow: "Total Count",
    cardData: cardTotalData,
  });

  const changeTheSelect = () => {
    setstate({
      ...state,
      whatCountToShow:
        state.whatCountToShow === "Total Count" ? "Today Count" : "Total Count",
      cardData:
        state.whatCountToShow === "Total Count" ? cardTodayData : cardTotalData,
    });
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => changeTheSelect()}>Total Count</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => changeTheSelect()}>Today Count</a>
      </Menu.Item>
    </Menu>
  );

  const onChange = () => {
    console.log("onChange");
  };
  const dateFilter = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "25px",
        }}
      >
        <RangePicker
          style={{ fontSize: "20px" }}
          onChange={onChange}
          size={20}
        />

        <Button
          type="primary"
          shape="round"
          icon={<FilterOutlined />}
          size={"default"}
          style={{
            background: "rgb(86, 42, 182)",
            borderRadius: "8px",
            marginLeft: "15px",
          }}
        >
          Filter
        </Button>
      </div>
    );
  };

  const selectDropdown = () => {
    return (
      <div
        style={{
          backgroundColor: "#562ab6",
          padding: "5px 13px 5px 13px",
          borderRadius: "8px",
        }}
      >
        <Dropdown overlay={menu}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            style={{ color: "white" }}
          >
            Select <DownOutlined />
          </a>
        </Dropdown>
      </div>
    );
  };

  const whatCountToShow = () => {
    return (
      <div
        style={{
          fontFamily: "system-ui",
          fontSize: "31px",
          fontWeight: "500",
          color: "rgb(52, 116, 132)",
        }}
      >
        {state.whatCountToShow}
      </div>
    );
  };

  const barChart = () => {
    return (
      <ResponsiveContainer width="95%" height={300}>
        <BarChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            // top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" margin={{ top: 50, left: 20 }} />
          <Bar dataKey="totalOpen" stackId="a" fill="#8884d8" />
          <Bar dataKey="totalClosed" stackId="a" fill="#82ca9d" />
          <Bar dataKey="totalReopen" stackId="a" fill="pink" />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="dashboard">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
        }}
      >
        {whatCountToShow()}
        <div style={{ display: "flex", alignItems: "center" }}>
          {dateFilter()}
          {verticalLineseperator()}
          {selectDropdown()}
        </div>
      </div>
      {state.cardData && card(state.cardData)}
      <div class="graphBlock">
        <div
          style={{
            fontFamily: "system-ui",
            fontSize: "31px",
            color: "rgb(52, 116, 132)",
            fontWeight: "500",
          }}
        >
          Customer Analysis
        </div>
        <div class="stackBarGraph">{barChart()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
