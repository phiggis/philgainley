import React from 'react'
import NoSSR from 'react-no-ssr'
import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'
import Scene from '../../../components/Scene'
import Loading from '../../../components/Loading'
/*
import '../../styles/main.scss'
*/
/**
 * Implements main page
 */
const Index = () => {

  // Wrap WebGL-related components with NoSSR to disable server-side rendering
  return (
    <>
    <Layout home>

    </Layout>
    <section className=' blogsection section'>
    <>
    <NoSSR onSSR={<Loading/>}>
      <Scene/>
    </NoSSR>
    </>
    </section>
</>



  )
}

export default Index
