export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const REMOVE_ITEM = "REMOVE_ITEM";

export function addItem(productId) {
    let payload = {
        id: productId
    }
    return {
        type: INCREASE,
        payload
    }
}

export function removeItem(productId) {
    let payload = {
        id: productId
    }
    return {
        type: DECREASE,
        payload
    }
}

export function removeFromCart(item) {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}