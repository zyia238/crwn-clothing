import { createContext, useState, useEffect , useReducer } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};


export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const defaultState = {
  isCartOpen:false,
  cartItems:[],
  cartCount:0,
  cartTotal:0
}

const getNewCartCount = (cartItems) => {
  return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity , 0
    );
}

const getNewCartTotal = (cartItems) => {
  return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
}

const cartReducer = (state,action) => {
  const {type,payload} = action 
  let cartItems 
  switch(type){
    case 'TOGGLE_CART_VISIBILITY':
      return {
        ...state,
        isCartOpen:!state.isCartOpen
      }
    case 'ADD_TO_CART':
      cartItems = addCartItem(state.cartItems,payload)
      return {
        ...state,
        cartItems,
        cartCount:getNewCartCount(cartItems),
        cartTotal:getNewCartTotal(cartItems)
      }
    case 'CLEAR_ITEM':
      cartItems = removeCartItem(state.cartItems,payload)
      return {
        ...state,
        cartItems,
        cartCount:getNewCartCount(cartItems),
        cartTotal:getNewCartTotal(cartItems)
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems,
        cartCount:0,
        cartTotal:0
      }
  }
}

export const CartProvider = ({ children }) => {
  const [state,dispatch] = useReducer(cartReducer,defaultState)

  const value = {
    state,
    dispatch
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};