import React from 'react'
import NoSSR from 'react-no-ssr'
import Reset from '../components/Reset'
import Back from '../components/Back'

const playground = () => {
  return (
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

export default playground
