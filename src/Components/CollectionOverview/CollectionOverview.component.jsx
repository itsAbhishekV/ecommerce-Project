import React from 'react'
import './CollectionOverview.styles.scss'
import { connect } from 'react-redux'
import CollectionPreview from '../Collection-preview/CollectionPreview.component'
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../Redux/Shop/Shop.selector'


const CollectionOverview = ({collection}) => (
    <div className = 'collection-overview'>
        {
            collection.map(({id, ...otherPreviewProps}) => (
                <CollectionPreview key = {id} {...otherPreviewProps} />
            ) )
        }
    </div>
)

const mapStateToProps = () => createStructuredSelector({
    collection: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview) 