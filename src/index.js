/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDom from 'react-dom'

//JSX RULES
//return single element
// use div, section, article, or Fragment
// use camelCase for HTML attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <section>
      <div>
        <h2>Hello how are you today?</h2>
        <ul>
          <li>
            <a href='#'>hello world</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
// or

const Hello = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h4', {}, 'hello world')
  )
}

// Nested Components, React Tools

function Saying() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>anita wright</h2>
const Message = () => {
  return <p>this is my message</p>
}
// comment out the renders that don't go with the function chosen above to see the result in the browser.

//ReactDom.render(<Hello />, document.getElementById('root'))
ReactDom.render(<Saying />, document.getElementById('root'))
//ReactDom.render(<Greeting />, document.getElementById('root'))
