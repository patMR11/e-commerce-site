import { useState } from 'react'
import React from 'react'
import './Filterbar.css'
function Filterbar({setSportCatergory, setSortOrder}) {

  return (
    <div className='filter-container'>
        <h3>Filter</h3>
        <hr/>
        <div className='sport-category'>
            <label htmlFor="sport">Choose Sport</label>
            <select name="sport" defaultValue="select" onChange={(e)=>setSportCatergory(e.target.value)}>
                <option value="select" disabled>Select an option</option>
                <option value="football">Football</option>
                <option value="basketball">Basketball</option>
                <option value="combat">Combat</option>
                <option value="tennis">Tennis</option>
                <option value="gym">Gym</option>
            </select>
        </div>
        <hr/>
        <div className='sort-by'>
            <p>Sort by</p>
            <div className='radio-info'>
                <input type="radio" id="low" name="priceSort" value="low" onChange={()=>setSortOrder("lowToHigh")}/>
                <label htmlFor="low">Price: Low to High</label>
            </div>
            <div className='radio-info'>
                <input type="radio" id="high" name="priceSort" value="high" onChange={()=>setSortOrder("highToLow")}/>
                <label htmlFor="high">Price: High to Low</label>
            </div>
            
        </div>
        <hr/>
    </div>
  )
}

export default Filterbar