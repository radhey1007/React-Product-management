import React from 'react';
import Card from '../../UI/Card';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return <Card>
        <div className={classes['header-wrapper']}>
            <h4>Product Management</h4>           
        </div>
   </Card>;
}

export default MainHeader;
