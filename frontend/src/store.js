import {createStore , combineReducers, applyMiddleware} from "redux";
import thunk from  "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import productListReducer from "./reducer/productReducer"
import {productDetailsReducer} from './reducer/productReducer'
import {cartReducer} from './reducer/cartReducer'
const reducer=combineReducers({
    productList:productListReducer,
    productDetails : productDetailsReducer,
    cart:cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[] 
const initialState ={
    cart : {cartItems : cartItemsFromStorage},
}
const middleware = [thunk]
const store = createStore(reducer , initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
