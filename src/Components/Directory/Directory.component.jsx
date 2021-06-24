import React from "react";
import './Directory.styles.scss';
import MenuItem from "../MenuItem/MenuItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../Redux/Directory/Directory.selector";


const Directory = ({section}) =>(
    <div className={'directory'}>
        {
            section.map(({id, imageUrl, ...otherMenuItemProps}) =>
                (
                    <MenuItem key = {id} imageUrl={imageUrl} {...otherMenuItemProps} />
                ))
        }
    </div>
)

const mapStateToProps = () => createStructuredSelector({
    section: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);