import { useRef} from 'react';
import Card from './Card';
import classes from './InputList.module.css';
import Button from './Button';

const InputList1 = (props) =>{
	const itemInputRef = useRef();
	
	
	const submitHandler = (event) =>{
		event.preventDefault();
		const enteredItem = itemInputRef.current.value;
		if(isNaN(enteredItem)){
			alert('please enter number');
		}
		props.onAddItem1(enteredItem);
		itemInputRef.current.value = '';
	}

	return(
			
			<Card className={classes.input}>
				<form onSubmit={submitHandler}>
				<input type="text" placeholder="Enter list1 items"  ref={itemInputRef} required/>
				<Button type="submit">Add</Button>
				</form>	
			</Card>			
			
		)
}

export default InputList1;