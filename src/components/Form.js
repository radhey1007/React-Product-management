import React , { useContext , useState } from 'react';
import Card from '../UI/Card';
import styles from './Form.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';
import ProductContext from '../store/product.context';

const Form = (props) => {

    const productCtx = useContext(ProductContext);
    const [name , setName] = useState('');
    const [price , setPrice] = useState(0);
    const [quantity , setQuantity] = useState(0);
    const [nameErr , setNameErr] = useState('');
    const [priceErr , setPriceErr] = useState('');
    const [quantityErr , setQuantityErr] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value);
    }

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const onBlurName = (e) => {
        if(e.target.value.length===0){
            setNameErr('Please enter the name');
         }else{
            setNameErr('');
         }
    }

    const onBlurPrice = (e) => {
        if(e.target.value.length===0){
            setPriceErr('Please enter the price');
         }else{
            setPriceErr('');
         }
    }

    const onBlurQuantity = (e) => {
        if(e.target.value.length===0){
            setQuantityErr('Please enter the quantity');
         }else{
            setQuantityErr('');
         }
    }

    const submitHandler = (event) => {
       event.preventDefault();
       if(name.length===0){
          setNameErr('Please enter the name');
       }
        else if(price  < 1) {
        setPriceErr('Please enter the price');
       } else if(quantity < 1) {
        setQuantityErr('Please enter the quantity');
       } else {
           resetErr();
           resetForm(); 
           productCtx.addProduct(name,price,quantity);  
       }  
    }

    const resetErr = () => {
        setNameErr('');
        setPriceErr('');
        setQuantityErr('');
    }

    const resetForm = () => {
        setName('');
        setPrice(0);
        setQuantity(0);
    }


    return (
        <div className={styles['product-container']}> 
        <Card>   
        <form className={styles['product-form']} onSubmit={submitHandler}>
            <div className={styles['form-field']}>
                <Input type="text" id="name" name="name" label="Product Name"
                onChange={onChangeName} onBlur={onBlurName} value={name} />
                {nameErr && <label>{nameErr}</label>}
            </div>
            <div className={styles['form-field']}>
                <Input type="number" id="price" name="price" label="Product Price"
                onChange={onChangePrice} onBlur={onBlurPrice} value={price} />
                {priceErr && <label>{priceErr}</label>}
            </div>
            <div className={styles['form-field']}>
                <Input type="number" id="quantity" name="quantity" label="Product Quantity" 
                onChange={onChangeQuantity} onBlur={onBlurQuantity} value={quantity} />
                {quantityErr && <label>{quantityErr}</label>}
            </div>
            <div className={styles['form-actions']}>
                <Button type="submit">
                    Add Product
                </Button>
            </div>
         </form>         
         </Card>
        </div>
    )
}
export default Form;
