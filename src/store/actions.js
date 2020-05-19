export const openMenu = () => {
  return {
    type: "OPEN_MENU",
    payload: {},
  };
};

export const closeMenu = () => {
  return {
    type: "CLOSE_MENU",
    payload: {},
  };
};

export const searchItem = (inputValue) => {
  return {
    type: "SEARCH_ITEM",
    payload: {
      inputValue,
    },
  };
};

export const addToCart = (e, addingItem, amountValue) => {
  e.preventDefault();
  return {
    type: "ADD_TO_CART",
    payload: {
      addingItem,
      amountValue,
    },
  };
};

export const deleteFromCart = (itemId) => {
  return {
    type: "DELETE_FROM_CART",
    payload: {
      itemId,
    },
  };
};
