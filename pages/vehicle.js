import React from "react";
import AppLayout from "../components/landing/Layout";
import Vehicle from "../components/landing/Vehicle";
import { VehiclesBanner03DataSource } from "../lib/data.source";

export default class Home extends React.Component {
  render() {
    const children = [<Vehicle id="vehicle" key="vehicle" />];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        <AppLayout
          BannerDataSource={VehiclesBanner03DataSource}
          imgSrc={"/images/banner-home.jpg"}
        >
          {children}
        </AppLayout>
      </div>
    );
  }
}
