import React from "react"
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

export default function CartIcon () {
    const navigate = useNavigate()

    const iconStyle = {
        color: "black",
    }

    const { cart } = React.useContext(CartContext);
    return (
        <div>
            {/* Imagen en carpeta "images", dentro de "public". */}
            <img src="/images/basket_icon.png" alt="Basket widget" onClick={()=> navigate(`/cart`)}/>
            <span className={iconStyle}>{cart.lenght}</span>    
        </div>
    );
}