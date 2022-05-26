// Link
import { useNavigate } from 'react-router-dom'
// Componentes que importo de Bootstrap.
import {Button, Card} from 'react-bootstrap'

// Componente funcional con item como parámetro.
const Item = ({item}) => {

    const navigate = useNavigate()
    
    return(
    <div>
        {/* Card de Bootstrap. Inserto las propiedades de los objetos de mi array de productos como props.  */}
        <Card style={{ width: '18rem', color:'black'}} onClick={()=> navigate(`/product/${item.id}`)}>
        <Card.Img variant="top" src={item.image} alt={item.name} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            ${item.price}
            </Card.Text>
            <Button>Ver más</Button>
        </Card.Body>
        </Card>
    </div>
    
)
}

export default Item