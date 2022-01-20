import React  from 'react';
import MainHeader from "./Layout/MainHeader/MainHeader";
import Main from './components/Main';
import { ProductContextProvider } from './store/product.context';


const App = (props) => {
  return (
    <React.Fragment>    
    <ProductContextProvider>
       <MainHeader />
       <Main />
       </ProductContextProvider> 
    </React.Fragment>
  );
}

export default App;
