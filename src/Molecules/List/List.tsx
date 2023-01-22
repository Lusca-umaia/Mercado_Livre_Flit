import Category from "../../Atoms/Categories/Category"

import { Link } from 'react-router-dom'

import './List.scss'

const List: React.FC = () => {
    return (
        <ul>
            <Link to={'/'}><Category name='Categorias' /></Link>
            <Link to={'/'}><Category name='Ofertas do Dia' /></Link>
            <Link to={'/'}><Category name='Histórico' /></Link>
            <Link to={'/'}><Category name='Moda' /></Link>
        </ul>
    )
}

export default List