import React from 'react'
import NoSSR from 'react-no-ssr'

import Scene from '../components/Scene'
import Loading from '../components/Loading'

import '../styles/main.scss'

/**
 * Implements main page
 */
const Index = () => {

  // Wrap WebGL-related components with NoSSR to disable server-side rendering
  return (
<>
sudo npm run-script build  <br/>
npm run watchme<br/>
npm start <br/>

<a href="/posts/about">About me</a><br/>
<a href="/posts/publications">Publications</a><br/>
<a href="/posts/playground">Playground</a><br/>
<a href="/posts/contact">Contact</a><br/>
</>
  )
}

export default Index
