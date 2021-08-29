import {useState} from 'react';
import './App.css';
import InputList1 from './InputList1';
import InputList2 from './InputList2';
import ItemList from './ItemList';
import Compute from './Compute';

function App() {
  const [itemList1, setItemList1] = useState([]);
  const [itemList2, setItemList2] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const [computeClicked, setComputeClicked] = useState(false);

  const addItemHandler1 = (item) => {
    
    setItemList1((prevItemsList) => {
      return [
        ...prevItemsList,
        parseInt(item),
      ];
    });
  };

  const addItemHandler2 = (item) => {
    
    setItemList2((prevItemsList) => {
      return [
        ...prevItemsList,
        parseInt(item),
      ];
    });
  };


  const clickHandler = (selectedValue) => {
    var finalres;
    if(selectedValue === 'A'){
        finalres = itemList1;
    }
    if(selectedValue === 'B'){
        finalres = itemList2;
    }
    if(selectedValue === 'A&B'){
        finalres = [...itemList1, ...itemList2];
    }
    if(selectedValue === 'A&BUnique'){
        finalres = [...new Set([...itemList1, ...itemList2])];
    }
    setFinalList(finalres);
    console.log(finalres);
    console.log(finalList);

  }
  return (
    <div className="App">
        <InputList1 onAddItem1={addItemHandler1}/>
        <InputList2 onAddItem2={addItemHandler2}/>
        <br/>
        <Compute onSelect = {clickHandler}/>
        { (finalList.length != 0) && <ItemList data={finalList} />}
      
    </div>
  );
}

export default App;
