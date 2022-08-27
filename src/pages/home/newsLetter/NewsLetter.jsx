import React, { useSate } from "react";
import GetIcon from "./icon";
import "./newsLeter.css";
function NewsLetter(props) {
  // const [icons, setIcons] = useState({
  //   icon: getIcon(),
  // });
  return (
    <div className="newsLetter">
      <p className="head">Our News Letter</p>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, quo.{" "}
        <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Delectus minima dolorem aspernatur voluptate iusto commodi!{" "}
      </p>

      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-5">
          <input type="text" className="form-control" />
          <button className="btn sub btn-success">Subscribe</button> <br />
          <GetIcon />
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default NewsLetter;
