import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import AddNewTask from "../components/Task/AddNewTask";
import Todos from "../components/Task/Todos";
import About from "../components/common/About";
import Nav from "../components/common/Nav";

const App = () => {
  return (
    <Fragment>
      <Nav />
      <div className="d-flex justify-content-center container">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/about" element={<About studentName="رضا علاالدینی"/>} />
            </Routes>
            {/* <Todos />
            <About /> */}
          </div>
        </div>
      </div>
      <AddNewTask />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
