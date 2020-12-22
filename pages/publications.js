import React from 'react'
import NoSSR from 'react-no-ssr'
import Reset from '../components/Reset'
import Back from '../components/Back'

const publications = () => {

  // Wrap WebGL-related components with NoSSR to disable server-side rendering
  return  (
    <>
    <Reset/>
      <div className="space background">
      <div  className="content">
          black black
        <Back/>
      </div>
      </div>
    </>
  )
}

export default publications
