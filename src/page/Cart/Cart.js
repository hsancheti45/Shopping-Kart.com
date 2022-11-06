import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { Data } from "../../data/Data";
import { useSelector} from "react-redux";
import "./Cart.css";



const Cart = () => {

    const stateCart = useSelector(state => state);
    
    const getTotal = () => {
        return stateCart.cart.reduce((accumulator, object) => {
            return accumulator + (object.quantity * Data[object.productId].price);
        }, 0);
    }

    const cartTotal = getTotal();

    return (
        <>
            <div className="cart-container">
                <Link to="/"><button>Continue Shopping</button></Link>
                <div className="cart">
                    <div className="card-header">
                        <p>Items</p>
                        <p>Description</p>
                        <p>Quantity</p>
                        <p>Price</p>
                        <p>Amount</p>
                        <p>Action</p>
                    </div>
                    {
                        stateCart.cart.map((item) => {
                            return (
                                <CartItem key={item.productId} item={item}/>
                            );
                        })
                    }
                    <div className="cart-total">
                        <span><b>Cart Total: </b> Rs.{cartTotal}/-</span><br />
                        <span><b>Discount: </b>Rs.0/-</span><br />
                        <span><b>GST: </b>Rs.{((0.18) * cartTotal).toFixed(2)}/-</span><br />
                        <span><b>Delivery: </b>Rs.40/-</span><br /><hr />
                        <span><b>Order Total: </b>Rs.{cartTotal + (0.18 * cartTotal) + 40}/-</span>
                    </div>
                    <div className="btn-pay"><button>Pay Securely Now</button></div>
                </div>
            </div>
        </>
    );

}

export default Cart;