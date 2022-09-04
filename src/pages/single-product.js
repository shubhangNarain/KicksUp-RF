import { useParams } from "react-router-dom"
import { Products } from "../db/products";
import { Cart } from "../components";
import { MdExpandLess } from "react-icons/md"
import { useCart } from "../context/cart-context";
import { Link } from "react-router-dom";
export const SingleProduct = () => {
    const { productID } = useParams();
    function getProductDetails(products, productID) {
        return products.find((product) => product._id === productID);
    }
    const foundProduct = getProductDetails(Products, productID);
    const { productName, productImg, rating, reviews, cost } = foundProduct || {};

    const { cartState: {cart}, cartDispatch } = useCart();

    const customAngle = ["Front", "Middle", "Back", "Sole"]
    const designImg = ["black", "blue", "white"]
    const size = ["7.jpg", "8.jpg", "9.png", "10.png"]
    return (
        <div>
            
            <div className="store-div-flex">
                <div className="product-box design-space">
                    <div className="single-product-heading">
                        <Link to="/store" className="page-link cursor">
                        <MdExpandLess className="less-icon" />
                        </Link>
                        <span>your design space</span>
                    </div>
                    <div className="design-flex">
                        <div className="single-product">
                            <img src={`../.${productImg}`} className="product-img separate-prod-img" alt="product" />
                            <div className="rate-div">
                                <span>Rate product</span>
                                <div className="ratings">
                                    <div className="empty-stars"></div>
                                </div>
                            </div>
                        </div>
                        <div className="design-grid">
                            <div><img src={`../.${productImg}`} className="product-img design-img" alt="product" /></div>
                            <div className="product-info">
                                <span className="single-prod-name">{productName}</span>
                                <span>By KICKSUP and you</span>
                                <div className="ratings">
                                    <div className="empty-stars"></div>
                                    <div className="full-stars" style={{ width: `${rating}%` }}></div>
                                </div>
                                <span>{reviews} reviews</span>
                                <span>Rs. {cost}/-</span>
                                <small>Get an offer</small>
                            </div>
                            <div><img src={`../.${productImg}`} className="product-img design-img" alt="product" /></div>
                            <div className="custom-column">
                                {customAngle.map((item) => (
                                    <div className="wrapper">
                                        <span>{item}</span>
                                        <div className="container">
                                            {designImg.map((image) => (
                                                <label className="option_item">
                                                    <input type="checkbox" className="checkbox" />
                                                    <div className="option_inner">
                                                        <div className="tickmark"></div>
                                                        <img src={`../../assets/${image}-img.jpg`} className="product-img small-img" alt="product" />
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="wrapper">
                                    <span>Size</span>
                                    <div className="container">
                                        {size.map((image) => (
                                            <label className="option_item">
                                                <input type="checkbox" className="checkbox" />
                                                <div className="option_inner">
                                                    <div className="tickmark"></div>
                                                    <img src={`../../assets/size${image}`} className="product-img small-img" alt="product" />
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div><img src={`../.${productImg}`} className="product-img design-img" alt="product" /></div>
                        </div>
                    </div>
                    <div className="product-actions">
                        <button className="btn share-btn">Share design</button>
                        {cart?.some((w) => w._id === foundProduct._id) ? 
              <button
              className="btn addCart-btn"
              onClick={() => {
                  cartDispatch({ type: "REMOVE_FROM_CART", payload: foundProduct })
              }}>
              Remove from cart
          </button>
            :
                    <button
                        className="btn addCart-btn"
                        onClick={() => {
                            cartDispatch({ type: "ADD_TO_CART", payload: foundProduct })
                        }}>
                        Add to cart
                    </button>}
                    </div>
                </div>
                <div className="product-box cart-box">
                    <Cart />
                </div>
            </div>
        </div>
    )
}