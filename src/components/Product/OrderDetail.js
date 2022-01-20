import React , {useContext} from 'react';
import Card from '../../UI/Card';
import ProductContext from '../../store/product.context';
import styles from './OrderDetail.module.css';

const OrderDetail = (props) => {

  const productCtx = useContext(ProductContext);
  const totalItems = productCtx.productList.length;
  console.log(productCtx.productList , 'productList');
  const calculateCartTotal = () => {   
    if(productCtx.productList.length > 0){        
        const amountList  = productCtx.productList.map(item => item.itemTotal);
        const totalAmount = amountList.reduce((prev, next)=> {
          return prev + next		
        });              
       return totalAmount;
    } else {
      return 0;
    }
  }
  const totalAmount  = calculateCartTotal();

  return (totalItems > 0 && <Card>
            <h2>Order Summary :</h2> 
            <p>Total num of Items is {totalItems}</p>
            <p>Total Amount of Items is {totalAmount} </p>
        </Card>);
}

export default OrderDetail;
