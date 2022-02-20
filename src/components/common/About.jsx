/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

const About = ({ studentName }) => {
  return (
    <Fragment>
      <div className="card text-center">
        <div className="card-header">
          پروژه دوره{" "}
          <span style={{ fontFamily: "Pacifico", fontSize: "15px" }}>
            React JS
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">دانشجو : {studentName}</p>
          <a
            href="https://github.com/reza-alaedini"
            className="btn btn-primary"
          >
            صفحه گیت هاب من
          </a>
        </div>
        <div className="card-footer text-muted">
          &copy; All rights reserved &copy;
        </div>
      </div>
    </Fragment>
  );
};

export default About;
