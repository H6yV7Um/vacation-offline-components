import React from 'react'
import styles from "../style/main.css"

export default (props) => {
    const { uid = ''} = props
    if(!uid) return null
    return (
        <div className={styles.offline_side_nav}>
            <a target="_blank" href={`http://order.package.ctripcorp.com/Tour-Order-Orderoperate/pkgorderlistNew.aspx?uid=${uid}&OrderListType=QueryUserOrder&QueryValue=${uid}`}>订单查询</a>
            <a target="_blank" href={`http://booking.package.ctripcorp.com//Package-Booking-PkgOrderTrack/Orders/Home/SearchResult/?uid=${uid}`}>追单订单</a>
            <a target="_blank" href={`http://booking.package.ctripcorp.com//Package-Booking-PkgOrderTrack/Orders/Home/Input?from=&uid=${uid}`}>意向单</a>
        </div>
    )
}
