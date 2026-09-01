import { Container } from './styles'

export function Footer() {
    const yearDate = new Date().getFullYear();
    return (
        <Container>
            <p>Gostou?  <a href="https://www.instagram.com/yan_menephyl_works/" target="_blank">Clique aqui!</a></p> b
            <p>Desenvolvido por <a href="https://yandev-nine.vercel.app/" target="_blank">Yan Menephyl Works</a> -  {yearDate} - Todos os direitos reservados{' '}</p>
        </Container>
    )
}