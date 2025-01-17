import React, {useState} from "react";


//sold out function similar to a favorite?
function PlantCard({id, name, image, price, onDelete}) {
  const [inStock, setInStock] = useState(true);
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)}> Out of Stock</button>
      )}
      <button className="secondary delete-button" onClick={onDelete}>Remove</button>
    </li>
  );
}

export default PlantCard;
