// Importo mi item.
import Item from '../Item/Item'

const ItemList = ({items}) => {
    return(
        items.map((item, index) => (<Item key={item.id} item={item} />))
    );
}

export default ItemList