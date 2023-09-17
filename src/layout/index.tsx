import React, { PropsWithChildren } from "react";
import { Header } from "./Header";

// export const DashBoard = ({children}: PropsWithChildren) => {

//   return <>
//     <Header/>
//     {children}
//   </>
// }

export const DashBoard = (Component: () => JSX.Element) => (
  <>
    <Header/>
    <Component/>
  </>
)