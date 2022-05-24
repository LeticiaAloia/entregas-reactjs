import React from "react"
// import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
// import CartContext from "../../context/CartContext"


export default function ItemCount({count, setCount, stock, onSubmit}) {

  

  const onAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }


  const onDecrease = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  

  const StockButton = ({ handleOnClick, text }) => {
    return <Button onClick={() => handleOnClick()}>{text}</Button>;
  };

  const AddButton = ({handleOnSubmit}) => {
    return <Button onClick={() => handleOnSubmit()}>Añadir al carrito</Button>;
  };

  return (
    <div>
      <StockButton text="-" handleOnClick={onDecrease}/>
      <span>{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
      <AddButton handleOnSubmit={onSubmit} />
    </div>
  );
}
