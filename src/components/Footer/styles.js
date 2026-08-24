import styled from 'styled-components';

export const Container = styled.div`
height: 3rem;
background-color:${(props) => props.theme.darkPurple};
width: 100vw;
display: flex;
align-items: center;
justify-content: center;

p {
    color: ${(props) => props.theme.white};
    font-size: 0.9rem;
    font-weight: lighter;
}
`;
1