import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CartItem from "components/CartItem";
import Button from "components/Button";
import { primaryColor } from "utils/variables";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 95vw;
  height: 100vh;
  padding: 100px;
  font-size: 20px;
`;

const Heading = styled.h2`
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 300;
`;

const EmptyCart = styled.p`
  color: ${primaryColor};
  font-size: 20px;
  text-transform: uppercase;
`;

const BasketBox = styled.div`
  height: 90%;
  overflow-y: scroll;
`;

const Table = styled.table``;

const THead = styled.thead`
  background: rgba(0, 35, 255, 0.3);
`;

const TFoot = styled.tfoot`
  background: rgba(0, 35, 255, 0.3);
`;

const TdFooter = styled.td`
  text-align: right;
  padding-right: 80px;
`;

const ShoppingBasket = ({ shoppingCart }) => {
  let summary = null;
  shoppingCart.forEach((item) => (summary += item.price * item.amountValue));

  return (
    <Wrapper>
      <Heading>Your Cart</Heading>
      {shoppingCart.length > 0 ? (
        <BasketBox>
          <Table>
            <THead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </THead>
            <tbody>
              {shoppingCart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  img={item.imgSrc}
                  name={item.name}
                  price={item.price}
                  amount={item.amountValue}
                />
              ))}
            </tbody>
            <TFoot>
              <tr>
                <th scope="row">Summary</th>
                <TdFooter colSpan={3}>$ {summary > 0 ? summary : 0}</TdFooter>
              </tr>
            </TFoot>
          </Table>
          <Button small cart>
            go to payment
          </Button>
        </BasketBox>
      ) : (
        <EmptyCart>Your Cart is Empty</EmptyCart>
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  const { shoppingCart } = state;
  return {
    shoppingCart,
  };
};

export default connect(mapStateToProps)(ShoppingBasket);
