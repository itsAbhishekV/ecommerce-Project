import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
)

export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collection => Object.keys(collection).map(collections => collection[collections])
)

export const selectCollection = collectionIdUrlParam => createSelector(
    [selectShopCollection],
    collection => collection[collectionIdUrlParam]
)