

import React, { Suspense } from "react"

// import custom component routes
// import {
//     Route,
// } from "react-router-dom"

// define all the routes as a list:
// const allRoutes = [
//     //Main pages
//     {
//         path: '/',
//         component: HomePage,
//         name: 'Home'
//     },

// ]

// create all the routes:
// function Routes() {
//     return (
//         <React.Fragment>
//             {allRoutes.map((route_props, i) =>
//                 <Route
//                     /* pass to the router the path prop: */
//                     key={route_props.path}
//                     exact
//                     {...route_props}

//                     /* pass down the router-dom special properties to the children: */
//                     component={(props: any) => (

//                         /* the loading component: */
//                         <Suspense fallback={
//                             <div style={{
//                                 height: "100vh",
//                                 width: "100vw",
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                                 flexDirection: "column"
//                             }}>
//                                 <CircularProgress
//                                     thickness={5}
//                                     color="primary"
//                                 />
//                             </div>
//                         }>
//                             <route_props.component {...props} />
//                         </Suspense >
//                     )}
//                 />)
//             }
//         </React.Fragment>
//     )
// }
// export default Routes