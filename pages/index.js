/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import Feature1 from "../components/landing/Feature1";
import Feature2 from "../components/landing/Feature2";
import Feature7 from "../components/landing/Feature7";
import {
  Banner00DataSource,
  Feature10DataSource,
  Feature20DataSource,
  Feature70DataSource,
} from "../lib/data.source";
import AppLayout from "../components/landing/Layout";

export default function Home() {
  const children = [
    <Feature1
      id="Feature1_0"
      key="Feature1_0"
      dataSource={Feature10DataSource}
    />,
    <Feature2
      id="Feature2_0"
      key="Feature2_0"
      dataSource={Feature20DataSource}
    />,
    <Feature7
      id="Feature7_0"
      key="Feature7_0"
      dataSource={Feature70DataSource}
    />,
  ];

  return (
    <div className="templates-wrapper">
      <AppLayout
        BannerDataSource={Banner00DataSource}
        imgSrc={"/images/banner-home.jpg"}
      >
        {children}
      </AppLayout>
    </div>
  );
}
