// eslint-disable-next-line
import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LoaderUi } from "../ui/loader/Loader";
import { MainPage } from "../mainPage/Mainpage";
import { AwardsPage } from "../awardsPage/AwardsPage";
import { ContactsPage } from "../contactsPage/ContactsPage";
import Auth from "../auth/Auth";

// const MainPage = lazy(() =>
//   import("../mainPage/Mainpage" /* webpackChunkName: 'MainPage'*/)
// );
// const PlanningPage = lazy(() =>
//   import("../PlanningPage" /* webpackChunkName: 'PlanningPage'*/)
// );
//   import("../awards/Awards" /* webpackChunkName: 'AwardsPage'*/)
// );
// const ContactsPage = lazy(() =>
//   import("../ContactsPage" /* webpackChunkName: 'ContactsPage'*/)
// );
// const NotFound = lazy(() =>
//   import("../pageNoteFound/NotFound" /* webpackChunkName: 'pageNoteFound'*/)
// );import { NotFound } from '../pageNoteFound/NotFound';

export const HeaderRouting = (token) => {
  // if (token) {
    if (true) {
    return (
      <Suspense fallback={<LoaderUi />}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          {/* <Route path="/planning" component={PlanningPage} />  */}
          <Route path="/awards" component={AwardsPage} />
          <Route path="/contacts-us" component={ContactsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
  return <Auth />;
};
