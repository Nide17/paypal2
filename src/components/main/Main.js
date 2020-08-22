import React from 'react'

import VideoAbove from './videoabove/VideoAbove'
import Helping from './helping/Helping';
import Yoga from './yoga/Yoga';
import Spend from './spend/Spend';
import Pay from './pay/Pay';
import Honey from './honey/Honey';
import Brands from './brands/Brands';
import Join from './join/Join';
import Clock from './clock/Clock';
import Disclosure from './disclosure/Disclosure';
import Video from './video/Video';
import Business from './payPalBusiness/Business';
import NewResponse from './newResponse/NewResponse';

const Main = (props) => {

    return (
        <div style={{ backgroundColor: "#fff" }}>
            <VideoAbove
                isBusiness={props.isBusiness}
                isPersonal={props.isPersonal}
            />
            <Video />
            <NewResponse />
            <Business />
            <Helping />
            <Yoga />
            <Spend />
            <Pay />
            <Honey />
            <Brands />
            <Join />
            <Clock />
            <Disclosure />
        </div>
    )
}

export default Main
