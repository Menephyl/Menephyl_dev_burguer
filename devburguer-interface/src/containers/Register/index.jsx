import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom';
import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    InputContainer,
    Link
} from "./styles"
import { toast } from 'react-toastify';

import logo from "../../assets/Logo 1.svg"
import { Button } from "../../components/Button"



export default function Register() {
    const navigate = useNavigate();
    const schema = yup.object({
        name: yup.string()
            .required('Campo obrigatório'),
        email: yup.string()
            .email('Digite um email válido')
            .required('Campo obrigatório'),
        password: yup
            .string()
            .min(6, "A senha deve ter pelo menos 6 caracteres").required("Insire uma senha valida"),
        confirmPassword:
            yup
                .string()
                .oneOf([yup.ref("password")], "As senhas devem ser iguais")
                .required("Confirme sua senha ")

    })
        .required()

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {

        try {
            const { status } = await
                api.post('/users',
                    {
                        name: data.name,
                        email: data.email,
                        password: data.password,
                    },
                    {
                        validateStatus: () => true,
                    },
                )
            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
                toast.success("Conta criada com sucesso!")
            } else if (status === 409) {
                toast.error(" Email em uso! Faça login para continuar!")
            } else {
                throw new Error(" 😢 Erro ao criar conta")
            }
        } catch (error) {
            toast.error(" 😢 Erro ao criar conta! Tente novamente")
        }


    }

    return (

        <Container>

            <LeftContainer>

                <img src={logo} alt='logo-devburguer' />

            </LeftContainer>

            <RightContainer>
                <Title>
                    Criar Conta
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer>

                        <label>Nome</label>

                        <input type="text" {...register("name")} />

                        <p>{errors?.name?.message}</p>

                    </InputContainer>

                    <InputContainer>

                        <label>Email</label>

                        <input type="email" {...register("email")} />

                        <p>{errors?.email?.message}</p>

                    </InputContainer>

                    <InputContainer>

                        <label>Senha</label>

                        <input type="password" {...register("password")} />

                        <p>{errors?.password?.message}</p>

                    </InputContainer>

                    <InputContainer>

                        <label>Confirmar Senha</label>

                        <input type="password"  {...register("confirmPassword")} />

                        <p>{errors?.confirmPassword?.message}</p>

                    </InputContainer>

                    <Button type="submit">Criar Conta</Button>

                </Form>

                <p>Já possui conta?<Link to="/login">Clique aqui!</Link></p>

            </RightContainer>

        </Container>
    )
}