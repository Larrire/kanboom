import React, { PropsWithChildren } from "react";
import { Header } from "./Header";

export const DashBoard = ({children}: PropsWithChildren) => {

  return <>
    <Header/>
    {children}
  </>
}