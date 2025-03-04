import React,{useState} from "react";
import MenuItem from "./MenuItem";
import hats from '../images/hats.png';
import jackets from '../images/jackets.png';
import men from '../images/men.png';
import sneakers from '../images/sneakers.png';
import womens from '../images/womens.png';
import "./Directory.css";
const Directory = () => {
  let arr = [
    {
      title: 'hats',
      imageUrl: hats,
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: jackets,
      id: 2,
      linkUrl: ''
    },
    {
      title: 'sneakers',
      imageUrl: sneakers,
      id: 3,
      linkUrl: ''
    },
    {
      title: 'womens',
      imageUrl: womens,
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'mens',
      imageUrl: men,
      size: 'large',
      id: 5,
      linkUrl: ''
    }
  ]
  const [sections,setSections] = useState(arr);
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