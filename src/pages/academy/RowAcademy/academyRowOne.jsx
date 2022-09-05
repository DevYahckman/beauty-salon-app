import React from "react";
import "./row.css";
import RowA from "./rowA";
function AcademyRowOne(props) {
  return (
    <div className="row academic__rowOne">
      <div className="col-sm-5">
        {" "}
        <RowA />{" "}
      </div>
      <div className="col-sm-5 academy__rowB"></div>
    </div>
  );
}

export default AcademyRowOne;
