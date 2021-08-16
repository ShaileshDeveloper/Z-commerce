import axios from 'axios'

export const addToCart =(id , qty) => async(dispatch , getState) => {
    const {data} = await axios.get(`/products/${id}`)
    dispatch({
        type:'CART_ADD_ITEM',
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.proce,
            countInStock:data.countInStock,
             qty
        }})

localStorage.setItem('cartItems' , JSON.stringify(getState().addToCart.cartItems))

    }
