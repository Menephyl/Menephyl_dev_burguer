
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Background from '../../assets/background.svg';
import BannerHamburger from '../../assets/banner-hamburger.svg';

export const Container = styled.section`
 width: 100%;
  height: 100%;
 background-color:    #f0f0f0;       // ${(props) => props.theme.secondWhite}; */


h1 {
  font-family: 'Road Rage', sans-serif;
  font-size: 80px;
  line-height: 65px;
  position: absolute;
  color:  #332925;

  right: 20%;
  top: 30%;

  span {
    display: block;
    color:  #332925;
    font-size: 20px;
    }
}

`

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;

background:url('${BannerHamburger}' ) no-repeat;
background-position: center;
width: 100%;
height:450px;
background-size:cover;
/* background-color: ${(props) => props.theme.secondWhite}; */

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

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;

`

export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color: ${(props) => (props.$isActiveCategory ? "#f79410" : "#9758a6")};
font-size: 24px;
font-weight: 500;
padding-bottom: 5px;
line-height: 20px;
border: none;
cursor: pointer;
border-bottom:${(props) => props.$isActiveCategory && '3px solid #f79410'}

/* &:hover{
  font-weight: 600;
  background-color:#f7941d;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
} */

`;

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
gap: 60px;
justify-content: center;
max-width: 1280px;
margin: 50px auto;
`
