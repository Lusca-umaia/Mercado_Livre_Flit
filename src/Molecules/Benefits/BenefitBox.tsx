interface Iprops {
    topic: string;
    subTopic: string;
}

const BenefitBox: React.FC<Iprops> = (props) => {
    return (
        <div>
            <h2>{props.topic}</h2>
            <p>{props.subTopic}</p>
        </div>
    )
}

export default BenefitBox