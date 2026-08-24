import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
background-color:#1f1f1f;
background-color: ${(props) => props.theme.mainBlack}; 
width: 100%;
height: 4.5rem;
padding: 0 3.5rem;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

width: 100%;
max-width: 80rem;
margin: 0 auto;
`;

export const Navigation = styled.nav`
display: flex;
align-items: center;
justify-content: center;
height: 4.5rem;

div {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 1.25rem;
}

hr {
  height: 1.5rem;
  border: 0.15rem solid ${(props) => props.theme.darkGray}; 
 }
`;

export const HeaderLink = styled(Link)`
color: ${(props) => (props.$isActive ? (props) => props.theme.purple : (props) => props.theme.white)};
border-bottom:${(props) => (props.$isActive ? `1px solid ${(props) => props.theme.purple}` : 'none')};
text-decoration: none;
font-size: 0.8rem;
transition: color 200ms;

&:hover {
 color:${(props) => props.theme.purple}; 
}
`;

export const Options = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
font-size:13px;
`;

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
font-size: 0.8rem;

p {
  color: ${(props) => props.theme.white}; 
  line-height: 90%;
  font-weight: 300;

  span {
    font-weight: 700;
   color: ${(props) => props.theme.purple}; 
  }
}
`;

export const Logout = styled.button`
color: ${(props) => props.theme.red};
text-decoration: none;
font-weight: 700;
background-color: transparent;
border: none;

&:hover{
 color: ${(props) => props.theme.white};
}
`;

export const LinkContainer = styled.div`
display: flex;
align-items: center;
gap: 0.16rem;
`;
