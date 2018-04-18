# vacation-offline-component

一些offline-component

## Install
```

npm install --save vacation-offline-components
```

## Usage
```

import React from 'react'
import ReactDOM from 'react-dom'
import { Header, SideNav } from 'vacation-offline-components'
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
```