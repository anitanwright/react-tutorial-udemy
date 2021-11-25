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

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Diary of a Wimpy Kid',
  author: 'Sum Dood',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._AC_SX368_.jpg',
  title: 'If Animals Kissed Goodnight',
  author: 'Ann Whitford Paul, David Walker',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, vero
          dicta? Delectus laudantium quae nisi amet dicta deserunt modi.
          Pariatur ut debitis quae doloribus veritatis harum? Alias tempora
          dolorum mollitia!
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}
// props deconstructored you can use either method
const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h3>{author}</h3>
      {props.children}
    </article>
  )
}

// comment out the renders that don't go with the function chosen above to see the result in the browser.

//ReactDom.render(<Hello />, document.getElementById('root'))
//ReactDom.render(<Saying />, document.getElementById('root'))
//ReactDom.render(<Greeting />, document.getElementById('root'))
ReactDom.render(<BookList />, document.getElementById('root'))
