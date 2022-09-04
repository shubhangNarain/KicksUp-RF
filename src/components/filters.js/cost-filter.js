import { useFilteredData } from "../../context/filter-context"

export const CostFilter = () => {
    const { state: { itemCost }, filterDispatch } = useFilteredData();

    const clickFilter = (e, filterContent) => {
        e.target.checked ? filterDispatch({ type: `FILTER_${filterContent}`, payload: e.target.value }) : filterDispatch({
            type: `REMOVE_${filterContent}`
        })
    }
    return (
        <div className="cost-filter">
            <span className="filter-heading">Cost</span> <br />
            <div className="filter-div">
                <label className="cursor" htmlFor="cheap-input">
                    <input className="cost-input" id="cheap-input" type="checkbox" value="1500-to-4000"
                        onChange={(e) => clickFilter(e, "COST")}
                        checked={itemCost === "1500-to-4000"}
                    />
                    Rs. 1500 to 4000
                </label>
                <label className="cursor" htmlFor="mid-input">
                    <input className="cost-input" id="mid-input" type="checkbox" value="4001-to-7000"
                        onChange={(e) => clickFilter(e, "COST")}
                        checked={itemCost === "4001-to-7000"}
                    />
                    Rs. 4001 to 7000
                </label>
                <label className="cursor" htmlFor="exp-input">
                    <input className="cost-input" id="exp-input" type="checkbox" value="7001-to-10000"
                        onChange={(e) => clickFilter(e, "COST")}
                        checked={itemCost === "7001-to-10000"}
                    />
                    Rs. 7001+
                </label>
            </div>
        </div>
    )
}