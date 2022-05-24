import React from "react"
import {Card} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

export default function ItemDetail ({item}) {
    
  // Definimos variables del context
  const { addToCart, isInCart } = React.useContext(CartContext);
  // Separamos el estado del count
  const [count, setCount] = React.useState(1)
  
  return (
    <Card>
      <Card.Img variant="top" src={item.image} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.detail}
        </Card.Text>
        <h3>$ {item.price}</h3>
        {isInCart(item.id) ? (
          <button>Ir al carrito</button>
        ) : (
          <ItemCount
            onSubmit={() => addToCart(item, count)}
            count={count}
            setCount={setCount}
            stock={item.stock}
          />
        )}
      </Card.Body>
    </Card>
  );
}