const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        default: 
        return state
    }
}