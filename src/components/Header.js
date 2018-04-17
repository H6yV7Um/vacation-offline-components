import React from 'react'
import styles from "../style/main.css"

export default class Head extends React.PureComponent {

    renderUserInfo(userInfo = {}) {
        let domList = []
        const basicInfo = userInfo.basicInfo || {}
        if(basicInfo.UserName){
            domList.push(
                <li key='UserName'>
                    <em>姓名：</em>
                    <span>{basicInfo.UserName}</span>
                </li>
            )
        }
        if(basicInfo.Uid){
            domList.push(
                <li key='Uid'>
                    <em>用户名：</em>
                    <span className={styles.color_blue}>{basicInfo.Uid}</span>
                </li>
            )
        }
        if(basicInfo.CtripCardNo){
            domList.push(
                <li key='CtripCardNo'>
                    <em>卡号：</em>
                    <span className={styles.color_orange}>{basicInfo.CtripCardNo}</span>
                </li>
            )
        }
        if(basicInfo.UserGradeName){
            domList.push(
                <li key='UserCrownName'>
                    <em>级别：</em>
                    <span>{basicInfo.UserGradeName}</span>
                </li>
            )
        }
        if(basicInfo.Ani){
            domList.push(
                <li key='Ani'>
                    <em>主叫号码：</em>
                    <span>{basicInfo.Ani}</span>
                </li>
            )
        }
        if(basicInfo.Experience){
            domList.push(
                <li key='Experience'>
                    <em>积分：</em>
                    <span>{basicInfo.Experience}</span>
                </li>
            )
        }

        const userProfileInfo = userInfo.UserProfileInfo || []
        userProfileInfo.forEach(element => {
            domList.push(
                <li key={element.Name}>
                    <em>{element.Name}：</em>
                    <span>{element.Value}</span>
                </li>
            )
        })

        return domList
    }

    render() {
        let { userInfo } = this.props
        if(userInfo){
            userInfo.basicInfo = {
                ...userInfo.TagUserInfo,
                ...userInfo.UserInfo
            }
        }

        return (
            <div className={styles.offline_header_box}>
                <div className={styles.offline_header_con}>
                <img className={styles.offline_logo} src="http://picint.sh.ctriptravel.com/offline_book/indent_logo.png"/>
                <ul className={styles.offline_header_nav}>
                {
                    this.renderUserInfo(userInfo)
                }
                </ul>
                </div>
            </div>
        )
    }
}
