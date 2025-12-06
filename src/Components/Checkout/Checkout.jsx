import React, { useState, useEffect } from 'react'
import './Checkout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";


function Checkout({display, setDisplay,items, setItems}) {

    const [subtotal, setSubtotal] = useState(0)

    // Use useEffect to update subtotal whenever the items change
    useEffect(() => {
        const total = items.reduce((acc, { totalprice }) => acc + totalprice, 0);
        setSubtotal(total);
    }, [items]);

    const removeItem = (index)=>{
        const updateItems = items.filter((_,i)=> i!== index)
        setItems(updateItems)
    }

  return (
    <div className={`checkout-container ${display?"":"closed"}`}>
        <div className='checkout-heading'>
            <h1>Checkout</h1>
            <FontAwesomeIcon icon={faXmark} className="checkout-icon" onClick={()=>setDisplay((prev)=>!prev)}/>
        </div>
        <div className='checkout-products'>
            {items.map(({name,totalprice},index)=>{
                return(
                    <div className='checkout-item'key={index}>
                        <p>{name} &nbsp; ${totalprice}</p>
                        <FontAwesomeIcon icon={faTrash} className="checkout-icon" onClick={()=>removeItem(index)}/>
                    </div>   
                )
            })}

        </div>
        <div className='subtotal-container'>
            <p>Subtotal: </p>
            <p>${subtotal}</p>
        </div>
        <div className="checkout-button-container">
            <button className='checkout-button'>Checkout</button>
        </div> 
    </div>
  )
}

export default Checkout