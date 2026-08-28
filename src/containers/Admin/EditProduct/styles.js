import ReactSelect from 'react-select'
import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
min-height: 100vh;

`

export const Form = styled.form`
border-radius: 1.5rem;
background-color: ${(props) => props.theme.black};
padding:2rem;
width: 100%;
max-width: 24rem;
width: 100%;
display: flex;
flex-direction: column;
gap: 0.8rem;
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

export const Input = styled.input`
width: 100%;
height: 2.6rem;
border-radius: 5px;
padding: 0 0.6rem;
border:none;

`
export const LabelUpload = styled.label`
cursor:pointer;
border:1px dashed ${(props) => props.theme.white};
border-radius:0.3rem;
padding: 0.7rem;
display: flex;
color:${(props) => props.theme.white};
margin:1.5rem 0;
>svg{
     width: 1.5rem;
        height: 1.5rem;
        fill: ${(props) => props.theme.white};//preenchimento
        margin-right: 0.4rem;
}
input{
        display: none
    }
`
export const Select = styled(ReactSelect)`


`;
export const SubmitButton = styled(Button)`
    margin-top: 2.6rem;
`;

export const ErrorMessage = styled.p`
    color:${(props) => props.theme.darkRed};
    font-size: 0.8rem;
    line-height: 80%;
    font-weight: 600;
`;

export const ContainerCheckbox = styled.div`
    display: flex;
    gap: 1.5rem;
    cursor: pointer;
    margin-top: 0.6rem;

    input{
        cursor: pointer;
    }
`