import React from 'react'

import Document, { Head,Html, Main, NextScript } from 'next/document'
import Menu from '../components/Menu'
    //<Menu/>
/**
 * Implements the skeleton of the HTML page
 */
class MyDocument extends Document {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Html>
        <Head>

          <link rel="stylesheet" href="/custom.css" />

{/*          <Menu/> */}
        </Head>

        <body>


          <Main/>
          <NextScript/>
        </body>

        {/*language=CSS*/}
        <style jsx global>{`
          #__next {
            width: 100vw;
            height: 100vh;
          }
        `}</style>
      </Html>
    )
  }
}

export default MyDocument
