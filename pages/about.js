import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
//import utilStyles from '../public/utils.modules.css'
import Link from 'next/link'
import Date from '../components/date'

import Reset from '../components/Reset'
import Back from '../components/Back'
export default function AboutMe() {
  return (
<>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>


          <section className='section'>
          <h1>About</h1>
          coming soon
          </section>
</>
  )
}
