import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { Banner, Container, Content } from "./styles";

function Home() {
    return (
        <main>
            <Banner>
                <h1>Seja <br />
                    bem vindo(a)!</h1>
            </Banner>
            <Container>
                <Content>
                    <CategoriesCarousel />
                    <OffersCarousel />

                </Content>
            </Container>
        </main>
    )
}

export default Home;