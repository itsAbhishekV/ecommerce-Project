import React from "react";
import './Directory.styles.scss';
import MenuItem from "../MenuItem/MenuItem.component";

class Directory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://ih0.redbubble.net/image.614370564.3414/flat,1000x1000,075,f.u4.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return(
            <div className={'directory'}>
                {
                    this.state.section.map(({id, imageUrl, ...otherMenuItemProps}) =>
                        (
                            <MenuItem key = {id} imageUrl={imageUrl} {...otherMenuItemProps} />
                        ))
                }
            </div>
        )
    }
}

export default Directory;