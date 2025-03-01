import React,{useState} from "react";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../components/CollectionPreview";
const Shop = () => {
  const [collections,setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {
        collections.map(({id, ...otherCollectionProps}) => {
          return <CollectionPreview key={id} {...otherCollectionProps}/>
        })
      }
      
    </div>
  )
}
export default Shop;