export const DesingTemplates = () => {
    return (
        <div className="cost-filter">
            <span className="filter-heading">Design templates</span> <br />
            <div className="filter-div">
                <label htmlFor="ip1" className="cursor">
                    <input className="cost-input" id="ip1" type="checkbox" />
                    2
                </label>
                <label htmlFor="ip2" className="cursor">
                    <input className="cost-input" id="ip2" type="checkbox" />
                    3
                </label>
                <label htmlFor="ip3" className="cursor">
                    <input className="cost-input" id="ip3" type="checkbox" />
                    3+
                </label>
            </div>
        </div>
    )
}