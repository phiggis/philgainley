
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
//import utilStyles from '../public/utils.modules.css'
import Link from 'next/link'
import Date from '../components/date'
import Menu from '../components/Menu'

export default function Blog({ allPostsData }) {
  return (
    <>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
        </Layout>


      <section className=' section list'>
        <h1>What's new?</h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => (

            //const x ="<Date dateString={date}/> <a>{title}</a>"
            <li key={id}>
               <Link href={`/posts/${id}`}>
            <a>{title}</a>
              </Link>

            </li>


          ))}
        </ul>
      </section>
</>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
