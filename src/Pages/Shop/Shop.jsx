import React, { useState } from 'react'
import Filterbar from '../../Components/Filterbar/Filterbar'
import './Shop.css'
import Products from '../../Components/Products/Products'
function Shop({setItems}) {
  const [sportCategory, setSportCatergory] = useState('All')
  const [sortOrder, setSortOrder] = useState('')

  return (
    <div className='shop-container'>
        <Filterbar setSportCatergory={setSportCatergory} setSortOrder={setSortOrder}/>
        <Products setItems={setItems} sportCategory={sportCategory} sortOrder={sortOrder}/>
    </div>
  )
}

export default Shop