import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { primaryColor, thirdColor } from "utils/variables";
import livingRoomIcon from "img/living-room.png";
import { closeMenu } from "store/actions";

const PageContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 95vw;
  height: 100vh;
  padding: 50px 260px 50px 100px;
  background-color: #f0f0f0;
`;

const PageName = styled.h2`
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 300;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
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

const ProductsGrid = styled.section`
  display: grid;
  max-height: 722px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  overflow-y: scroll;
  grid-auto-flow: dense;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  background-color: #fff;
  color: #000;
  text-decoration: none;

  ${({ wide }) =>
    wide &&
    css`
      grid-column: span 2;
      flex-direction: row;
      align-items: center;

      justify-content: space-around;
    `}
`;

const ItemImg = styled.img`
  width: 80%;
  align-self: center;

  ${({ wide }) =>
    wide &&
    css`
      width: 55%;
    `}
`;

const ItemTitle = styled.h3`
  margin-top: 15px;
  font-size: 35px;
  text-transform: uppercase;
  font-weight: 400;
`;

const ItemDescription = styled.p`
  margin-bottom: 10px;
  color: ${thirdColor};
  font-size: 13px;
`;

const ItemPrice = styled.span`
  color: ${primaryColor};
  font-size: 18px;
  font-weight: 900;
`;

const CategoryPage = ({ productList, productPath, closeMenu }) => (
  <PageContainer>
    <PageHeader>
      <PageName>Products</PageName>
      <CategoryName>Living Room</CategoryName>
      <Img src={livingRoomIcon} />
    </PageHeader>
    <ProductsGrid>
      {productList.map((item) => (
        <Item
          as={Link}
          to={productPath + item.id}
          key={item.id}
          wide={item.wide}
          onClick={closeMenu}
        >
          <ItemImg src={item.imgSrc} wide={item.wide} />
          <div>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemDescription>Lorem ipsum dolor sit amet</ItemDescription>
            <ItemPrice>${item.price}</ItemPrice>
          </div>
        </Item>
      ))}
    </ProductsGrid>
  </PageContainer>
);

const mapStateToProps = (state, ownProps) => {
  const { livingRoom, office, kids, kitchen, accesories } = state;
  const { path } = ownProps.match;
  if (path === "/living-room") {
    return { productList: livingRoom, productPath: "/living-room/" };
  } else if (path === "/office") {
    return { productList: office, productPath: "/office/" };
  } else if (path === "/kids") {
    return { productList: kids, productPath: "/kids/" };
  } else if (path === "/kitchen") {
    return { productList: kitchen, productPath: "/kitchen/" };
  } else if (path === "/accesories") {
    return { productList: accesories, productPath: "/accesories/" };
  }
};

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(closeMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
