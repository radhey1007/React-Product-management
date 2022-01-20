import React , {useState} from 'react';

const ProductContext  = React.createContext({
    id:1,
    name:'',
    price:0,
    quantity:1,
    addProduct : (name,price,quantity) => {},
    productList:[]
});

React.createContext();

export const ProductContextProvider = (props) => {
    
    const[productList, setProductList]  = useState([]);

    const addProductHandler = (name,price,quantity) => {
        const itemTotal = price*quantity;
        const itemList = [];
        itemList.push(
            {  id:Math.random(),
               name:name,
               price:price,
               quantity:quantity,
               itemTotal:itemTotal
        });
        setProductList((previousProductList) => {
            return  itemList.concat(previousProductList);
        });               
    }

    return (
        <ProductContext.Provider
        value= {{
            id:Math.random(),
            name:'rv',
            price:0,
            quantity:1,
            addProduct : addProductHandler,
            productList: productList
        }} >
          {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContext;