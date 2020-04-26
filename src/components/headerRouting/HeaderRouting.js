import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LoaderUi } from "../ui/loader/Loader";

const { MainPage } = lazy(() =>
  import("../mainPage/Mainpage" /* webpackChunkName: 'MainPage'*/)
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

const Auth = lazy(() =>
  import("../auth/Auth" /* webpackChunkName: 'AuthPage'*/)
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
  return (
    <>
      <Suspense fallback={<LoaderUi />}>
        <Switch>
          <Route path="/contact-us" component={ContactsPage} />
          <Route axact path="/" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};
