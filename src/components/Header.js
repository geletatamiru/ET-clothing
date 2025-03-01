import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        Logo
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>SHOP</Link>
        <Link className="option" to='/shop'>CONTACT</Link>
      </div>
    </div>
  )
}
export default Header;