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
              <section className=' section linklist'>
              <h1>Experiments</h1>
            <table>
      {/*       <tr><th>Link</th><th>Description</th></tr>  */}

            <tr> <td><Link href="/experiments/webglhelloworld"> WebGL setup in NextJS</Link>  </td>
            </tr>

{/*
                 <tr> <td><Link href="/experiments/fake3d"> Fake3d </Link>  </td>
                      <td>Show fake 3d</td> </tr>

                      <tr> <td><Link href="/experiments/followthemouse">Follow the mouse </Link>  </td>
                           <td>WebGL mixed with js</td> </tr>

*/}
            <tr> <td></td>
                <td></td>
            </tr>

            </table>



              </section>
    </>
  )
}
