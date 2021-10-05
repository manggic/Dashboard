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
export {
  cardTodayData,
  cardTotalData,
  dataSource,
  columns,
  TodayData,
  TotalData,
};
