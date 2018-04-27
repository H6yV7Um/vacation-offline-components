import React from 'react'
const styles = require('../style/main.css')

export default (props) => {
    const { uid = '', target = '_blank'} = props
    return (
        <div className={styles.offline_side_nav}>
            <a target={target} href={`http://order.package.${formatEnv()}/Tour-Order-Orderoperate/pkgorderlistNew.aspx?uid=${uid}&OrderListType=QueryUserOrder&QueryValue=${uid}`}>订单查询</a>
            <a target={target} href={`http://booking.package.${formatEnv()}//Package-Booking-PkgOrderTrack/Orders/Home/SearchResult/?uid=${uid}`}>追单订单</a>
            <a target={target} href={`http://booking.package.${formatEnv()}//Package-Booking-PkgOrderTrack/Orders/Home/Input?uid=${uid}`}>意向单</a>
        </div>
    )
}

const formatEnv = () => {
    let envStr = 'ctripcorp.com'
    if(typeof window !== 'undefined') {
        const hostname = window.location.hostname
        if(/uat\.qa\.nt/.test(hostname)){
            envStr = 'uat.qa.nt.ctripcorp.com'
        } else if(/fat\d*.qa\.nt/i.test(hostname) || /^localhost|10\.32|127\.0/i.test(hostname)) {
            envStr = 'fat29.qa.nt.ctripcorp.com'
        } else {
            envStr = 'ctripcorp.com'
        }
    }
    return envStr
}
