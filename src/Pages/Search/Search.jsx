import React from 'react'
import './Search.css'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className='search-container'>
            <div className='search-bar'>
                <input type="text" className='search-input' placeholder='Search'/>
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>   
            </div>
    </div>
  )
}

export default Search