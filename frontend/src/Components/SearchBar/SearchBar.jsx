import React from "react";
import "./SearchBar.scss";
import { ImSearch } from "react-icons/im"
 
const SearchBar = () => {
    return (
        <div className="search--component">
            <input type="search" name="products-search" id="products-search" className="products-search" placeholder="Buscar produtos, marcar e muito mais..."/>
            < ImSearch className="icon-search"/>
        </div>
    )
}

export default SearchBar;