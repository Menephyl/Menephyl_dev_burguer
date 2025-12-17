import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link, Button } from "./styles"
import logo from "../../assets/Logo 1.svg"

export default function Login() {
    return (
        <Container>


            <LeftContainer>
                <img src={logo} alt='logo-devburguer' />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev
                    Burguer!</span>
                    <br />
                    Acesse com seu <span> Login e senha.</span></Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    {/* <Link>Esqueci minha senha</Link> */}
                    <Button type="submit">Entrar</Button>
                </Form>
                <Link>Não possui conta? Clique aqui!</Link>
            </RightContainer>
        </Container>
    )
}