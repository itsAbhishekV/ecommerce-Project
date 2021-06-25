import React from "react";
import './ShopPage.pages.styles.scss';
import { Route } from "react-router";
import CollectionOverview from "../../Components/CollectionOverview/CollectionOverview.component";
import CollectionPage from "../Collection/Collection.pages";

const ShopPage = ({match}) => (
    <div className='shop'>
        <Route exact path = {`${match.path}`} component = {CollectionOverview} />
        <Route path = {`${match.path}/:collectionId`} component = {CollectionPage} />
    </div>
)


export default ShopPage;