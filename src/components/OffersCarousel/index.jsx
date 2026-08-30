import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { api } from "../../services/api.js";
import { Container, Title } from './styles.js'
import { CardProduct } from '../../components';
import { formatPrice } from '../../utils/formatPrice.js';

export function OffersCarousel() {

    const [offers, setOffers] = useState([]);


    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            const onlyOffers = data.products.filter(product => product.offer === true).map((product) => ({
                ...product, currencyValue: formatPrice(product.price), ...product

            }))
            setOffers(onlyOffers);
        }
        loadProducts();

    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000, min: 3000
            },
            items: 4
        },
        desktop: {
            breakpoint: {
                max: 3000, min: 1200
            },
            items: 4
        },
        tablet: {
            breakpoint: {
                max: 1200, min: 690
            },
            items: 3
        },
        mobile: {
            breakpoint: {
                max: 690, min: 0
            },
            items: 2,
        },

    }
    return (
        // autoPlaySpeed={2000}
        <Container>
            <Title>Ofertas do Dia</Title>

            <Carousel.default
                responsive={responsive}
                infinite={true}
                partialVisible={false}
                autoPlay={false}
            // autoPlaySpeed={2000}
            // keyBoardControl={true}
            // itemClass='carousel-item'
            >
                {offers.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}

            </Carousel.default>
        </Container>
    )
}