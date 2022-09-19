import './styles/main.scss'
import Person from './scripts/Person'
import ExampleReactComponent2 from './scripts/ExampleReactComponent2'
import React from 'react'
import ReactDOM from 'react-dom'

const person1 = new Person("Jimmylan")
ReactDOM.render(<ExampleReactComponent2 />, document.querySelector("#render-react-example-here"))