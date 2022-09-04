import { Link } from "react-router-dom";
export const ProductCard = (p) => {
    const { _id, productName, productImg, rating, cost } = p;
    return (
        <div className="product-card" key={_id}>
            <Link to={`/single-product/${_id}`}>
                <img src={productImg} className="product-img" alt="product"/>
            </Link>
            <span className="product-name">{productName}</span>
            <div className="product-stats">
                <span>Rs. {cost}</span>
                <div className="ratings">
                    <div className="empty-stars"></div>
                    <div className="full-stars" style={{ width: `${rating}%` }}></div>
                </div>
            </div>
        </div>
    )
}