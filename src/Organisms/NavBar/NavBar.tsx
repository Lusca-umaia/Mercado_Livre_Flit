import InputEffect from "../../Molecules/InputEffect/InputEffect"
import List from "../../Molecules/List/List"
import './styleNav.scss'

const NavBar: React.FC = () => {
    return (
        <nav>
            <InputEffect />
            <hr id="line"></hr>
            <List />
        </nav>
    )
}

export default NavBar 