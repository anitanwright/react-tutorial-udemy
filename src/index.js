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

// Booklist Mini Project

//setup vars
const books = [
  {
    id: 1,

    img: 'https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Diary of a Wimpy Kid',
    author: 'Sum Dood',
  },

  {
    id: 2,

    img: 'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._AC_SX368_.jpg',
    title: 'If Animals Kissed Goodnight',
    author: 'Ann Whitford Paul, David Walker',
  },
  {
    id: 4,

    img: 'https://images-na.ssl-images-amazon.com/images/I/41w4B0f21VL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
  },
  {
    id: 3,

    img: 'https://m.media-amazon.com/images/I/61zGOvBSgAL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Where the Wild Things Are',
    author: 'Maurice Sendak',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        const { img, title, author } = book
        //spread operator
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}
const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert('Hello World')
  }
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}></button>
      <button type='button'></button>
    </article>
  )
}

// comment out the renders that don't go with the function chosen above to see the result in the browser.

//ReactDom.render(<Hello />, document.getElementById('root'))
//ReactDom.render(<Saying />, document.getElementById('root'))
//ReactDom.render(<Greeting />, document.getElementById('root'))
ReactDom.render(<BookList />, document.getElementById('root'))
