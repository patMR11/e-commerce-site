import React from 'react'
import './Products.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import football from '../../assets/images/football.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";

function Products({setItems, sportCategory, sortOrder}) {

    
    const [products, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [modal, setModal] = useState(false)
    const [popUp, setPopup] = useState(false)
    const [currentPage, setCurrentPage]= useState(1)
    const [productsPerPage, setProductsPerPage]= useState(20)
    const [addProduct, setAddProduct] = useState({
        image:"",
        name:"",
        price:0,
        total: 0
    })
    
    const resetQuantity = () => setQuantity(1);//reset quantity to 1
    
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(()=>{
        fetch(`${process.env.PUBLIC_URL}/data.json`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => console.log(data))
            .catch(err => console.error("Fetch error:", err));

    },[])

    useEffect(()=>{
        setAddProduct(prevState =>({
            ...prevState,
            totalprice: prevState.price * quantity
        }))
    },[quantity])

    //show product added to cart
    const checkoutPopUp = ()=>{
        if(popUp==false){
            setPopup(true)
            setTimeout(()=>{
                setPopup(false)
            },1500)
        }  
    }
    //if sport category is equal to all return all products else return only the selected product
    const filteredProducts = products.filter((product) => 
        sportCategory==="All"?   true :  product.sport === sportCategory  
    );

    const sortedProducts = [...filteredProducts].sort((a,b)=>{
       
        if(sortOrder=="lowToHigh"){
            return a.price - b.price
        }else if(sortOrder=="highToLow"){
            return b.price - a.price
        }
        return 0 //No sorting
    })

    //get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct-productsPerPage;
    const currentProduct = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    return (
        <div className='full-container'>
        <div className='product-container'>
            {currentProduct.map(({sport,image,name,price}, index)=>{
                return(
                    <div className='product-item' key={index} onClick={()=>{setModal((prev)=>!prev)
                        setAddProduct(prevState => ({
                            ...prevState,
                            image: image, 
                            name: name, 
                            price: price,
                            totalprice: price*quantity
                        }));
                    }}>  
                    <img src={image} alt=""/>
                    <div className='product-info'>
                        <p>{name}</p>
                        <p>${price}</p>
                    </div>
                </div>
                )
            })}
            
        </div>
        <div className='pagination-container'>
            <Pagination productsPerPage={productsPerPage} totalProducts={filteredProducts.length} paginate={paginate}/>
        </div>
        <div className={`cart-notification ${popUp?"show":"close"}`}>
            <p>{addProduct.name} added to cart</p>
        </div>
        <div className={`modal ${modal?"":"close"}`}>
            <div className="overlay"></div>
            <div className='modal-content'>
                <FontAwesomeIcon icon={faXmark} className="modal-icon" onClick={()=>{
                    setModal((prev)=>!prev)
                    resetQuantity()
                }}/>
                <div  className='checkout-product'>
                    <img src={addProduct.image? addProduct.image:null} alt=""/>
                        <div className='checkout-product-info'>
                            <p>{addProduct.name? addProduct.name: null} &nbsp;
                                 ${addProduct.price? addProduct.totalprice:null}</p>
                                 <div className="quantity-dropdown">
                            <label htmlFor="quantity">Quantity:</label>
                            <select
                                name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='add-to-cart'>
                    <button className='cart-button' onClick={() => {
                        setItems((prevItems) => [...prevItems, addProduct])
                        setModal((prev)=>!prev)
                        resetQuantity()
                        checkoutPopUp()
                    }}>Add to cart</button> 
                </div>
            </div>
        </div>
        </div>
        
        
    )
}

export default Products