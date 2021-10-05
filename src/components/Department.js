import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useHistory } from "react-router-dom";

import "../styles/Department.css";
import { DatePicker, Space } from "antd";
import { Table } from "antd";
import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";

import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";

import {
  dataSource,
  columns,
  cardTodayData,
  cardTotalData,
  TodayData,
  TotalData,
} from "../data/Department";
import { card, verticalLineseperator } from "../common/components";
import NavBar from "./NavBar";
const { RangePicker } = DatePicker;

function Department() {
  const [state, setstate] = useState({
    whatCountToShow: "Total Count",
    cardData: cardTotalData,
    toggleValue: "Total",
  });

  const history = useHistory();

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

  const Linecharts = () => {
    return (
      <ResponsiveContainer width="95%" height={250}>
        <LineChart
          // width={600}
          // height={350}
          data={state.toggleValue === "Today" ? TodayData : TotalData}
          margin={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" margin={{ top: 50, left: 30 }} />
          <Line
            type="monotone"
            dataKey="open"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="closed" stroke="#82ca9d" />
          <Line type="monotone" dataKey="reopen" stroke="pink" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  if (localStorage.getItem("token") !== "signin") {
    history.push("/");
  }

  const Listing = () => {
    return (
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
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

  const switchButton = () => {
    return (
      <div style={{ display: "flex" }}>
        <label class="switch">
          <input
            type="checkbox"
            id="togBtn"
            onChange={(e) => {
              if (e.target.checked) {
                setstate({ ...state, toggleValue: "Today" });
              } else {
                setstate({ ...state, toggleValue: "Total" });
              }
              console.log("logggg", e.target.checked);
            }}
          />
          <div class="slider round">
            <span class="on">Today</span>
            <span class="off">Total</span>
          </div>
        </label>{" "}
      </div>
    );
  };

  return (
    <div className="department">
      <NavBar />

      <div className="body">
        <div>
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

          <div className="cardBlock">{card(state.cardData)}</div>
        </div>
        <div className="graphBlock">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="lineGraph">
              <div className="lineGraphHeader">
                <div className="heading">Statistics</div>
                {switchButton()}
              </div>
              <div style={{ margin: "auto" }}>{Linecharts()}</div>
            </div>
            <div className="listing">
              <div
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontFamily: "system-ui",
                  paddingBottom: "25px",
                }}
              >
                Top 5 Department
              </div>{" "}
              {Listing()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Department;
