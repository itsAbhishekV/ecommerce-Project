import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./User/User.reducer";
import cartReducer from "./Cart/Cart.reducer";
import directoryReducer from "./Directory/Directory.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)