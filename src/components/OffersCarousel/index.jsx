import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { Container, Title } from './styles'
import { CardProduct } from '../CardProduct';
import { formatPrice } from '../../utils/formatPrice';
export function OffersCarousel() {

    const [offers, setOffers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');
            console.log(data)
            const onlyOffers = data.products.filter(product => product.offer === true).map((product) => ({
                ...product, currencyValue: formatPrice(product.price), ...product

            }))
            console.log(onlyOffers)
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

            <Carousel
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

            </Carousel>
        </Container>
    )
}