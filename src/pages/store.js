import { DesingTemplates } from "../components"
import { CostFilter, TypeFilter, ProductList, Cart, ColorFilter } from "../components"
import { FiFilter } from "react-icons/fi"
import { useFilteredData } from "../context/filter-context"
import { GetColor, GetType, GetCost } from "../utils/filter-utils"
import { Products } from "../db/products"

export const Store = () => {
    const { setFilteredProducts } = useFilteredData();
    const compose = (...getItem) => (item) => getItem.reduce((data, getItem) => getItem(data), item);
    const getProducts = compose(GetColor, GetType, GetCost)(Products)
    
    return (
        <div>
            
            <div className="store-div-flex">
                <div className="product-box filter-box">
                    <div className="product-nav">
                        <h2>FILTERS</h2>
                        <FiFilter className="product-icon" />
                    </div>
                    <div>
                        <div className="product-filters">
                            <CostFilter />
                            <ColorFilter />
                            <DesingTemplates />
                            <TypeFilter />
                        </div>
                        <button
                            className="addCart-btn apply-btn cursor"
                            onClick={() => setFilteredProducts(getProducts)}>Apply</button>
                    </div>
                </div>
                <ProductList />
                <div className="product-box cart-box">
                    <Cart />
                </div>
            </div>
        </div>
    )
}