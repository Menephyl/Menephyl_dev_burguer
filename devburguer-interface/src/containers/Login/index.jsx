import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'

import { api } from "../../services/api"
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, } from "./styles"

import logo from "../../assets/Logo 1.svg"
import { Button } from "../../components/Button"
export default function Login() {
    const schema = yup.object({
        email: yup.string()
            .email('Digite um email válido')
            .required('Campo obrigatório'),
        password: yup
            .string()
            .min(6, "A senha deve ter pelo menos 6 caracteres").required("Insire uma senha valida"),
    })
        .required()
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        const respone = await api.post('/login', {
            email: data.email,
            password: data.password,
        })
        console.log(respone)
    }
    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt='logo-devburguer' />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev
                    Burguer!</span>
                    <br />
                    Acesse com seu <span> Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
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

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <a href="#">Clique aqui!</a></p>
            </RightContainer>
        </Container>
    )
}