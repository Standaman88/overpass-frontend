import React from 'react'
import ReactDOM from 'react-dom'
import HomeView from './views/HomeView'

class SinglePageApp extends React.Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}

ReactDOM.render(<SinglePageApp children={<HomeView />} />, document.getElementById('root'))
