import NavBar from "../Organisms/NavBar/NavBar"
import Benefits from "../Organisms/Benefits/Benefits"
import Items from "../Organisms/Items/Items"

const Home: React.FC = () => {
    return (
        <div>
            <NavBar />
            <Benefits />
            <Items />
        </div>
    )
}

export default Home