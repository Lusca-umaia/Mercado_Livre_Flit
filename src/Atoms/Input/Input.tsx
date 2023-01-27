interface Iprops {
    type: string
    id: string
    value: string | number
    placeholder?: string
    name?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Iprops> = (props) => {
    return (
        <input type={props.type} id={props.id} placeholder={props.placeholder} name={props.name} onChange={props.handleChange} value={props.value} />
    )
}

export default Input