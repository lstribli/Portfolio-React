import React from 'react'
import Context from '../Contexts/Context'


export default class HomePage extends React.Component {
  static contextType = Context;
  render() {
    // console.log(this.context)
    return (
      <div>homepage</div>
    )
  }
}