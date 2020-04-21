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
//       <ul>
//         <li>
//           <Link to="/" exact>
//             Головна стор!нка
//           </Link>
//         </li>
//         <li>
//           <Link to="/planning">Планування</Link>
//         </li>
//         <li>
//           <Link to="/awards">Призи</Link>
//         </li>
//         <li>
//           <Link to="/contacts">Команда</Link>
//         </li>
//       </ul>


//       <Suspense fallback={<LoaderUi />}>
//         <Switch>
//           <Route path="/" exact component={MainPage} />
//           <Route path="/planning" component={PlanningPage} />
//           <Route path="/awards" component={AwardsPage} />
//           <Route path="/contacts" component={ContactsPage} />
//           <Route component={NotFound} />
//         </Switch>
//       </Suspense>
//     </>
//   );
// };
