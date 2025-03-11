import { useSelector } from "react-redux";
import CollectionPreview from "./CollectionPreview";
import "./CollectionsOverview.css";

export default function CollectionsOverview() {
  const collections = useSelector(state=> {
    const Collections = state.shop.collections;
    return Object.keys(Collections).map(key => Collections[key]);
  });
  return (
    <div className="collections-overview">
       {
        collections.map(({id, ...otherCollectionProps}) => {
          return <CollectionPreview key={id} {...otherCollectionProps}/>
        })
      }
    </div>
  )
} 
