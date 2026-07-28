import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container } from "./styles";

export default function Home() {

    return (
        <main>
            <Banner>
                <h1>Seja <br />
                    bem vindo(a)!</h1>
            </Banner>
            <Container>
                <div>

                    <CategoriesCarousel />
                    <OffersCarousel />
                </div>


            </Container>
        </main>
    )
}
