import axios from "axios";

export const productList = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get("http://localhost:5000/products");

    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "PRODUCT_LIST_FAIL", payload: error });
  }
};
