/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import AppLayout from "../components/landing/Layout";
import { Contact00DataSource, ContactBannerDataSource } from "../lib/data.source";
import Contact0 from "../components/landing/Contact0";

export default class Home extends React.Component {
  render() {
    const children = [
      <Contact0
        id="Contact0_0"
        key="Contact0_0"
        dataSource={Contact00DataSource}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        <AppLayout
          BannerDataSource={ContactBannerDataSource}
          imgSrc={"/images/banner-home.jpg"}
        >
          {children}
        </AppLayout>
      </div>
    );
  }
}
