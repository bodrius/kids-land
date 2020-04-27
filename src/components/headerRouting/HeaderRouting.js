// eslint-disable-next-line
import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LoaderUi } from "../ui/loader/Loader";
import Auth from "../auth/Auth";

const MainPage = lazy(() =>
  import("../mainPage/MainPage" /* webpackChunkName: 'MainPage'*/)
);
const PlanningPage = lazy(() =>
  import("../planningPage/PlanningPage" /* webpackChunkName: 'PlanningPage'*/)
);
const AwardsPage = lazy(() =>
  import("../awardsPage/AwardsPage" /* webpackChunkName: 'AwardsPage'*/)
);
const ContactsPage = lazy(() =>
  import("../contactsPage/ContactsPage" /* webpackChunkName: 'ContactsPage'*/)
);


export const HeaderRouting = (token) => {
  if (token) {
    // if (true) {
    return (
      <Switch>
        <Suspense fallback={<LoaderUi />}>
          <Route exact path="/" component={MainPage} />
          <Route path="/planning" component={PlanningPage} />
          <Route path="/awards" component={AwardsPage} />
          <Route path="/contact-us" component={ContactsPage} />
          <Redirect to="/" />
      </Suspense>
        </Switch>
    );
  }
  return <> <Auth />;



  {/* <Suspense fallback={<LoaderUi />}>
  <Route path="/contact-us" component={ContactsPage} />
  </Suspense> */}
  </>
};
