import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { searchItem } from "store/actions";
import { secondaryColor, thirdColor } from "utils/variables";
import backgroundImg from "img/background.jpg";

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 95vw;
  height: 100vh;
  padding: 100px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

const InputSearch = styled.input`
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 300;
  border: none;
  border-bottom: 2px solid ${secondaryColor};
`;

const InputLabel = styled.label`
  display: block;
  margin-top: 20px;
  color: ${thirdColor};
  font-size: 36px;
  font-weight: 300;
`;

const SearchedBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 70%;
  margin-top: 100px;
  overflow-y: scroll;
`;

const SearchedItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  color: #000;
  text-decoration: none;
`;

const SearchedImg = styled.img`
  width: 200px;
`;

const SearchedName = styled.h2`
  font-size: 70px;
  text-transform: uppercase;
  font-weight: 300;
`;

class SearchPage extends React.Component {
  state = {
    inputValue: "",
  };

  handleChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  render() {
    const { searchItem, searchingItem } = this.props;
    return (
      <Wrapper>
        <InputSearch
          id="search"
          onChange={(e) => {
            this.handleChangeInput(e);
            searchItem(this.state.inputValue);
          }}
          value={this.state.inputValue}
        />
        <InputLabel htmlFor="search">
          Type product that you are looking for
        </InputLabel>
        <SearchedBox>
          {searchingItem.map((item) => (
            <SearchedItem
              key={item.id}
              as={Link}
              to={`/${item.category}/${item.id}`}
            >
              <SearchedImg src={item.imgSrc} />
              <SearchedName>{item.name}</SearchedName>
            </SearchedItem>
          ))}
        </SearchedBox>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { searchingItem } = state;
  return {
    searchingItem,
  };
};

const mapDispatchToProps = (dispatch) => ({
  searchItem: (inputValue) => dispatch(searchItem(inputValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
