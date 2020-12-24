import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
//import utilStyles from '../public/utils.modules.css'
import Link from 'next/link'
import Date from '../components/date'
import Menu from '../components/Menu'
import Reset from '../components/Reset'
import Back from '../components/Back'
export default function playground() {
  return (

    <>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
        </Layout>
              <section className='  section'>
              <h3>Experiments</h3>
    <Link href="/Die"> WebGL </Link>
              </section>
    </>
  )
}
