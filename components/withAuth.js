import React from "react";
import { Redirect } from "react-router-dom";

// https://stackoverflow.com/questions/54819721/next-js-access-localstorage-before-rendering-page

const withAuth = (Component) => {
  //https://medium.com/@ruegen/next-js-react-increment-localstorage-97161652790e

  const AuthRoute = () => {

var isAuth = false;
    if (typeof window !== "undefined") {
         isAuth = !!localStorage.getItem("token");
    }

    if (isAuth) {
      return <Component />;
    } else {
      return <Redirect to="/" />;
    }

  };

  return AuthRoute;

};

export default withAuth;
