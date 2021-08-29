import { useState } from 'react';
import Button from './Button';
import "./styles.css";

const Compute =( props) => {

	const [selectedOption,setSelectedOption] = useState("A&B");

	const submitHandler = (event) =>{
		event.preventDefault();
		console.log(selectedOption);
		props.onSelect(selectedOption);
	  }

	return (
			<form onSubmit={submitHandler}>
			<div className="radio-btn-container">
	        	<div
		          className="radio-btn"
		          onClick={() => {
		            setSelectedOption("A");
	         	 }}
	        	>
		          <input
		            type="radio"
		            value={selectedOption}
		            name="list"
		            checked={selectedOption == "A"}
		          /> 
		          List A Elements
	       		</div>
		        <div
		          className="radio-btn"
		          onClick={() => {
		            setSelectedOption("B");
		          }}
		        >
		          <input
		            type="radio"
		            value={selectedOption}
		            name="list"
		            checked={selectedOption == "B"}
		          />
		          List B Elements
		        </div>
		        <div
		          className="radio-btn"
		          onClick={() => {
		            setSelectedOption("A&B");
		          }}
		        >
		          <input
		            type="radio"
		            value={selectedOption}
		            name="list"
		            checked={selectedOption == "A&B"}
		          />
		          List A & B Elements
		        </div>
		        <div
		          className="radio-btn"
		          onClick={() => {
		            setSelectedOption("A&BUnique");
		          }}
		        >
		          <input
		            type="radio"
		            value={selectedOption}
		            name="list"
		            checked={selectedOption == "A&BUnique"}
		          />
		          List A & B  Unique Elements
		        </div>
      		</div>
      		<br/>
		    <Button type="submit">Compute</Button>
			</form>
		);
}
export default Compute;