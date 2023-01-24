import Category from "../../Atoms/Categories/Category"

import { Link } from 'react-router-dom'

import './List.scss'

const List: React.FC = () => {
    return (
        <ul>
            <Link to={'/'}><Category name='Produtos' /></Link>
            <Link to={'/RegisterProducts'}><Category name='Cadastrar Produtos' /></Link>
        </ul>
    )
}

export default List