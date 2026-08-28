import ReactSelect from 'react-select';
import styled from "styled-components"
import { Button } from '../../../components';


export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
min-height: 100vh;

`

export const Form = styled.form`
border-radius:1.5rem;
background-color:${(props) => props.theme.black};
padding:2rem;
width: 100%;
max-width:24rem;
display:flex;
flex-direction:column;
gap:0.8rem;

`

export const InputGroup = styled.div`
display:flex;
flex-direction:column;
gap: 0.4rem;


`

export const Label = styled.label`
color:${(props) => props.theme.white};
font-size:0.8rem;

`

export const LabelUpload = styled.label`
cursor: pointer; 
border: 1px dashed ${(props) => props.theme.white};
border-radius: 5px; 
padding:0.5rem;
display:flex;
color:${(props) => props.theme.white};
margin:1.5rem 0; 

>svg{
    width: 1.5rem;
    height:1.5rem;
    fill: ${(props) => props.theme.white};
    margin-right:4px;

}
input{
    display: none;
}

`

export const Select = styled(ReactSelect)`



`

export const SubmitButton = styled(Button)`
margin-top:1.5rem;
`

export const ErrorMessage = styled.p`
color:${(props) => props.theme.darkRed};
font-size:0.7rem;
line-height: 80%;
font-weight: 600;

`
export const ContainerCheckbox = styled.div`
display:flex;
gap:0.75rem;
cursor:pointer;
margin-top:0.5rem;
label{
    cursor:pointer;
}
input{
    cursor:pointer;
}
`