import { createContext, useContext, useReducer, useState } from "react";
import { Products } from "../db/products";
import { FilterReducer } from "../reducers/filter-reducer";

const sortFiltercontext = createContext();

const FilterDataProvider = ({ children }) => {
   const [state, filterDispatch] = useReducer(FilterReducer, {
        itemColor: "",
        itemCost: "",
        itemType: "",
        sortBy: ""
    });

    const [filteredProducts, setFilteredProducts] = useState(Products)
    
    return (
        <sortFiltercontext.Provider value={{ 
            state, 
            filterDispatch, 
            filteredProducts, 
            setFilteredProducts
        }}>
            {children}
        </sortFiltercontext.Provider>
    );
};
const useFilteredData = () => useContext(sortFiltercontext);

export { useFilteredData, FilterDataProvider };
