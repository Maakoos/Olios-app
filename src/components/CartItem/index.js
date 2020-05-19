import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteFromCart } from "store/actions";

const Tr = styled.tr``;

const Td = styled.td`
  width: 200px;
  text-align: center;
`;

const ProductImg = styled.img`
  width: 200px;
`;

const ProductName = styled.p`
  font-size: 20px;
  text-transform: uppercase;
`;

const ProductQuantity = styled.span``;

const ProductCost = styled.span``;

const DeleteButton = styled.button`
  margin-left: 10px;
  background: transparent;
  color: #d3455b;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;

const DeleteIcon = styled.span``;

class CartItem extends React.Component {
  render() {
    const { key, id, img, name, price, amount, deleteFromCart } = this.props;
    return (
      <Tr key={key}>
        <Td>
          <ProductImg src={img} />
        </Td>
        <Td>
          <ProductName>{name}</ProductName>
        </Td>
        <Td>
          <ProductQuantity>{amount}</ProductQuantity>
        </Td>
        <Td>
          <ProductCost>
            $ {price}
            <DeleteButton onClick={(itemId) => deleteFromCart((itemId = id))}>
              <DeleteIcon className="fas fa-times-circle"></DeleteIcon>
            </DeleteButton>
          </ProductCost>
        </Td>
      </Tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteFromCart: (itemId) => dispatch(deleteFromCart(itemId)),
});

export default connect(null, mapDispatchToProps)(CartItem);
