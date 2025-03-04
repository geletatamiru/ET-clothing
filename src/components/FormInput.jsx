import "./FormInput.css";
const FormInput = ({handleChange,label, ...otherProps}) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps}/>
      {label && (<label>{label}</label>)} 
    </div>
  )
}
export default FormInput;