import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { api } from '../../../services/api';
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
    category: yup.object().required('Selecione uma categoria'),
    offer: yup.boolean(),
    file: yup
        .mixed()
        .test('required', 'Escolha uma imagem do produto para continuar!', (value) => {
            return value && value.length > 0;
        })
        .test('fileSize', 'A imagem do produto deve ter menos de 3MB', (value) => {
            return value && value.length > 0 && value[0].size <= 3000000
        })
        .test('type', 'Imagem deve ser tipo png, jpeg, jpg', (value) => {
            return (
                value &&
                value.length > 0 && (value[0].type === 'image/png' ||
                    value[0].type === 'image/jpeg' ||
                    value[0].type === 'image/jpg')
            )
        })
})

export function NewProduct() {
    const [fileName, setFilename] = useState(null);
    const [categories, setCategories] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')
            setCategories(data)

        }
        loadCategories()
    }, [])

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),

    })

    const onSubmit = async (data) => {
        const productFormData = new FormData()

        productFormData.append('name', data.name);
        productFormData.append('price', data.price);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando produto...',
            success: 'Produto adicionado com sucesso! ✔',
            error: 'Erro ao adicionar produto! ❌',
        })
        setTimeout(() => {
            navigate('/admin/produtos')
        }, 2000)
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input type="text" {...register('name')} />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    </InputGroup>
                    <InputGroup>
                        <Label>Preço</Label>
                        <Input type="number" {...register('price')} />
                        <ErrorMessage>{errors.price?.message}</ErrorMessage>
                    </InputGroup>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input type="text" {...register('name')} />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    </InputGroup>
                    <InputGroup>
                        <LabelUpload>
                            <Image />
                            <Input type="file"{...register('file')}
                                accept="image/png,image/jpeg,image/jpg,image/png" onChange={(value) => {
                                    setFileName(value.target.files[0]?.name)
                                    register('file').
                                        onChange(value)
                                }}
                            />
                            {fileName || 'Upload do Produto'}

                        </LabelUpload>
                        <ErrorMessage>
                            {errors.file?.message}
                        </ErrorMessage>
                        <Label>Categoria</Label>
                        <Controller
                            name='category'
                            control={control}
                            render={({ field }) => (
                                <Select {
                                    ...field}
                                    options={categories}
                                    getOptionLabel={(categories) => categories.name}
                                    getOptionValue={(categories) => categories.id}
                                    placeholder="Selecione uma categoria"
                                    menuPortalTarget={document.body}
                                />
                            )}
                        />
                        <ErrorMessage>{errors.category?.message}</ErrorMessage>
                    </InputGroup>
                    <InputGroup>
                        <ContainerCheckbox>
                            <input type='checkbox' {...register('offer')} />
                            <label>Este produto está em oferta?</label>
                        </ContainerCheckbox>
                    </InputGroup>
                    <SubmitButton type='submit'>Adicionar Produto</SubmitButton>

                </Form>
            </Container>
        </>
    )

}