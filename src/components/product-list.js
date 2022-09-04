import { AiOutlineSearch } from "react-icons/ai"
import { ProductCard } from "./product-card"
import { useFilteredData } from "../context/filter-context"
import { useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { SortedPrice } from "../utils/filter-utils"
export const ProductList = () => {
    const { filteredProducts, filterDispatch, state: { sortBy } } = useFilteredData()
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [searchVal, setSearchVal] = useState("")
    const [showPriceModal, setShowPriceModal] = useState(false)

    const getSearchedProd = (searchProd) => {
        searchProd = searchProd?.filter(({ productName }) => productName.toLowerCase().includes(searchVal.toLowerCase()))
        return searchProd;
    }

    const compose = (...getItem) => (item) => getItem.reduce((data, getItem) => getItem(data), item);
    const getProducts = compose(getSearchedProd, SortedPrice)(filteredProducts)
    return (
        <div className="product-box site-products">
            <div className="product-nav">
                <h2>SHOES</h2>
                <div className="product-functions">
                    {showSearchBar ? 
                    <div>
                        <input type="text" style={{ width: "4rem" }}
                        className="search-input"
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                        <IoMdCloseCircleOutline
                            className="close-btn cursor"
                            onClick={() => setShowSearchBar(false)}
                        />
                    </div> :
                        <AiOutlineSearch className="product-icon search-icon cursor"
                            onClick={() => setShowSearchBar(true)}
                        />}

                    {showPriceModal ?
                        <div className="sort-div">
                            <IoMdCloseCircleOutline className="close-sort"
                                onClick={() => setShowPriceModal(false)}
                            />
                            <label className="cursor">
                                <input type="radio" name="price-filter"
                                    onChange={() => filterDispatch({ type: "SORT", payload: "" })}
                                    checked={sortBy === ""}
                                />
                                default
                            </label>
                            <label className="cursor">
                                <input type="radio" name="price-filter"
                                    onChange={() => filterDispatch({ type: "SORT", payload: "Low_to_high" })}
                                    checked={sortBy === "Low_to_high"}
                                />
                                Price: low to high
                            </label>
                            <label className="cursor">
                                <input type="radio" name="price-filter"
                                    onChange={() => filterDispatch({ type: "SORT", payload: "High_to_low" })}
                                    checked={sortBy === "High_to_low"}
                                />
                                Price: high to low
                            </label>
                        </div> : <button className="sort-btn"
                            onClick={() => setShowPriceModal(true)}
                        >Sort by</button>}
                </div>
            </div>
            <div className="products-grid">
                {getProducts.map((product) => (
                    <div key={product._id}>
                        <ProductCard {...product} />
                    </div>

                ))}
            </div>
        </div>
    )
}