import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

// Eso hace combine reducers
// {
//     user: {
//         currentUser
//     }
//     cart: {
//         cartItems
//     }
// }

export default combineReducers({
  user: userReducer,
});
