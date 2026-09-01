import styled from 'styled-components'
import Texture from '../../assets/texture.svg'
import Background from '../../assets/background.svg'

export const Container = styled.section`
width: 100%;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)  
    ),
     url('${Background}');              
    min-height: 100vh;
    
background-position: center;
background-size:cover;
`
export const Banner = styled.div`
background:url('${Texture}') no-repeat; 
background-color: ${(props) => props.theme.mainBlack} ;
background-size:cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 11.25rem;

position: relative;

img{
height: 8.125rem;
}



`

export const Title = styled.h1`
font-size: 2rem;
font-weight: 800;
padding-bottom:0.75rem;
color:${(props) => props.theme.green};
text-align: center;
position: relative;


&::after{
    position:absolute;
    left: calc(50% - 28px);
    bottom: 0;
    content: '';
    width: 3.5rem;
    height: 0.3125rem;
    background-color: ${(props) => props.theme.green};
}
`
export const Content = styled.div`

display:grid;
grid-template-columns: 1fr 30%;
width: 100%;
gap: 1.5rem;
max-width: 50rem;
padding: 2.5rem;
margin: 0 auto;

`

