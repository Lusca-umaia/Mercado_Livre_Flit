import Input from "../../Atoms/Input/Input";
import Search from '../../assets/lupa.png'
import './style.scss'

const InputEffect: React.FC = () => {
    return (
        <div className="groupInput">
            <div className="inputEffect">
                <Input type={'text'} placeholder={'Pesquise o produto desejado...'} />
                <hr />
                <button>
                    <img
                        src={Search}
                    />
                </button>
            </div>
        </div>
    )
}

export default InputEffect