interface Iprops {
    type: string
    placeholder?: string
    name?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<Iprops> = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.handleChange} required />
    )
}

export default Input