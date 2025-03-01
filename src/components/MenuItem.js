import { Link } from "react-router-dom";
import "./MenuItem.css";
const MenuItem = ({title,imageUrl,size,linkUrl}) => {
  return ( 
      <div 
        style={{backgroundImage: `url(${imageUrl})`}} 
        className={`${size} menu-item`}
      >
        <Link to={`/${linkUrl}`}>
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </Link>
    </div> 
  )
}
export default MenuItem;