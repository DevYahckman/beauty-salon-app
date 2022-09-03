import Form from "react-bootstrap/Form";

function Select({ label, name, error, ...rest }) {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <select {...rest} name={name} id={name} className="form-control">
        <option>--Plese Choose The service you want--</option>
        <option>Braiding</option>
        <option>Make up </option>
        <option>Hair care </option>
        {/* https://restcountries.com/v3.1/all  */}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Select;
