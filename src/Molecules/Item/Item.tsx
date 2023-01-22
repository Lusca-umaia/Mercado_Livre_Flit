import './styleItem.scss'

export interface IpropsItem {
    image: string;
    name: string;
    marca: string;
    category: string;
    value: number
}

const Items: React.FC<IpropsItem> = (props) => {
    return (
        <div className='item'>
            <img
                src={props.image}
            />
            <h3>Nome: {props.name}</h3>
            <h3>Marca: {props.marca}</h3>
            <h3>Categoria: {props.category}</h3>
            <h3>Preço: R${props.value}</h3>
        </div>
    )
}

export default Items