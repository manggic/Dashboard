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
const { RangePicker } = DatePicker;
const cardTodayData = [
  { name: "Open", count: 14, iconName: "BsEnvelopeOpen" },
  { name: "Closed", count: 10, iconName: "BsEnvelope" },
  { name: "ReOpen", count: 1, iconName: "FaEnvelopeOpenText" },
  { name: "Total", count: 25, iconName: "BsCardChecklist" },
];

const cardTotalData = [
  { name: "Open", count: 40, iconName: "BsEnvelopeOpen" },
  { name: "Closed", count: 50, iconName: "BsEnvelope" },
  { name: "ReOpen", count: 10, iconName: "FaEnvelopeOpenText" },
  { name: "Total", count: 100, iconName: "BsCardChecklist" },
];

const data = [
  {
    name: "Reliance Industries",
    totalOpen: 100,
    totalClosed: 400,
    totalReopen: 20,
    amt: 2400,
  },
  {
    name: "HDFC Bank",
    totalOpen: 300,
    totalClosed: 198,
    totalReopen: 10,
    amt: 2210,
  },
  {
    name: "Indian Oil",
    totalOpen: 200,
    totalClosed: 800,
    totalReopen: 50,
    amt: 2290,
  },
  {
    name: "Tata Motors",
    totalOpen: 270,
    totalClosed: 398,
    totalReopen: 15,
    amt: 2000,
  },
  {
    name: "ICICI Bank",
    totalOpen: 189,
    totalClosed: 480,
    totalReopen: 21,
    amt: 2181,
  },
  {
    name: "NTPC",
    totalOpen: 239,
    totalClosed: 300,
    totalReopen: 40,
    amt: 2500,
  },
  {
    name: "Larsen & Toubro",
    totalOpen: 349,
    totalClosed: 430,
    totalReopen: 50,
    amt: 2100,
  },
  {
    name: "Bharti Airtel",
    totalOpen: 340,
    totalClosed: 330,
    totalReopen: 20,
    amt: 2100,
  },
  {
    name: "Infosys",
    totalOpen: 312,
    totalClosed: 430,
    totalReopen: 40,
    amt: 2100,
  },
  {
    name: "Wipro",
    totalOpen: 332,
    totalClosed: 530,
    totalReopen: 30,
    amt: 2100,
  },
  {
    name: "HCL Technologies",
    totalOpen: 249,
    totalClosed: 431,
    totalReopen: 35,
    amt: 2100,
  },
  {
    name: "Tata Steel",
    totalOpen: 452,
    totalClosed: 222,
    totalReopen: 90,
    amt: 2100,
  },
  {
    name: "Bank of Baroda",
    totalOpen: 333,
    totalClosed: 111,
    totalReopen: 11,
    amt: 2100,
  },
];

function Dashboard() {
  const [state, setstate] = useState({
    whatCountToShow: "Total Count",
    cardData: cardTotalData,
  });

  // const [whatCountToShow, setWhatCountToShow] = useState("Total Count");
  // const [cardData, setCardData] = useState(cardTotalData);

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

  const card = (dataToShow) => {
    console.log("data", dataToShow);
    // let { cardData } = this.props;
    return (
      <div
        // onMouseEnter={() => this.changeTheHover()}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        // className={this.state.showOnHover ? "hover" : ""}
      >
        {dataToShow.map((item) => {
          let IconName = "";
          if (item.iconName === "FaEnvelopeOpenText") {
            IconName = FontAwesome[item.iconName];
          } else {
            IconName = Bootstrap[item.iconName];
          }
          console.log("item", item);
          return (
            <div className="card">
              <div className="cardText">
                <strong>{item.count}</strong>
                <p>{item.name}</p>
              </div>
              <div className="cardIcon">
                {" "}
                <IconName />
              </div>
            </div>
          );
        })}
      </div>
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
        <div
          style={{
            fontFamily: "system-ui",
            fontSize: "31px",
            color: "#347484",

            fontWeight: "500",
            // color: rgb(52, 116, 132);
          }}
        >
          {state.whatCountToShow}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
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
            {/* <div
                style={{
                  fontSize: "25px",
                  color: "#562ab6",
                  paddingLeft: "20px",
                }}
                className="filter"
              >
                <RiFilter2Line />
              </div> */}
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
          <div class="or-spacer-vertical left">
            <div class="mask"></div>
          </div>
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
        <div class="stackBarGraph">
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
