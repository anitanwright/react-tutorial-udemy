/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

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

//Book List mini-project for nested components
// renders Book component which includes the additional 3 nested within
function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

// Book component has Image, Title, and Author components nested within.
const author = 'Sum Dood'
const Book = () => {
  const title = 'Diary of a Wimpy Kid'
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
        eslint-disable-next-line
        no-undef
        alt='Diary of a Wimpy Kid'
      />
      <h1>{title}</h1>
      <h3>{author.toUpperCase()}</h3>
      <p></p>
    </article>
  )
}

// comment out the renders that don't go with the function chosen above to see the result in the browser.

//ReactDom.render(<Hello />, document.getElementById('root'))
//ReactDom.render(<Saying />, document.getElementById('root'))
//ReactDom.render(<Greeting />, document.getElementById('root'))
ReactDom.render(<BookList />, document.getElementById('root'))
