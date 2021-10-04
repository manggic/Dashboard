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
import "../styles/Department.css";
import { DatePicker, Space } from "antd";
import { Table } from "antd";
import { DownloadOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";
import * as Bootstrap from "react-icons/bs";
import * as FontAwesome from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
const { RangePicker } = DatePicker;

const dataSource = [
  {
    key: "1",
    Department: "Development",
    Open: 420,
    Closed: 651,
    Reopen: 659,
    Total: 1753,
  },
  {
    key: "2",
    Department: "DevOps",
    Open: 420,
    Closed: 622,
    Reopen: 511,
    Total: 1555,
  },
  {
    key: "3",
    Department: "Test team",
    Open: 421,
    Closed: 655,
    Reopen: 255,
    Total: 1234,
  },
  {
    key: "4",
    Department: "Support",
    Open: 232,
    Closed: 555,
    Reopen: 355,
    Total: 1024,
  },
  {
    key: "5",
    Department: "Sales",
    Open: 345,
    Closed: 214,
    Reopen: 513,
    Total: 1011,
  },
];

const columns = [
  {
    title: "Department",
    dataIndex: "Department",
    key: "Department",
  },
  {
    title: "Open",
    dataIndex: "Open",
    key: "Open",
  },
  {
    title: "Closed",
    dataIndex: "Closed",
    key: "Closed",
  },
  {
    title: "Reopen",
    dataIndex: "Reopen",
    key: "Reopen",
  },
  {
    title: "Total",
    dataIndex: "Total",
    key: "Total",
  },
];

const TodayData = [
  {
    name: "Sales",
    open: 10,
    closed: 14,
    reopen: 20,
    amt: 45,
  },
  {
    name: "Development",
    open: 11,
    closed: 13,
    reopen: 15,
    amt: 40,
  },
  {
    name: "DevOps",
    open: 20,
    closed: 38,
    reopen: 5,
    amt: 60,
  },
  {
    name: "Test Team",
    open: 27,
    closed: 19,
    reopen: 13,
    amt: 55,
  },

  {
    name: "Support",
    open: 19,
    closed: 23,
    reopen: 45,
    amt: 90,
  },
];
const TotalData = [
  {
    name: "Sales",
    open: 100,
    closed: 200,
    reopen: 400,
    amt: 700,
  },
  {
    name: "Development",
    open: 300,
    closed: 200,
    reopen: 400,
    amt: 900,
  },
  {
    name: "DevOps",
    open: 150,
    closed: 350,
    reopen: 450,
    amt: 950,
  },
  {
    name: "Test Team",
    open: 278,
    closed: 390,
    reopen: 370,
    amt: 900,
  },

  {
    name: "Support",
    open: 349,
    closed: 430,
    reopen: 545,
    amt: 1123,
  },
];

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
function Department() {
  const [state, setstate] = useState({
    whatCountToShow: "Total Count",
    cardData: cardTotalData,
    toggleValue: "Total",
  });

  // const [whatCountToShow, setWhatCountToShow] = useState("Total Count");
  // const [cardData, setCardData] = useState(cardTotalData);
  // const [isToggle, setIsToggle] = useState(false);
  // const [toggleValue, setToggleValue] = useState("Total");

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

  const Listing = () => {
    return (
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    );
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
    <div>
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
            fontWeight: "500",
            color: "rgb(52, 116, 132)",
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
        {/* <div
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
              </div> */}
      </div>

      <div className="cardBlock">{card(state.cardData)}</div>

      <div className="graphBlock">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="lineGraph">
            <div className="lineGraphHeader">
              <div className="heading">Statistics</div>
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
  );
}

export default Department;
