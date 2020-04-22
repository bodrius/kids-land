// import React, { Suspense, lazy } from "react";
// import { Route, Link, Switch } from "react-router-dom";
// import {LoaderUi} from "../ui/loader/Loader";

// const MainPage = lazy(() =>
//   import("../MainPage" /* webpackChunkName: 'MainPage'*/)
// );
// const PlanningPage = lazy(() =>
//   import("../PlanningPage" /* webpackChunkName: 'PlanningPage'*/)
// );
// const AwardsPage = lazy(() =>
//   import("../AwardsPage" /* webpackChunkName: 'AwardsPage'*/)
// );
// const ContactsPage = lazy(() =>
//   import("../ContactsPage" /* webpackChunkName: 'ContactsPage'*/)
// );
// const NotFound = lazy(() =>
//   import("../pageNoteFound/NotFound" /* webpackChunkName: 'pageNoteFound'*/)
// );

// export const HeaderRouting = () => {
//   return (
//     <>

//       <Suspense fallback={<LoaderUi />}>
//         <Switch>
//           <Route exact path="/" component={MainPage} />
//           <Route path="/planning" component={PlanningPage} />
//           <Route path="/awards" component={AwardsPage} />
//           <Route path="/contact-us" component={ContactsPage} />
//           <Route component={NotFound} />
//         </Switch>
//       </Suspense>
//     </>
//   );
// };
