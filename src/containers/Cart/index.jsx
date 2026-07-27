import { Container } from "../Login/styles";
import Logo from '../../assets/Logo 1.svg'
export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo devburguer" />
            </Banner>
            <Title>
                Checkout - Pedido
            </Title>
            {/* <CartItems />
            <CartResume /> */}
        </Container>
    )
}