import Form from 'react-bootstrap/Form';

function TextArea({label, name, error, ...rest}) {
  return (
 
    <div class="form-group">
    <label htmlFor={name}>{label}</label>
    <textarea
    {...rest}
     id={name} 
     name={name} 
     class="form-control" 
     rows="3"/>
   {error && <div className="alert alert-danger">{error}</div>}
     </div>
  );
}

export default TextArea;