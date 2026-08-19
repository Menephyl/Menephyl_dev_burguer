import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  
  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      "title title"
      "items items-price"
      "delivery-tax delivery-tax-price";
      
    .title {
      grid-area: title;
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 500;
    }
    
    .items {
      grid-area: items;
    }
    
    .items-price {
      grid-area: items-price;
    }
    
    .delivery-tax {
      grid-area: delivery-tax;
    }
    
    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    margin-top: 50px;
  }
`;
