import React from 'react'
import ReactDOM from 'react-dom'
import { Header, SideNav } from '../dist/vacation-offline-components.min.js'
import { userInfo, uid } from './mock'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header userInfo={userInfo} />
                <SideNav uid={uid} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))