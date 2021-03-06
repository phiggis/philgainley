import React from "react";
import { useParams } from "react-router-dom";
import NoSSR from 'react-no-ssr'
import withAuth from "../components/withAuth";
// https://stackoverflow.com/questions/53139884/next-js-disable-server-side-rendering-on-some-pages
const Profile = ( ) => {
  //    <NoSSR onSSR={<Loading/>}>
  const { name } = "hello world";
  //const { name } = useParams();
  return (
    <div>
      <h1 className="title is-1">This is the Profile Page</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
          <p>{name}</p>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </div>

  );
//  </NoSSR>
};



export default Profile
//export default withAuth(Profile);
