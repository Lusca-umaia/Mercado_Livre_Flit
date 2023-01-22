interface Iprops {
    type: string;
    placeholder: string
}

const Input: React.FC<Iprops> = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} />
    )
}

export default Input