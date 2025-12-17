import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'


import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, } from "./styles"

import logo from "../../assets/Logo 1.svg"
import { Button } from "../../components/Button"
export default function Login() {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    }).required()


    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
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
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                    </InputContainer>
                    {/* <Link>Esqueci minha senha</Link> */}
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <a href="#">Clique aqui!</a></p>
            </RightContainer>
        </Container>
    )
}