import React, { Suspense, lazy } from "react";
import { Route, Link, Switch } from "react-router-dom";
// import {LoaderUi} from "../ui/loader/Loader";
import {MainPage} from '../mainPage/Mainpage'
import {AwardsPage} from '../awards/Awards'

// const MainPage = lazy(() =>
//   import("../mainPage/Mainpage" /* webpackChunkName: 'MainPage'*/)
// );
// const PlanningPage = lazy(() =>
//   import("../PlanningPage" /* webpackChunkName: 'PlanningPage'*/)
// );
// const AwardsPage = lazy(() =>
//   import("../awards/Awards" /* webpackChunkName: 'AwardsPage'*/)
// );
// const ContactsPage = lazy(() =>
//   import("../ContactsPage" /* webpackChunkName: 'ContactsPage'*/)
// );
// const NotFound = lazy(() =>
//   import("../pageNoteFound/NotFound" /* webpackChunkName: 'pageNoteFound'*/)
// );

export const HeaderRouting = () => {
  return (
    <>
   

      {/* <Suspense fallback={<LoaderUi />}> */}
      <Suspense fallback={<div>LOADING</div> }>
        <Switch>
          <Route exact path="/"  component={MainPage} />
          {/* <Route path="/planning" component={PlanningPage} /> */}
          <Route path="/awards" component={AwardsPage} />
          {/* <Route path="/contacts-us" component={ContactsPage} />
          <Route component={NotFound} /> */}
        </Switch>
      </Suspense>
    </>
  );
};
