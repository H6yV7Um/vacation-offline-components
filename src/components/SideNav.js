import React from 'react'
const styles = require('../style/main.css')

export default (props) => {
    const { uid = ''} = props
    if(!uid) return null
    let from = ""
    if(typeof window !== "undefined"){
        from = window.location.href
    }
    return (
        <div className={styles.offline_side_nav}>
            <a target="_blank" href={`http://order.package.ctripcorp.com/Tour-Order-Orderoperate/pkgorderlistNew.aspx?uid=${uid}&OrderListType=QueryUserOrder&QueryValue=${uid}`}>订单查询</a>
            <a target="_blank" href={`http://booking.package.ctripcorp.com//Package-Booking-PkgOrderTrack/Orders/Home/SearchResult/?uid=${uid}`}>追单订单</a>
            <a target="_blank" href={`http://booking.package.ctripcorp.com//Package-Booking-PkgOrderTrack/Orders/Home/Input?from=${from}&uid=${uid}`}>意向单</a>
        </div>
    )
}
