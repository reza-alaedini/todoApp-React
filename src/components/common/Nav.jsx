import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
//   let location = useLocation();
//   console.log(location.pathname);
  return (
    <div className="m-3">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            // style={({ isActive }) => ({ color: isActive ? "aqua" : "red" })}  //cusomize acive status
          >
            کارهای روزمره
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            // style={({ isActive }) => ({ color: isActive ? "aqua" : "red" })}   //cusomize acive status
          >
            درباره سازنده
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
