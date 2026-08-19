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
height: 180px;

position: relative;

/* background-color: ${(props) => props.theme.secondWhite}; */
img{
height: 130px;
}

/* h1 {
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
} */

`

export const Title = styled.h1`
font-size: 32px;
font-weight: 800;
padding-bottom:12px;
color:${(props) => props.theme.green};;
text-align: center;
position: relative;


&::after{
    position:absolute;
    left: calc(50% - 28px);
    bottom: 0;
    content: '';
    width: 56px;
    height: 5px;
    background-color: #000000;
}
`
export const Content = styled.div`
display:grid;
grid-template-columns: 1fr 30%;
width: 100%;
gap: 40px;
max-width: 1280px;
padding: 40px;
margin: 0 auto;

`

