import { createStore } from 'redux';
import { cartReducer } from "./cartReducer";

//Could you please provide pseudo code of how you store auth parameters in store?
// e.g. Access Token and Refresh Token, UserId, FirstName and LastName

export const store = createStore(cartReducer)
