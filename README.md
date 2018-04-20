# vacation-offline-components

some components used in vacation's offline-sites

contain: Header, SideNav

## Install

```sh
npm install --save vacation-offline-components
```

## Usage

1. first，import comps from vacation-offline-components
```js
import { Header, SideNav } from 'vacation-offline-components'
```

2. next, use these components in your react component
```js
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

you should give an userInfo prop to Header and also an uid prop to SideNav 