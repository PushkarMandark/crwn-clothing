import React from "react";
import CollectionItem from "../collectionItem/CollectionItem.component";
import "./preview.style.scss";

function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, index) => index < 4)
          .map(({ id, ...otherprops }) => (
            <CollectionItem key={id} {...otherprops} />
            // <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
