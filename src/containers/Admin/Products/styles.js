import styled from 'styled-components';

export const Container = styled.div`

`;

export const ProductImage = styled.img`
    height: 5rem;
    padding: 0.6rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.darkWhite};
`;

export const EditButton = styled.button`
    background-color: ${(props) => props.theme.darkWhite};
    height: 2rem                ;
    width: 2rem;
    border-radius: 0.4rem;
    border: none;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        font-size: 1.2rem;
        width: 1.2rem;
    }

    &:hover {
        background-color: ${(props) => props.theme.purple};

        svg{
          fill: ${(props) => props.theme.white};
         }

       
    }

`;
