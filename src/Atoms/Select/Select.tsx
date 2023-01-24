interface ISelectProps {
    array: string[]
    name: string
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<ISelectProps> = (props) => {
    return (
        <select required name={props.name} onChange={props.handleChange}>
            <option value={''}>Escolha algum valor</option>
            {props.array.map((item: string) => (
                <option value={item} >{item}</option>
            ))}
        </select>
    )
}

export default Select