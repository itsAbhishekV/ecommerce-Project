import SHOP_DATA from './ShopPage.data'

const INITIAL_STATE = {
    collection: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, actions) => {
    switch(actions.type){
        default:
            return state;
    }
}

export default shopReducer;