import BenefitBox from "../../Molecules/Benefits/BenefitBox";
import './styleBenefits.scss'

const Benefits: React.FC = () => {
    return (
        <div className="Benefits">
            <hr id="line"/>
            <BenefitBox
                topic="Pagamento rápido e seguro"
                subTopic="Com cartão"
            />
            <BenefitBox
                topic="Até 10 parcelas sem juros"
                subTopic="Ver mais"
            />
            <BenefitBox
                topic="Parcelamento sem cartão"
                subTopic="Conheça o mercado de crédito"
            />
            <BenefitBox
                topic="Via PIX"
                subTopic="Ver mais"
            />
        </div>
    )
}

export default Benefits