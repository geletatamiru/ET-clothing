import React,{useState} from "react";
import MenuItem from "./MenuItem";
import "./Directory.css";
const Directory = () => {
  let arr = [
    {
      title: 'hats',
      imageUrl: 'https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 2,
      linkUrl: ''
    },
    {
      title: 'sneakers',
      imageUrl: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=600',
      id: 3,
      linkUrl: ''
    },
    {
      title: 'womens',
      imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'mens',
      imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
      size: 'large',
      id: 5,
      linkUrl: ''
    }
  ]
  const [sections,setSections] = useState(arr);
  return (
    <div className="directory-menu">
      {
        sections.map(({title, imageUrl, id, size}) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        })
      }
    </div>
  )
}
export default Directory;