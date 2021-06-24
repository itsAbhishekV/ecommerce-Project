import React from "react";
import './ShopPage.pages.styles.scss';
import { connect } from "react-redux";
import { selectShopCollection } from "../../Redux/Shop/Shop.selector";
import CollectionPreview from "../../Components/Collection-preview/CollectionPreview.component";
import { createStructuredSelector } from "reselect";

const ShopPage = ({collection}) => (
    <div className='shop'>
        {
            collection.map(({id, ...otherPreviewProps}) => (
                <CollectionPreview key = {id} {...otherPreviewProps} />
            ) )
        }
    </div>
)

const mapStateToProps = () => createStructuredSelector({
    collection: selectShopCollection
})

export default connect(mapStateToProps)(ShopPage);