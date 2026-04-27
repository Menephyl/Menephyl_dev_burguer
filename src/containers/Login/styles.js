import styled from "styled-components";
import BackgroundLogin from "../../assets/background-login.svg"
import Background from "../../assets/bg-login.svg"
import { Link as ReactLink } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`


export const LeftContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
    background: url(${BackgroundLogin});
    background-size: cover;
   background-position: center;
   height: 100%;
   width: 100%;
   max-width: 50%;

img{
    width: 80%;
}
`


export const RightContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column; 

height: 100%;
   width: 100%;
   max-width: 50%;
    background: url(${Background});
    background-color: #1e1e1ee4;


p{
    color: #fff;
    font-size: 1.125rem;
    font-weight: 800;
}

a {
    color: #fff;
    text-decoration: underline;
    padding: 0.3rem;
}


`


export const Title = styled.h2`
    font-size: 2.5rem;
     font-family: "Road Rage", sans-serif;
     color: #fff;

     span{
     color: #9758a6;
     }
`


export const Form = styled.form`
 display: flex;
 flex-direction: column;
 gap: 1.25rem;
 padding: 1.25rem;
 width: 100%;
 max-width: 25rem;
`


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 0.5rem;
    padding: 0 1rem;
}
label{
    font-size: 1.125rem;
    font-weight: 600;
    color: #fff;
}
p{
    color:#cf3057;
    font-size: 0.875rem;
    line-height: 80%;
   height: 0.625rem  ;
font-weight: 600;
}
`




export const Button = styled.button`
    

`
export const Link = styled(ReactLink)`
text-decoration: none;
color: #fff;
padding: 0.3rem;
cursor: pointer;
`