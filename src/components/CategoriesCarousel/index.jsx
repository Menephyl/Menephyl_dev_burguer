import { CategoryButton, Container, ContainerItems, Title } from './styles';
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
export function CategoriesCarousel() {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/categories') // chamar as categorias do backend
            console.log(response.data) // mostrar categorias no console
            setCategories(data)
        }
        loadCategories() // chamar função
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming jcan be any, depends on you. 
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3. // opitional, default to 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // opitioal, default to 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slideToSlide: 1, // opitional, default to 1 
        },
    };


    return (
        <Container>
            <Title>Categorias</Title>
            <Carousel
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass='carousel-item'
            // autoPlay = {true}
            // autoPlaySpeed ={5000}
            >
                {categories.map((category) => (
                    <ContainerItems key={category.id}
                        imageUrl={category.url}>
                        <CategoryButton
                            onclick={() => {
                                navigate({
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                })
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    </ContainerItems>
                )
                )}
            </Carousel>
        </Container>
    )
}