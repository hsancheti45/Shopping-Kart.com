import { useSelector, useDispatch } from "react-redux";
import { Data } from "../../data/Data";
import { addItem, removeItem } from "../../redux/Action";
import "./ProductTile.css"

const ProductTile = (({ item }) => {

    const stateCart = useSelector(state => state);
    const dispatch = useDispatch();

    function check(id) {
        const indexCart = stateCart.cart.findIndex(x => x.productId === id);
        if (indexCart >= 0)
            return stateCart.cart[indexCart].quantity;
        else
            return 0;
    }

    const quantity = check(item);

    return (
        <div className="product" key={item}>
            <img src={Data[item].imageURL} alt="product" />
            <h4>{Data[item].name}</h4>
            <p><b>Price: </b>Rs.{Data[item].price}/-</p>
            {
                quantity === 0 ?
                    (
                        <button onClick={() => { dispatch(addItem(item)) }}>
                            Add to cart
                        </button>
                    ) :
                    (
                        <>
                            <button onClick={() => { dispatch(removeItem(item))  }}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => { dispatch(addItem(item)) }}>+</button>
                        </>
                    )
            }
        </div>
    );
});

export default ProductTile;