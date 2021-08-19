/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from "react";
import AppLayout from "../components/landing/Layout";
import {
  Content130DataSource,
  AboutBannerDataSource,
} from "../lib/data.source";
import Content13 from "../components/landing/Content13";

export default class Home extends React.Component {
  render() {
    const children = [
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
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
          BannerDataSource={AboutBannerDataSource}
          imgSrc={"/images/banner-home.jpg"}
        >
          {children}
        </AppLayout>
      </div>
    );
  }
}
