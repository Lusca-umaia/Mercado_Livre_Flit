import './StyleGroupInput.scss'

import React, { useEffect, useState } from "react"

import { useNavigate } from 'react-router-dom'

import Button from "../../Atoms/Button/Button"
import Input from "../../Atoms/Input/Input"
import Select from "../../Atoms/Select/Select"
import axios from "axios"

interface IpropsItem {
    image?: string;
    name?: string;
    marca?: string;
    category?: string;
    value?: number
}

const ValuesSelect = ['smartphone', 'Capinha', 'Carregadores', 'Notebook']

const GroupInput: React.FC = () => {
    const [values, setValues] = useState<IpropsItem>({})
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()

    function captureValuesInput(event: React.ChangeEvent<HTMLInputElement>) {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    function captureValuesSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (values.name && values.marca && values.value && values.image && values.category) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [values])

    async function handleSubmit(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault()
        await axios.post('https://apigenerator.dronahq.com/api/uFGnBu5W/Items', values)
        navigate('/')
    }



    return (
        <>
            <div className='alignText'>
                <h1>Cadastrar Produtos</h1>
            </div>
            <div className='boxInput'>
                <label>Nome:</label>
                <Input name='name' type={'text'} placeholder={'Iphone X...'} handleChange={captureValuesInput} />
            </div>
            <div className='boxInput'>
                <label>Marca:</label>
                <Input name='marca' type={'text'} placeholder={'Apple...'} handleChange={captureValuesInput} />
            </div>
            <div className='boxInput'>
                <label>Categoria:</label>
                <Select array={ValuesSelect} name={'category'} handleChange={captureValuesSelect} />
            </div>
            <div className='boxInput'>
                <label>Valor:</label>
                <Input name='value' type={'number'} placeholder={'3000'} handleChange={captureValuesInput} />
            </div>
            <div className='boxInput'>
                <label>Imagem:</label>
                <Input name='image' type={'text'} placeholder={'https://...'} handleChange={captureValuesInput} />
            </div>
            <div className='boxInput'>
                <Button name={'Enviar'} disabled={disabled} handleClick={handleSubmit} width={'700px'} />
            </div>
        </>
    )
}

export default GroupInput