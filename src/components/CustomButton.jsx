import "./CustomButton.css";
const CustomButton = ({ children, isGoogleSignIn, inverted,  onClick, otherProps}) => {
  return (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={onClick}  {...otherProps}>
      {children}
    </button>
  );
}
export default CustomButton;