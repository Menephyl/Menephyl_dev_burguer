import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme.white};
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    * {
        color: ${(props) => props.theme.secondBlack};
        font-weight: 500;
    }
    
    .container-top{
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas:
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price';

        .title{
            grid-area: title;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1.25rem;
            background-color: ${(props) => props.theme.secondBlack};
            color: ${(props) => props.theme.white};
            padding: 1rem;
            text-align: center;
            border-radius: 1.25rem 1.25rem 0 0;
        }
        .items{
            grid-area: items;
            padding-left: 1.25rem;
        }
        .items-price{
            grid-area: items-price;
            padding-right: 1.25rem;
        }
        .delivery-tax{
            grid-area: delivery-tax;
            padding-left: 1.25rem;
        }
        .delivery-tax-price{
            grid-area: delivery-tax-price;
            padding-right: 1.25rem;
        }
    }

    .container-bottom{
        display: flex;
        justify-content: space-between;
        font-size: 1.25rem;
        font-weight: 700;
        margin-top: 1.5rem;
        padding:1.25rem;

        *{
        font-weight: 700;
        }

    }

`;
