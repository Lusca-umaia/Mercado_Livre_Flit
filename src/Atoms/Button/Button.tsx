import "./styleButton.scss"

interface IButton {
    name: string
    width?: string
    handleClick?: (event: React.MouseEvent<HTMLElement>) => void
    disabled?: boolean
}

const Button: React.FC<IButton> = (props) => {
    return (
        <button onClick={props.handleClick} disabled={props.disabled} style={{ width: props.width }}> {props.name}</button >
    )
}

export default Button