import React , { useContext } from 'react';
import ProductContext from '../../store/product.context';
import styles from './ProductList.module.css';

const ProductList = (props) => {
  const productCtx = useContext(ProductContext);
  
  // console.log(productCtx.productList , 'productList');

  return (productCtx.productList.length > 0 &&
          <div className={styles['product-list']}>
                          <table className={styles.table}>
                          <thead>
                          <tr>
                              <th>S.No</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Row Total</th>
                          </tr>
                          </thead>
                          <tbody>
                              {
                                productCtx.productList && productCtx.productList.map((row,index) => (
                                  <tr key={row.id}>
                                  <td>{index + 1}</td>
                                  <td>{row.name}</td>
                                  <td>{row.price}</td>
                                  <td>{row.quantity}</td>
                                  <td>{row.itemTotal}</td>
                              </tr>  
                                  ))
                              }
                          </tbody>
                        </table>
    </div>);
}

export default ProductList;
