import { Container, Banner, Title } from "./styles";
// import { Container, Banner, Title, Content } from "./styles";
import Logo from '../../assets/Logo 1.svg'
import { CartItems, CartResume } from "../../components";

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo devburguer" />
            </Banner>
            <Title>
                Checkout - Pedido
            </Title>
            <CartItems />

            <CartResume />
        </Container>
    )
}