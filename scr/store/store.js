import { createStore } from 'redux';
import { cartReducer } from "./cartReducer";

//Could you please provide pseudo code of how you store auth parameters in store?

export const store = createStore(cartReducer)
