import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CollectionItem from "../components/CollectionItem";
import "./CollectionPage.css";
export default function CollectionPage() {
  const {collectionId} = useParams();
  const collection = useSelector(state => state.shop.collections[collectionId] );
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}
