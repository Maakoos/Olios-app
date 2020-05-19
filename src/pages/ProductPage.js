import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu, addToCart } from "store/actions";
import livingRoomIcon from "img/living-room.png";
import { primaryColor, thirdColor, bgColor } from "utils/variables";
import Button from "components/Button";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 95vw;
  height: 100vh;
  display: flex;
  background-color: ${bgColor};
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const Product = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopBox = styled.div`
  padding-right: 260px;
  padding-top: 50px;
  padding-left: 50px;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 150px;
`;

const PageName = styled.h2`
  font-size: 50px;
  text-transform: uppercase;
  font-weight: 300;
`;

const Img = styled.img`
  width: 40px;
`;

const CategoryName = styled.span`
  margin-right: 20px;
  margin-left: auto;
  color: ${thirdColor};
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
`;

const ProductName = styled.p`
  color: ${primaryColor};
  font-size: 70px;
  text-transform: uppercase;
  font-weight: 300;
`;

const ProductDescription = styled.p`
  margin: 40px 0;
  color: ${thirdColor};
  font-size: 20px;
  font-weight: 400;
`;

const Cost = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "Cost";
    position: absolute;
    top: -20px;
    left: 0;
    color: #787878;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const ActualPrice = styled.span`
  margin-right: 5px;
  color: ${primaryColor};
  font-size: 25px;
  font-weight: 900;
`;

const PreviousPrice = styled.span`
  font-size: 15px;
  font-weight: 900;
  text-decoration: line-through;
`;

const AddForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Quantity = styled.input`
  width: 70px;
  margin-right: 20px;
  padding: 10px 10px;
  font-size: 20px;
  border: none;
  border-radius: 20px;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px 50px;
  background-color: #fff;
`;

const RecomendedTxt = styled.span`
  margin-right: 40px;
  color: ${thirdColor};
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`;

const RecomendedItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 250px;
  text-decoration: none;
  color: #000;
`;

const ItemImg = styled.img`
  width: 70%;
`;

const ItemName = styled.p`
  font-size: 23px;
  text-transform: uppercase;
`;

const ItemDescription = styled.p`
  color: ${thirdColor};
  font-size: 13px;
`;

class ProductPage extends React.Component {
  state = {
    inputQuantityValue: 1,
  };

  handleChangeInput = (e) => {
    if (e.target.value < 1) {
      this.setState({
        inputQuantityValue: "",
      });
    } else {
      this.setState({
        inputQuantityValue: e.target.value,
      });
    }
  };

  render() {
    const {
      activeElement,
      recomendedProducts,
      closeMenu,
      addToCart,
      productPath,
    } = this.props;
    const [item] = activeElement;
    const { inputQuantityValue } = this.state;

    return (
      <Wrapper>
        <ImgWrapper>
          <img src={item.imgSrc} alt="" />
        </ImgWrapper>
        <Product>
          <TopBox>
            <PageHeader>
              <PageName>Products</PageName>
              <CategoryName>Living Room</CategoryName>
              <Img src={livingRoomIcon} />
            </PageHeader>
            <ProductName>{item.name}</ProductName>
            <ProductDescription>{item.description}</ProductDescription>
            <Cost>
              <ActualPrice>${item.price}</ActualPrice>
              {item.previousPrice && (
                <PreviousPrice>${item.previousPrice}</PreviousPrice>
              )}
              <AddForm>
                <Quantity
                  type="number"
                  value={this.state.inputQuantityValue}
                  onChange={(e) => this.handleChangeInput(e)}
                />
                <Button
                  small
                  onClick={(e, addingItem, amountValue) =>
                    addToCart(
                      e,
                      (addingItem = item),
                      (amountValue = inputQuantityValue)
                    )
                  }
                >
                  Add To Card
                </Button>
              </AddForm>
            </Cost>
          </TopBox>
          <BottomBox>
            <RecomendedTxt>Recomended</RecomendedTxt>
            {recomendedProducts.map((item) => (
              <RecomendedItem
                as={Link}
                to={productPath + item.id}
                key={item.id}
                onClick={closeMenu}
              >
                <ItemImg src={item.imgSrc} />
                <ItemName>{item.name}</ItemName>
                <ItemDescription>{item.description}</ItemDescription>
              </RecomendedItem>
            ))}
          </BottomBox>
        </Product>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { livingRoom, office, kids, kitchen, accesories } = state;
  const { path } = ownProps.match;
  const { id } = ownProps.match.params;
  const recomendedProducts = [];

  do {
    let nowyElement = null;

    if (path === "/living-room/:id") {
      const index = Math.floor(Math.random() * livingRoom.length);
      nowyElement = livingRoom[index];
    } else if (path === "/office/:id") {
      const index = Math.floor(Math.random() * office.length);
      nowyElement = office[index];
    } else if (path === "/kids/:id") {
      const index = Math.floor(Math.random() * kids.length);
      nowyElement = kids[index];
    } else if (path === "/kitchen/:id") {
      const index = Math.floor(Math.random() * kitchen.length);
      nowyElement = kitchen[index];
    } else if (path === "/accesories/:id") {
      const index = Math.floor(Math.random() * accesories.length);
      nowyElement = accesories[index];
    }

    if (recomendedProducts.includes(nowyElement)) {
    } else {
      recomendedProducts.push(nowyElement);
    }
  } while (recomendedProducts.length < 3);

  if (path === "/living-room/:id") {
    return {
      activeElement: livingRoom.filter((item) => item.id === parseInt(id)),
      recomendedProducts,
      productPath: "/living-room/",
    };
  } else if (path === "/office/:id") {
    return {
      activeElement: office.filter((item) => item.id === parseInt(id)),
      recomendedProducts,
      productPath: "/office/",
    };
  } else if (path === "/kids/:id") {
    return {
      activeElement: kids.filter((item) => item.id === parseInt(id)),
      recomendedProducts,
      productPath: "/kids/",
    };
  } else if (path === "/kitchen/:id") {
    return {
      activeElement: kitchen.filter((item) => item.id === parseInt(id)),
      recomendedProducts,
      productPath: "/kitchen/",
    };
  } else if (path === "/accesories/:id") {
    return {
      activeElement: accesories.filter((item) => item.id === parseInt(id)),
      recomendedProducts,
      productPath: "/accesories/",
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(closeMenu()),
  addToCart: (e, addingItem, amountValue) =>
    dispatch(addToCart(e, addingItem, amountValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
