import { FiShoppingBag } from "react-icons/fi"
import { useCart } from "../context/cart-context"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { AiOutlineCalendar } from "react-icons/ai"
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"
export const Cart = () => {
    const { cartState: { cart }, cartDispatch } = useCart();
    return (
        <div className="cart-div">
            <div className="product-nav">
                <h2>CART</h2>
                <FiShoppingBag className="product-icon" />
            </div>
            {cart?.length === 0 ? <div className="empty-cart">What's stopping you, designer?</div> :
                <div className="cart-list">
                    {cart.map((p) => (

                        <div className="cart-flex" key={p._id}>
                            <IoMdCloseCircleOutline className="cross-btn cursor"
                                onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: p })}
                            />
                            <Link to={`/single-product/${p._id}`} className="page-link">
                                <img src={`../.${p.productImg}`} className="product-img design-img cart-img" alt="cart-product"/>
                            </Link>
                            <div className="product-info cart-info">
                                <span>{p.productName}</span>
                                <small>By KICKSUP and you</small>
                                <span>Rs. {p.cost}/-</span>
                                <div>
                                    <select value={p.qty}
                                        onChange={(e) =>
                                            cartDispatch({
                                                type: "CHANGE_CART_QTY", payload: {
                                                    _id: p._id,
                                                    qty: e.target.value
                                                }
                                            })}>
                                        {[...Array(p.quantity).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <p className="cart-price">Rs. {p.cost * p.qty}</p>
                            </div>

                        </div>

                    ))}
                </div>
            }
            <div className="cart-bottom">
                <div className="cart-bottom-flex">
                    <div>
                        <MdLocationPin />
                        <p>Home</p>
                    </div>
                    <div>
                        <AiOutlineCalendar />
                        <p>Select date</p>
                    </div>
                </div>
                {cart.length !== 0? <button className="addCart-btn">Order now</button> :
                <button className="addCart-btn order-btn">Order now</button> }
            </div>
        </div>
    )
}