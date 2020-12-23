
/*
import styles from '../public/layout.module.css'
import utilStyles from '../public/utils.modules.css'
*/

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

/*
// pages/_app.js
import 'public/custom.css'
import 'public/homepage.css'

// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
*/
/*
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Navbar from "./components/Navbar";

import Index from "./pages/Index";
import About from "./pages/about";
import Profile from "./pages/Profile";
//import "/public/custom.css";
// https://nextjs.org/docs/advanced-features/custom-app
function MyApp({ Component, pageProps }) {
  return (

    // Basic usage
//console.log("custom app ran");

  //  <>
//    <Component {...pageProps} />
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutme">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile/:name">
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  //  </>
  );
}


// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
/*
import Navbar from "./components/Menu";

import Home from "../pages/Home";
import Contact from "./pages/contact";
import Playground from "./pages/playground";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/playground">
            <Playground />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
*/
