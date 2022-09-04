import { useFilteredData } from "../../context/filter-context"

export const TypeFilter = () => {
    const { state: {itemType}, filterDispatch} = useFilteredData();
    const types =["Loafers", "Sneakers"];
    const clickFilter = (e, filterContent) => {
        e.target.checked ? filterDispatch({ type: `FILTER_${filterContent}`, payload: e.target.value }) : filterDispatch({
            type: `REMOVE_${filterContent}`, payload: e.target.value
        })
    }
    return (
        <div className="cost-filter">
            <span className="filter-heading">Type</span> <br />
            <div className="filter-div">
                {types.map((type) => (
                    <label htmlFor={type} className="cursor" key={type}>
                    <input className="cost-input" id={type} type="checkbox" name="filter" value={type}
                    onChange={(e) => clickFilter(e, "TYPE")}
                    checked={itemType.includes(type)}
                    />
                    {type}
                </label>
                ))}

            </div>
        </div>
    )
}