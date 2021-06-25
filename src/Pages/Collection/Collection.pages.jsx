import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../Redux/Shop/Shop.selector';
import './Collection.styles.scss'
import CollectionItem from '../../Components/Collection-Item/CollectionItem.component';

const CollectionPage = ({collection}) => {

    const {title, items} = collection
    return(
        <div className = 'collection-page'>
            <div className = 'title'>{title.toUpperCase()}</div>
            <div className = 'items'>
                {
                    items.map(item => <CollectionItem key = {item.id} item = {item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)