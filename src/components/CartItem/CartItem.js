import { Data } from "../../data/Data";
import { useDispatch } from "react-redux";
import { addItem, removeItem, removeFromCart} from "../../redux/Action";
import "./CartItem.css"

const CartItem = (({ item }) => {

    const dispatch = useDispatch();
    return (
        <div className="card" key={item.productId}>
            <img src={Data[item.productId].imageURL} alt="" />
            <p>{Data[item.productId].name}</p>
            <div className="quantity">
                <button onClick={() => { dispatch(removeItem(item.productId)) }}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => { dispatch(addItem(item.productId)) }}>+</button>
            </div>
            <p>Rs.{Data[item.productId].price}/-</p>
            <p>Rs.{item.quantity * Data[item.productId].price}/-</p>
            <p>
                <button onClick={() => { dispatch(removeFromCart(item)) }}>Remove</button>
            </p>
        </div>
    );
});

export default CartItem;