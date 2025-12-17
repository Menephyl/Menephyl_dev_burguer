import styled from "styled-components";


export const ContainerButton = styled.button`
width: 100%;
height: 3.25rem;
border: none;
border-radius:0.5rem;
background-color: #9758a6;
font-family: "Road Rage", sans-serif;
font-weight: 600;
font-size:1.875rem;
color: #fff;

&:hover {
    background-color: #6f3576;
   background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
border-radius: 5px;

}
`