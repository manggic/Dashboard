import React, { useState } from "react";
import "../styles/NavBar.css";

import { useHistory } from "react-router-dom";

import { getIcon, GetRoute } from "../common/function";
import { menus } from "../common/menu";

function NavBar() {
  const [showOnHover, setShowOnHover] = useState(false);

  const history = useHistory();
  const changeTheHover = () => {
    setShowOnHover(true);
  };

  const onMenuClick = (menuName) => {
    console.log("logggggggg", menuName);

    history.push(`${menuName.toLowerCase()}`);
  };

  const Menu = (menu) => {
    console.log("menu", menu);

    let IconName = getIcon(menu.iconName);

    return (
      <div
        className="menu"
        id={menu.menuName.toLowerCase() === GetRoute().slice(1) ? "active" : ""}
        key={menu.menuName}
      >
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
