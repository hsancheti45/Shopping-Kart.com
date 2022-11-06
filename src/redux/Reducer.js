import { createStore } from "redux"

const initialState = { cart: [] };

const Counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            {
                const indexCart = state.cart.findIndex(x => x.productId === action.payload.id);
                let tempObj = { productId: action.payload.id, quantity: 1 }
                const Arrcart = [...state.cart];
                if (indexCart === -1) {
                    return {
                        ...state,
                        cart: [...state.cart, tempObj]
                    };
                }
                else {
                    Arrcart[indexCart].quantity += 1;
                    return { ...state, cart: Arrcart }
                }
            }
        case "DECREASE":
            {
                const indexCart = state.cart.findIndex(x => x.productId === action.payload.id);
                let tempObj = { productId: action.payload.id, quantity: 1 }
                const Arrcart = [...state.cart];
                if (indexCart === -1) {
                    return {
                        ...state,
                        cart: [...state.cart, tempObj]
                    };
                }
                else {
                    Arrcart[indexCart].quantity -= 1;
                    if (Arrcart[indexCart].quantity === 0) {
                        Arrcart.splice(indexCart, 1);
                    }
                    return { ...state, cart: Arrcart }
                }
            }
        case "REMOVE_ITEM":
            {
                let filteredArray = state.cart.filter(i => i !== action.payload)
                return { ...state, cart: filteredArray }
            }
        default: return state
    }
}

const store = createStore(Counter);
export default store;