import React from "react";
import './ShopPage.pages.styles.scss';
import SHOP_DATA from "./ShopPage.data";
import CollectionPreview from "../../Components/Collection-preview/CollectionPreview.component";

class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        }
    }

    render(){
        const {collection} = this.state;
        return(
            <div className='shop'>
                {
                    collection.map(({id, ...otherPreviewProps}) => (
                        <CollectionPreview key = {id} {...otherPreviewProps} />
                    ) )
                }
            </div>
        )
    }
}


export default ShopPage;