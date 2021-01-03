
import Back from '../components/sharedheader'
import Head from 'next/head'
import Link from 'next/link'
import Menu from '../components/Menu'
const name = 'Phil Gainley'
export const siteTitle = 'AR/VR'

export default function Layout({ children, home }) {
  return (
    <div className='container'>


      <header className='header'>
        {home ? (
          <>
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn about AR/VR with Phil Gainley"
            />
            <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>

    </>
        ) : (
          <>
          part 2
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className='headerImage borderCircle'
                  alt={name}
                />
              </a>
            </Link>
            <h2 className='headingLg'>
              <Link href="/">
                <a className='colorInherit'>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Menu/>
    </div>
  )

}
