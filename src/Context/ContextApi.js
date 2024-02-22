import React, { createContext, useEffect, useState } from "react";
import {fetchAPIData} from "../Utils/Api"

export const Context = createContext();

export const AppContext = (props)=>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("home");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        fecthSelectedCategoryData(selectedCategory);
    },[selectedCategory]);

    const fecthSelectedCategoryData = (query)=>{
        setLoading(true)
        fetchAPIData(`search/?q=${query}`).then(({contents})=>{
            // console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        })
    }

    return (
        <Context.Provider
            value={{
                loading,setLoading,searchResults,setSearchResults,selectedCategory,setSelectedCategory,mobileMenu,setMobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    )
}