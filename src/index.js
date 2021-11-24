/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDom from 'react-dom'

// stateless functional component
// always return JSX

function Greeting() {
  return <h4>This is Anita and this is my first component</h4>
}

const Hello = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h4', {}, 'hello world')
  )
}

ReactDom.render(<Hello />, document.getElementById('root'))

// comment out one of the renders to see the change in the browser

ReactDom.render(<Greeting />, document.getElementById('root'))
