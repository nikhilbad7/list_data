import { useRef } from 'react';
import Card from './Card';
import classes from './InputList.module.css';
import Button from './Button';

const InputList2 = (props) =>{
	const itemInputRef = useRef();
	
	
	const submitHandler = (event) =>{
		event.preventDefault();
		const enteredItem = itemInputRef.current.value;
		if(isNaN(enteredItem)){
			alert('please enter number');
		}
		props.onAddItem2(enteredItem);
		itemInputRef.current.value = '';
	}

	return(
			<Card className={classes.input}>
				<form onSubmit={submitHandler}>
				<input type="text" placeholder="Enter list2 items"  ref={itemInputRef} required/>
				<Button type="submit">Add</Button>
				</form>				
			</Card>
		)
}

export default InputList2;