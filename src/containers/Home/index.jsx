import { OffersCarousel } from "../../components";
import { CategoriesCarousel } from "../../components";
import { Banner, Container } from "./styles";

export function Home() {

    return (
        <main>
            <Banner>
                <h1>Seja <br />
                    bem vindo(a)!</h1>
            </Banner>z
            <Container>
                <div>

                    <CategoriesCarousel />
                    <OffersCarousel />
                </div>
            </Container>
        </main>
    )
}
