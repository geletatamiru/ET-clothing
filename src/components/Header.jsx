import { signOut, auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropDown from "./CartDropDown";
import logo from '../images/logo-img/crown.svg'
import "./Header.css";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const isHidden = useSelector((state) => state.cart.hidden )
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate("/signin"); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out: ", error); // Handle any error
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img  src={logo} className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>SHOP</Link>
        <Link className="option" to='/shop'>CONTACT</Link>
        {
          user ? (
            <div className="option" onClick={handleSignOut}>
              SIGN OUT
            </div>
          ) : ( 
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
        )}
        <CartIcon/>
      </div>
      {
        (!isHidden) && <CartDropDown />
      }
    </div>
  )
}
export default Header;