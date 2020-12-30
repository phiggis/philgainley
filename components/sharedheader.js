import React from 'react'



class Header extends React.Component {

    siteTitle="AR/VR";

    constructor(props, context) {
      super(props, context)
    }



  render = () => {
    return (
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
    )
  }
}


export default Header
