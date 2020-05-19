import React from "react";
import styled from "styled-components";
import background from "img/background.jpg";
import Button from "components/Button";

const PageContainer = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 95vw;
  height: 100vh;
	background-image: url('${background}');
	background-size: cover;
  background-position: center;
  text-align: center;
`;

const MainHead = styled.h1`
  font-size: 200px;
  font-weight: 300;
  text-transform: uppercase;
`;

const MainDescription = styled.p`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 300;
  text-transform: uppercase;
`;

const BigText = styled.span`
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: #e9e9e9;
  font-size: 300px;
  text-transform: uppercase;
  font-weight: 900;
  z-index: -1;
`;

const HomePage = () => (
  <PageContainer>
    <BigText>Newest</BigText>
    <MainHead>Olios</MainHead>
    <MainDescription>Newest Furniture Shop Template</MainDescription>
    <Button>View More</Button>
  </PageContainer>
);

export default HomePage;
