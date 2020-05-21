import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "store/store";
import HomePage from "pages/HomePage";
import Navigation from "./components/Navigation";
import SideMenu from "./components/SideMenu/SideMenu";
import CategoryPage from "pages/CategoryPage";
import ProductPage from "pages/ProductPage";
import SearchPage from "pages/SearchPage";
import ShoppingBasket from "pages/ShoppingBasket";

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 10px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Lato', sans-serif;
  }
  input {
    font-family: 'Lato', sans-serif;
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {  
    opacity: 1;
  }
`;

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Provider store={store}>
          <GlobalStyle />
          <Navigation />
          <SideMenu />
          <Route path="/" component={HomePage} exact />
          <Route path="/search" component={SearchPage} />
          <Route path="/shop-basket" component={ShoppingBasket} />
          <Route path="/living-room" component={CategoryPage} exact />
          <Route path="/living-room/:id" component={ProductPage} />
          <Route path="/office" component={CategoryPage} exact />
          <Route path="/office/:id" component={ProductPage} />
          <Route path="/kids" component={CategoryPage} exact />
          <Route path="/kids/:id" component={ProductPage} />
          <Route path="/kitchen" component={CategoryPage} exact />
          <Route path="/kitchen/:id" component={ProductPage} />
          <Route path="/accesories" component={CategoryPage} exact />
          <Route path="/accesories/:id" component={ProductPage} />
        </Provider>
      </Switch>
    </HashRouter>
  );
}

export default App;
