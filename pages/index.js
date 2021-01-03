
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
//import utilStyles from '../public/utils.modules.css'
import Link from 'next/link'
import Date from '../components/date'
import Menu from '../components/Menu'


export default function Index() {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
    <section className=' blogsection section'>
      <h2>What's new?</h2>

asdfasdf

    </section>
</>
  )
}
