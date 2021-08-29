import React from 'react';
import classes from './ItemList.module.css';
import Card from './Card';
//import classes from './UsersList.module.css';

const ItemList = (props) => {
  return (
    <Card className={classes.items}>
    
      {props.data && <ul>
        {props.data.map((item,index) => (
          <li key={index}>
            {item} 
          </li>
        ))}
      </ul>}
    </Card>
  );
};

export default ItemList;