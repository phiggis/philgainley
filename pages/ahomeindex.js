import React from 'react'
import NoSSR from 'react-no-ssr'
import Menu from '../components/Menu'

const Index = () => {

  // Wrap WebGL-related components with NoSSR to disable server-side rendering
  return (
<>
          <link rel="stylesheet" href="/homepage.css" />
<h1>hello world </h1>

</>
  )
}

export default Index
