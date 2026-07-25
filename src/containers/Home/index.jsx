import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";
import { Banner, Container } from "./styles";
import { useUser } from '../../hooks/UserContext'

function Home() {
    console.log(useUser)
    return (
        <main>
            <Banner>
                <h1>Seja <br />
                    bem vindo(a)!</h1>
            </Banner>
            <Container>

                <CategoriesCarousel />
                <OffersCarousel />


            </Container>
        </main>
    )
}

export default Home;