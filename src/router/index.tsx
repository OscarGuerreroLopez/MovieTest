import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Loader } from "../components";
const Home = lazy(() => import("../pages/home"));
const Details = lazy(() => import("../pages/details"));

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={Details} />

          <Route component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
