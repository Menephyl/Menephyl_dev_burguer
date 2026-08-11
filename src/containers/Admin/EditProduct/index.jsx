import { yupResolver } from '@hookform/resolvers/yup'
import { Image } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'
import { toast } from 'react-toastify'

import { Button } from '../../../components'
import {
    Container,
    ContainerCheckbox,
    ErrorMessage,
    Form,
    Input,
    InputGroup,
    Label,
    LabelUpload,
    Select,
    SubmitButton,
} from './styles';
const schema = yup.object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup
        .number()
        .positive()
        .required('Digite o preço do produto')
        .typeError('Digite o preço do produto'),
    category: yup.object().required('Selecione uma caategoria'),
    offer: yup.boolean(),


})

export function EditProduct() {



    const schema = yup.object({

    })
}