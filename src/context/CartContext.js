import React from "react"

const CartContext = React.createContext();
const {Provider} = CartContext

const CartProvider = ({children}) => {
  const [cart, setCart] = React.useState([])
  // agrega
  const addToCart = (item, count) => {
    if(isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id) {
          cartItem.quantity++
        }
        return cartItem
      })
      setCart(newCart)
    }
    else {
      setCart([...cart, {...item, quantity: +count}])
    }
  }
  console.log(cart)

  // quita
  const removeFromCart = (id) => {
    if(isInCart(id)) {      
      const newCart = cart.filter(item => item.id!==id) 
      setCart(newCart)
  }
  }


  // borar todo
  const deleteAll = () => {
    setCart([])
  }
  // si hay elementos en el carrito
  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }


  return (
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      cart,
    }}>{children}</Provider>
  )
}

export {CartContext, CartProvider}