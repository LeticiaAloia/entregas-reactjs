import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Header from "../../components/Header/Header";

export default function Home () {
    return (
        <div>
            <Header />
            <h1>Bienvenido a nuestro market</h1>
            <p>Encontrá todos los productos orgánicos que buscás</p>
            <ItemListContainer title="Nuestros productos" />
        </div>
    );
}