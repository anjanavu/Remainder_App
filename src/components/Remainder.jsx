import React, { useState } from 'react'
import './Remainder.css'
import { FaTrash } from 'react-icons/fa';

const Remainder = () => {
    const[remainder,setRemainder]=useState([]);
    const[newremainder,setNewRemainder]=useState("")
    const handleChange=(e)=>{
        setNewRemainder(e.target.value)
    }
    const addRemainder=()=>{
        if(newremainder.trim()){
            setRemainder([...remainder,newremainder])
            console.log(remainder)
        }
    }
    const handleDelete=(index)=>{
        setRemainder(remainder.filter((item,itemIndex)=>itemIndex!==index))

    }
  return (
    <div className='container'>
      <h1>Remainder App</h1>
      <div className='input-container'>
      <input type="text"name='remainder' placeholder='Enter Reaminder Here'
      onChange={handleChange}/>
      <button className='add-button' onClick={addRemainder}>Add Remainder</button>
    </div>
    <ul className='remainder-list'>
    {
        remainder.map((remainder,index)=>(
            <li key={index}>
                {remainder}
                <button onClick={()=>handleDelete(index)} className='delete-button'><FaTrash /></button>
            </li>
        ))
    }
    </ul>
    </div>
  )
}

export default Remainder
