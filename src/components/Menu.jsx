import React from "react";

export const Menu = (props) => {
  const { activeClass, onClick } = props;
  return (
    <ul className="menu">
      <div className="menu_title" onClick={onClick}>
        menu
      </div>
      <li className={activeClass}>
        <a href="#">
          <div>first</div>
        </a>
      </li>
      <li className={activeClass}>
        <a href="#">
          <div>second</div>
        </a>
      </li>
      <li className={activeClass}>
        <a href="#">
          <div>third</div>
        </a>
      </li>
      <li className={activeClass}>
        <a href="#">
          <div>fourth</div>
        </a>
      </li>
    </ul>
  );
};
