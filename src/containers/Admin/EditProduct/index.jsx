import { yupResolver } from '@hookform/resolvers/yup'
import { ImageIcon } from '@phosphor-icons/react/dist/ssr'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'


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
    const [fileName, setFileName] = useState(null)

    const [categories, setCategories] = useState('');

    const navigate = useNavigate();

    const { state } = useLocation(); // por algum motvo está retonando não lido. 

    const { produto } = state || {};  // desestruturação de state nao deu certo, tem algo em algum ponto que preciso verificar tudo. 
    // O export está correto (export function EditProduct).

    //O erro que você viu não é mais de exportação, mas sim da desestruturação duplicada do useLocation.

    //Corrija para usar apenas uma vez o useLocation e extrair produto de state.

    //muito estranho 

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
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),

    })
    const onSubmit = async (data) => {
        const newFormData = new FormData()

        newFormData.append('name', data.name);
        newFormData.append('price', data.price * 100);
        newFormData.append('category_id', data.category.id)
        newFormData.append('file', data.file[0])
        newFormData.append('offer', data.offer)

        await toast.promise(api.put(`/products/${produto.id}`, newFormData), {
            pending: 'Editando produto...',
            success: 'Produto editado com suceso!',
            error: 'Erro ao editar o produto',
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
                        <Input type="text"
                            {...register('name')}
                            defaultValue={produto.name}
                        />
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    </InputGroup>


                    <InputGroup>
                        <Label>Preço</Label>
                        <Input type="number"
                            {...register('price')}
                            defaultValue={produto.price / 100}
                        />
                        <ErrorMessage>{errors.price?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <LabelUpload>
                            <ImageIcon />

                            <input type="file" {...register('file')}
                                accept='image/jpeg,image/jpg,image/png'
                                onChange={(value) => {
                                    setFileName(value?.target?.files[0]?.name)
                                    register('file').onChange(value)
                                }}
                            />
                            {fileName || 'Upload do Produto'}

                        </LabelUpload>
                        <ErrorMessage>{errors.file?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <Label>Categoria</Label>
                        <Controller
                            name="category"
                            control={control}
                            defaultValue={produto.category}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={categories}
                                    getOptionLabel={(categories) => categories.name}
                                    getOptionValue={(categories) => categories.id}
                                    placeholder="Selecione uma categoria"
                                    menuPortalTarget={document.body}
                                    defaultValue={produto.category}
                                />

                            )}
                        />
                        <ErrorMessage>{errors.category?.message}</ErrorMessage>
                    </InputGroup>

                    <InputGroup>
                        <ContainerCheckbox>
                            <input type="checkbox"
                                {...register('offer')}
                                defaultChecked={produto.offer}
                            />
                            <Label>Produto em Oferta ? </Label>
                        </ContainerCheckbox>
                    </InputGroup>
                    <SubmitButton type="submit">Editar Produto </SubmitButton>
                </Form>
            </Container >
        </>
    )

}