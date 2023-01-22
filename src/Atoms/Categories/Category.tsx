interface Props {
    name: string
}

const Category: React.FC<Props> = (props) => {
    return (
        <li>{props.name}</li>
    )
}

export default Category