
import Select from 'react-select'
import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 5rem;
    padding: 0.6rem;
    border-radius: 50%;
`;

export const SelectStatus = styled(Select)`
    width: 15rem;
    margin: 0 auto;
`;
export const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.8rem 0;
    gap: 3rem;
`;

export const FilterOption = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => (props.$isActiveStatus ? props.theme.purple : props.theme.darkGray)};
    border-bottom: ${(props) => (props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none')};
    font-size: 1.1rem;
    line-height: 1.1rem;
    padding-bottom: 0.3rem;
`;

