/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDom from 'react-dom'

//this is a component function so must be Capitalized
 function Greeting() {
    return <h4>This is Anita and this is my first component</h4>;
 }

// looks for 2 things: what is being rendered 
//and where it is to be rendered.
 ReactDom.render(< Greeting />, document.getElementById('root')
 );

