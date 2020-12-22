import Link from 'next/link'
import Head from "next/head";
import React from 'react';


//import { Router, Route } from 'react-router-dom';

//https://dev.to/rajnishkatharotiya/import-files-without-deep-nesting-relative-path-in-next-js-14ed
//import { history } from '/_helpers';
//import history from '_helpers';



// Add this wherever you render your code...
<Head>
    <script dangerouslySetInnerHTML={{ __html: "<script>alert('hello')</script>" }} />
</Head>

export default function AboutMe() {
  return (
    <>
      <h1>About me</h1>

      <body>
        <canvas id="glCanvas" width="640" height="480"></canvas>

        //

      </body>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
