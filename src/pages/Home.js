import React, { Component } from 'react'

class Home extends Component {
  constructor() {
    super()

    this.items = [
      {
        title: 'ReactJS',
        description: 'Start a new ReactJS project Quickly',
        color: 'blue'
      },
      {
        title: 'Redux',
        description: 'Best practice structured redux/react app',
        color: 'red'
      },
      {
        title: 'React Router',
        description: 'Best practice structured redux/react app',
        color: 'green'
      },
      {
        title: 'SASS',
        description: 'Best practice structured redux/react app',
        color: 'yellow'
      }
    ]
  }
  render() {
    const renderedItems = this.items.map((item, index) => {
      return (
        <div className='col-3' key={index}>
          <div className={`b-t-${item.color} p-tb-2 p-lr-2 br-bl br-br t-c`}>
            <h3>{item.title}</h3>
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className='c-b-light-gray'>
          <div className='row'>
            <div className='col-12 t-c p-tb-6'>
              <h1>Redact</h1>
              <p>A redux and react boilerplate</p>
            </div>
          </div>
        </div>
        <div className='row t-c p-t-2'>
          <h2>What's included?</h2>
        </div>
        <div className='row p-tb-2'>
          {renderedItems}
        </div>
      </div>
    )
  }
}

export default Home
