import "./styleButton.scss"

interface IButton {
    name: string
    handleClick: () => void
}

const Button: React.FC<IButton> = (props) => {
    return (
        <button onClick={props.handleClick}>{props.name}</button>
    )
}

export default Button