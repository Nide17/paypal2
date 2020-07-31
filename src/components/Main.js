import React from 'react'
import PayPalBusiness from './payPalBusiness/PayPalBusiness';
import Corona from './corona/Corona';
import Helping from './helping/Helping';
import Yoga from './yoga/Yoga';
import Spend from './spend/Spend';
import Pay from './pay/Pay';
import Honey from './honey/Honey';
import Brands from './brands/Brands';
import Responding from './responding/Responding';
import Join from './join/Join';
import Clock from './clock/Clock';
import Disclosure from './disclosure/Disclosure';

function Main() {
    return (
        <div className="main-content">
            <PayPalBusiness />
            <Corona />
            <Helping />
            <Yoga />
            <Spend />
            <Pay />
            <Honey />
            <Brands />
            <Responding />
            <Join />
            <Clock />
            <Disclosure />
        </div>
    )
}

export default Main
