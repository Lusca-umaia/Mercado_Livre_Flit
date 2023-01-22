import Item from '../../Molecules/Item/Item'
import './Style.scss'
import { IpropsItem } from '../../Molecules/Item/Item'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../../Atoms/Button/Button'


const Items: React.FC = () => {
    const [DataItems, setDataItems] = useState<IpropsItem[]>([])
    const [render, SetRender] = useState<number>(0)
    async function DataApi() {
        const Reponse = await axios.get('https://apigenerator.dronahq.com/api/uFGnBu5W/Items')
        const Data: IpropsItem[] = Reponse.data
        setDataItems(Data)
    }

    function growing() {
        setDataItems(DataItems.sort((a: IpropsItem, b: IpropsItem) => a.value - b.value))
        SetRender(render + 1)
    }
    function descending() {
        setDataItems(DataItems.sort((a: IpropsItem, b: IpropsItem) => b.value - a.value))
        SetRender(render + 1)
    }

    useEffect(() => {
        DataApi()
    }, [])

    useEffect(() => {
    }, [render])

    return (
        <div>
            <div className='ItemsOrde'>
                <h2>Ordernar Produtos de acordo com seu valor:</h2>
                <div className='groupButtons'>
                    <Button
                        name={'Crescente'}
                        handleClick={() => growing()}
                    />
                    <Button
                        name={'Decrescente'}
                        handleClick={() => descending()}
                    />
                </div>
            </div>
            <div className='agroupItems'>
                {DataItems.map((item: IpropsItem) => (
                    <Item image={item.image}
                        name={item.name}
                        marca={item.marca}
                        category={item.category}
                        value={item.value}
                    />
                ))}
            </div>
        </div>
    )
}

export default Items