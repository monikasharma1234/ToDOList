import React, { useState } from 'react';
import Clock from 'react-clock';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import './home.css';
import {Checkbox} from "@mui/material";

function Home() {
  const [add, setAdd] = useState("");
  const [temp, setTemp] = useState([]);

  function handleAddItem() {
     if(add!=="")
      {setTemp([...temp, add]);
      setAdd("");}
    
  }
  function handleDeleteItem(id) {
    setTemp(temp.filter((_, index) => index !== id));
  }
  function AddIteam(probs) {
    const[state,setState]=useState(true);
    function changeSt()
    {
      setState(!state);
    }
    return (
      <div className="box8" >
        <Checkbox checked={probs.completed} onClick={changeSt}/>
        <IconButton  onClick={() => handleDeleteItem(probs.id)} >
        <DeleteIcon />
        </IconButton>
        {state ?<span >{probs.text}</span>: <span style={{textDecorationLine:"line-through"}}>{probs.text}</span>}
      </div>
    );
  }
  function handleChange(event) {
    setAdd(event.target.value);
  }
  return (
    <>
     
      <h1 className="box2">👾👾To do list👾👾</h1>
      <Clock value={new Date()}/>
      <div className="box1">
        <div className="box3">
          <input
            placeholder="add item"
            name="add"
            onChange={handleChange}
            value={add}
            className="box9"
            style={{width:"85%",height:"40px",textAlign:"center"}}
          />
          <button className="box9" onClick={handleAddItem} style={{height:"40px"}}>
          <AddIcon/>
          </button>
        
          {temp.map((item, index) => (
            <AddIteam
              id={index}
              text={item}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export { Home};