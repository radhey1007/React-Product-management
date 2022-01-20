import React , {Fragment} from 'react';
import style from './Main.module.css';
import Form from './Form';
import ProductList from './Product/ProductList';
import OrderDetail from './Product/OrderDetail';


const Main = (props) => {
  return (
         <Fragment>
          <div className={style.container}>
            <div className={style['form-wrapper']}>
              <Form />              
            </div>       
            <div className={style['product-list-wrapper']}>
              <ProductList />
            </div>
          </div>          
          <OrderDetail />
         </Fragment>
  )
}

export default Main;
