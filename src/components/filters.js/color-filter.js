import { useFilteredData } from "../../context/filter-context";
export const ColorFilter = () => {
    const { state: { itemColor }, filterDispatch } = useFilteredData();
    const colors = ["black", "blue", "white", "brown", "gray"]

    const clickFilter = (e, filterContent) => {
        e.target.checked ? filterDispatch({ type: `FILTER_${filterContent}`, payload: e.target.value }) : filterDispatch({
            type: `REMOVE_${filterContent}`, payload: e.target.value
        })
    }
    return (
        <div className="cost-filter">
            <span className="filter-heading">Colour</span> <br />
            <div className="container color-container">
                {colors.map((color) => (
                    <label className="option_item" htmlFor={color} key={color}>
                        <input type="checkbox" className="checkbox" id={color} value={color}
                            onChange={(e) =>
                                clickFilter(e, "COLOR")
                            }
                            checked={itemColor.includes(color)}
                        />
                        <div className="option_inner">
                            <div className="tickmark"></div>
                            <img src={`../../assets/${color}-img.jpg`} className="product-img small-img" alt="product" />
                        </div>
                    </label>
                ))}
            </div>
        </div>
    )
}