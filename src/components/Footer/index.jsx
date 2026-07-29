import { Container } from './styles'

export function Footer() {
    const yearDate = new Date().getFullYear();
    return (
        <Container>
            <p>Você precisa de um semelhante e sabe disso! Entre em contato com <a href="https://www.instagram.com/yan_menephyl_works/">o Desenvolvedor!</a></p>
            <p>Desenvolvido por <a href="https://yandev-nine.vercel.app/">Yan Menephyl Works</a> -  {yearDate} - Todos os direitos reservados</p>
        </Container>
    )
}