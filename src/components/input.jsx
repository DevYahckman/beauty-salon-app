import React from "react";

function Input({label, name,placeholder, error, ...rest}) {
  return (
    <div>
      <div className="form-group">
        <label for="exampleInputEmail1">{label}</label>
        <input
         {...rest}
         name={name}
         id={name}
         className="form-control"
          
        />
        {error && <div className="alert alert-danger">{error}</div> }
      </div>
    </div>
  );
}

export default Input;
