import React from "react";

export const Menu = (props) => {
  const { activeClass, onClick } = props;
  return (
    <ul className="menu">
      <div className="menu_title" onClick={onClick}>
        menu
      </div>
      <div className={activeClass}>
        <li className="menu_item">
          <a href="#">
            <div>first</div>
          </a>
        </li>
        <li className="menu_item">
          <a href="#">
            <div>second</div>
          </a>
        </li>
        <li className="menu_item">
          <a href="#">
            <div>third</div>
          </a>
        </li>
        <li className="menu_item">
          <a href="#">
            <div>fourth</div>
          </a>
        </li>
      </div>
    </ul>
  );
};
