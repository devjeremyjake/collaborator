import React, { FC } from "react";

interface HomePageLayoutProp {
  children: React.ReactNode;
}

const HomePageLayout: FC<HomePageLayoutProp> = ({ children }) => {
  return <main>{children}</main>;
};

export default HomePageLayout;
