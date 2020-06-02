
import React, { Component } from 'react'
import Link from 'next/link'


export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list_data: []
    }
  }

  componentDidMount() {
    // this.getMovieList();
  }

  render() {
    return (
      <div>
        hello NextJs
      </div>
    )
  }
}