import React, { Fragment } from "react";
import SpinnerImg from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={SpinnerImg}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='loading...'
    />
  </Fragment>
);

export default Spinner;
