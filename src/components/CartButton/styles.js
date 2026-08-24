import styled from "styled-components";


export const ContainerButton = styled.button`
width: 100%;
height: 3.25rem;
border: 0;
border-radius:0.5rem;
background-color:  ${(props) => props.theme.purple};
font-family: "Road Rage", sans-serif;
font-weight: 600;
font-size:1.875rem;
color:  ${(props) => props.theme.white};

&:hover {
    background-color:  ${(props) => props.theme.secondDarkPurple};
 
border-radius: 0.5rem;

}
`