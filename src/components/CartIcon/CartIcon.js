import React from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function CartIcon () {
    const iconStyle = {
        color: "black",
    }

    const { cart } = React.useContext(CartContext);
    return (
        <div>
            <Link to="/cart"></Link>
            {/* Imagen en carpeta "images", dentro de "public". */}
            <img src="/images/basket_icon.png" alt="Basket widget" />
            <span className={iconStyle}>{cart.lenght}</span>    
        </div>
    );
}