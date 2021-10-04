import React, { useState } from "react";
import "../styles/NavBar.css";

import * as Bootstrap from "react-icons/bs";
import * as FontAwesome from "react-icons/fa";
import * as AntDesign from "react-icons/ai";
import * as Feather from "react-icons/fi";
import * as MaterialDesign from "react-icons/md";
import { useHistory } from "react-router-dom";

let menus = [
  { iconName: "AiOutlineDashboard", menuName: "Dashboard" },
  { iconName: "BsFillGridFill", menuName: "Department " },
  // { iconName: "BsFillHandThumbsUpFill", menuName: "Team" },
  // { iconName: "BsFillGeoFill", menuName: "Lecture" },
  // { iconName: "BsFillGearFill", menuName: "Settings" },
];

function NavBar() {
  const [showOnHover, setShowOnHover] = useState(false);
  const history = useHistory();
  const changeTheHover = () => {
    setShowOnHover(true);
  };

  const onMenuClick = (menuName) => {
    console.log("logggggggg");
    if (menuName === "Dashboard") {
      console.log("dashboard");
      history.push({
        pathname: "/",
      });
    } else {
      history.push({
        pathname: "/department",
      });
    }
  };

  const Menu = (menu) => {
    console.log("menu", menu);
    let IconName = "";
    switch (menu.iconName.slice(0, 2)) {
      case "Fa":
        IconName = FontAwesome[menu.iconName];
        break;
      case "Ai":
        IconName = AntDesign[menu.iconName];
        break;
      case "Bs":
        IconName = Bootstrap[menu.iconName];
        break;
      case "Fi":
        IconName = Feather[menu.iconName];
        break;
      case "Md":
        IconName = MaterialDesign[menu.iconName];
        break;

      default:
        break;
    }

    console.log("iconName", IconName);
    return (
      <div className="menu" key={menu.menuName}>
        <div className="menu-icon">
          <IconName />
        </div>
        <div
          className={`menu-name ${showOnHover ? "hover" : ""}`}
          onMouseEnter={() => changeTheHover()}
          onClick={() => onMenuClick(menu.menuName)}
        >
          {menu.menuName}
        </div>
      </div>
    );
  };

  return (
    <div className="nav">
      {/* <div className="nav-header">Menus</div> */}
      <div className="nav-body">
        {menus.map((menu) => {
          return Menu(menu);
        })}
      </div>
    </div>
  );
}

export default NavBar;
