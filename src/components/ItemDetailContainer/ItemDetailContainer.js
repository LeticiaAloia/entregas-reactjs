import React from "react"

import {Container, Row, Col} from "react-bootstrap"

// Components
import ItemDetail from "../ItemDetail/ItemDetail"
// import ItemList from "../ItemList/ItemList"

import {products} from "../../data/productos"


export default function ItemDetailContainer ({name, productId}){

    const [item, setItem] = React.useState ({})

    React.useEffect( () => {
        setItem(products.find(item => item.id === +productId))
    },[productId])

    return(
        <Container>
            <Row>
                <Col>
                <h1>{name}</h1>
                </Col>
            </Row>
            <Row>
                <ItemDetail item={item} />
            </Row>
        </Container>
    );
}  

