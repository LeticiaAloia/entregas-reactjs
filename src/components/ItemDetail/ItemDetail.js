import React from "react"
import {Card} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom'


export default function ItemDetail ({item}) {

  const navigate = useNavigate()
    
  // Definimos variables del context
  const { addToCart, isInCart, removeFromCart } = React.useContext(CartContext);
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
          <button onClick={()=> navigate(`/cart`)}>Ir al carrito</button>
        ) : (
          <ItemCount
            onSubmit={() => addToCart(item, count)}
            count={count}
            setCount={setCount}
            stock={item.stock}
          />
        )}
        {/* Agrego un botón de quitar aquí para ver cómo funciona */}
        {isInCart(item.id) ? <button onClick={()=> removeFromCart(item.id)}>Eliminar</button>: ''}
      </Card.Body>
    </Card>
  );
}