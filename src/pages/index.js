import React from 'react'
import Link from 'gatsby-link'
import '../styles/typography.scss'

export default () => 
  <div>
    <h1>This will be my blog</h1>
    <p>work in progress</p>
    <img src="http://lorempixel.com/400/200/" />
    <br />
    <Link to="/my-second-gatsby-page/">Link</Link>
  </div>