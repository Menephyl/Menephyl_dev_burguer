
import { Container, Navigation, HeaderLink, Options, Profile, LinkContainer, Content } from "./styles"

import { UserCircle, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
    return (
        <Container>
            <Content>

                <Navigation>
                    <div>
                        <HeaderLink>Home</HeaderLink>
                        <HeaderLink>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Options>
                    <Profile>
                        <UserCircle color='#fff' size={24} />
                        <div>
                            <p>
                                Olá , <span></span>
                            </p>
                            <Link>Sair</Link>
                        </div>
                    </Profile>
                </Options>
                <LinkContainer>
                    <ShoppingCart color='#fff' size={24} />
                    <HeaderLink>Carrinho</HeaderLink>
                </LinkContainer>
            </Content>

        </Container>
    )
}