import Form from "react-bootstrap/Form";

function Select({ label, name, error, ...rest }) {
  return (
    <Form.Select
      {...rest}
      name={name}
      id={name}
      aria-label="Default select example"
    >
      <option>{label}</option>
      <option value="1">Braiding</option>
      <option value="2">Twisting</option>
      <option value="3">Aiming</option>
      {error && <div className="alert alert-danger"> {error}</div>}
    </Form.Select>
  );
}

export default Select;
