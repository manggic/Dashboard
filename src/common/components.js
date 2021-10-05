import { getIcon } from "./function";
import loginSvg from "images/login.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import "./style.css";
const card = (dataToShow) => {
  console.log("data", dataToShow);
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
        let IconName = getIcon(item.iconName);

        return (
          <div className="card">
            <div className="cardText">
              <strong>{item.count}</strong>
              <p>{item.name}</p>
            </div>
            <div className="cardIcon">
              <IconName />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const verticalLineseperator = () => {
  return (
    <div class="or-spacer-vertical left">
      <div class="mask"></div>
    </div>
  );
};

const LogoutSection = () => {
  const history = useHistory();
  const Logout = () => {
    history().push("/");
    return <div>hello</div>;
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => history.push("/")}>Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="logoutSection">
      <div className="userIcon">
        <FaUserCircle />
      </div>

      <div className="logoutDropdown">
        <Dropdown overlay={menu}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            style={{ color: "black" }}
          >
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export { card, verticalLineseperator, LogoutSection };
