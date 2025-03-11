import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

import "./Directory.css";
const Directory = () => {
  const sections = useSelector(state=> state.directory.sections);
  return (
    <div className="directory-menu">
      {
        sections.map(({id, ...sectionProps}) => {
          return <MenuItem key={id} {...sectionProps}/>
        })
      }
    </div>
  )
}
export default Directory;