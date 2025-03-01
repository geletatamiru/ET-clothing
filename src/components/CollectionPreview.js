import CollectionItem from "./CollectionItem";
import "./CollectionPreview.css";
const CollectionPreview = ({title,items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items.filter((item, idx) => idx < 4).map(({id, ...itemProps}) => {
            return <CollectionItem key={id} {...itemProps}/>
          })
          
     }
      </div>
    </div>
  )
}
export default CollectionPreview;