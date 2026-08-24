import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color:  ${(props) => props.theme.black};

    img{
        width: 60%;
        margin: 2.5rem 0;
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.4rem;
    text-decoration: none;
    color:${(props) => props.theme.white} ;
    background-color: ${(props) =>
        props.$isActive ? props.theme.purple : 'transparent'};

    &:hover{
        background-color: ${(props) => props.theme.purple};
    }
`;

export const Footer = styled.div`
    width: 100%;
    margin-top: auto;
`;
