import React from 'react'
import './Pagination.css'
function Pagination({productsPerPage, totalProducts, paginate}) {

  const pageNumbers = [];

  for(let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++){
    pageNumbers.push(i)
  }
    return (
    <div className='pagination-numbers'>
        {
        pageNumbers.map(num=>(
            <div key={num}className='page-item'>
                <button onClick={()=>paginate(num)}className='page-link'>{num}</button>
            </div>
        ))
        }
    </div>
  )
}

export default Pagination