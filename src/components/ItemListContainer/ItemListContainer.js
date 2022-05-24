import React from "react"
import {Container, Row, Col} from "react-bootstrap"
// Importo componentes.
import ItemList from "../ItemList/ItemList"

// Falsa api.
import {products} from "../../data/productos"



// En la función paso la propiedad greeting como parámetro.
export default function ItemListContainer ({name, categoryId}) {

    // Use state.
    const [items, setItems] = React.useState([])
    

    React.useEffect(()=> {
       if(categoryId){
           setItems(products.filter(item => item.category_id === categoryId));
       }
       else {
           setItems(products);
       }
    }, [categoryId])

    return (
        <Container>
            <Row>
                <Col>
                <h1>{name}</h1>
                </Col>
            </Row>
            <Row>
                <ItemList items={items} />
            </Row>
        </Container>
    )
}