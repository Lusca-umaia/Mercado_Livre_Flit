import './StyleGroupInput.scss'

import React, { useEffect, useState } from "react"

import { useNavigate } from 'react-router-dom'

import Button from "../../Atoms/Button/Button"
import Input from "../../Atoms/Input/Input"
import Select from "../../Atoms/Select/Select"
import axios from "axios"

import { useFormik } from 'formik'

interface IpropsItem {
    image?: string;
    name?: string;
    marca?: string;
    category?: string;
    value?: number | string
}

const ValuesSelect = ['smartphone', 'Capinha', 'Carregadores', 'Notebook']

const GroupInput: React.FC = () => {
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate()

    async function EnvResult(values: IpropsItem) {
        await axios.post('https://apigenerator.dronahq.com/api/uFGnBu5W/Items', values)
    }

    const formik = useFormik({
        initialValues: {
            image: '',
            name: '',
            marca: '',
            category: '',
            value: ''
        },
        onSubmit: (values) => {
            EnvResult(values)
            navigate('/')
        },
        validate: (values) => {
            const errors: IpropsItem = {}
            let regexEspecial = /[^a-zA-Z0-9]+/g

            if (!values.name) {
                errors.name = 'Preencha este valor'
            }

            if (regexEspecial.test(values.name)) {
                errors.name = 'Não pode conter caracteres especiais'
            }

            if (!values.value) {
                errors.value = 'Preencha este valor'
            }

            if (!values.marca) {
                errors.marca = 'Preencha este valor'
            }

            if (parseInt(values.value) <= 0) {
                errors.value = 'Não pode conter caracteres especiais'
            }

            if (!values.image) {
                errors.image = 'Preencha este valor'
            }

            if (!values.category) {
                errors.category = 'Preencha este valor'
            }

            setDisabled(!errors)
            return errors
        }
    })


    return (
        <>
            <div className='alignText'>
                <h1>Cadastrar Produtos</h1>
            </div>
            <div className='boxInput'>
                <label>Nome:</label>
                <Input name='name' id='name' type={'text'} placeholder={'Iphone X...'} handleChange={formik.handleChange} value={formik.values.name} />
                <h3>{formik.errors.name}</h3>
            </div>
            <div className='boxInput'>
                <label>Marca:</label>
                <Input name='marca' id='marca' type={'text'} placeholder={'Apple...'} handleChange={formik.handleChange} value={formik.values.marca} />
                <h3>{formik.errors.marca}</h3>
            </div>
            <div className='boxInput'>
                <label>Categoria:</label>
                <Select array={ValuesSelect} name={'category'} handleChange={formik.handleChange} />
                <h3>{formik.errors.category}</h3>
            </div>
            <div className='boxInput'>
                <label>Valor:</label>
                <Input name='value' id='value' type={'number'} placeholder={'3000'} handleChange={formik.handleChange} value={formik.values.value} />
                <h3>{formik.errors.value}</h3>
            </div>
            <div className='boxInput'>
                <label>Imagem:</label>
                <Input name='image' id='image' type={'text'} placeholder={'https://...'} handleChange={formik.handleChange} value={formik.values.image} />
                <h3>{formik.errors.image}</h3>
            </div>
            <div className='boxInput'>
                <Button name={'Enviar'} disabled={disabled} handleClick={formik.handleSubmit} width={'700px'} />
            </div>
        </>
    )
}

export default GroupInput