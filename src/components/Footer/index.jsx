import { Container } from './styles'

export function Footer() {
    const yearDate = new Date().getFullYear();
    return (
        <Container>
            <p>Faça seu Sistema/site ou IA! Entre em contato com o <a href="https://www.instagram.com/yan_menephyl_works/">Desenvolvedor!</a></p>
            <p>Desenvolvido por <a href="https://yandev-nine.vercel.app/">Yan Menephyl Works</a> -  {yearDate} - Todos os direitos reservados{' '}</p>
        </Container>
    )
}