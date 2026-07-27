import styled from 'styled-components'
import Texture from '../../assets/texture.svg'
import Background from '../../assets/background-image.png'
export const Container = styled.section`

width: 100vw;
height: 100%;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)  
    ), url('${Background}');
    min-height: 100%;
    
background-position: center;
background-size:cover;
background-color: #1f1f1f;


`
export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
background:url('${Texture}') no-repeat;
background-position: center;
width: 100%;
height:450px;
background-size:cover;
background-color: #1f1f1f;

/* background-color: ${(props) => props.theme.secondWhite}; */
img{
height: 130px;
}

h1 {
  font-family: 'Road Rage', sans-serif;
  font-size: 80px;
  line-height: 65px;
  position: absolute;
  color: #fff; // ${(props) => props.theme.darkWhite};
  right: 20%;
  top: 30%;

  span {
    display: block;
    color: #fff; // ${(props) => props.theme.darkWhite};
    font-size: 20px;
     }
}

`
export const Title = styled.div`
font-size: 32px;
font-weight: 800;
padding-bottom:12px;
color:#61a120;
text-align: center;

&::after{
    position:absolute;
    left: calc(50%+ - 28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
}
`

export const Content = styled.div`
display:grid;
grid-template-columns: 1fr 20%;
width: 100%;
max-width: 1280px;
gap: 40px;
padding: 40px;
margin: 0 auto;

`