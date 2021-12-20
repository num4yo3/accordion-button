import React, { useState } from "react";
import { Menu } from "./components/Menu";
import "./styles.css";

export const App = () => {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState("menu_inactive");

  const onClickMenu = () => {
    active || setActiveClass("menu_active");
    active && setActiveClass("menu_inactive");
    setActive(!active);
  };

  return <Menu activeClass={activeClass} onClick={onClickMenu} />;
};
