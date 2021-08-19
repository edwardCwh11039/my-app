import React, { useEffect, useState } from "react";
import { enquireScreen } from "enquire-js";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import Nav0 from "./Nav0";
import Footer1 from "./Footer1";
import Banner0 from "./Banner0";
import { Footer10DataSource, Nav00DataSource } from "../../lib/data.source";

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default function AppLayout(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [elements, setElements] = useState([]);
  useEffect(() => {
    let mobile = null;
    let items = React.Children.toArray(props.children);
    enquireScreen((b) => {
      mobile = !!b;
      setIsMobile(!!b);
    });
    items = items.map((item) => React.cloneElement(item, { isMobile: mobile }));
    setElements(items);
  }, [props]);

  return (
    <div className="templates-wrapper">
      <Layout className="layout">
        <Nav0
          id="Nav0_0"
          key="Nav0_0"
          dataSource={Nav00DataSource}
          isMobile={isMobile}
        />
        <Content>
          <Banner0
            id="Banner0_0"
            key="Banner0_0"
            dataSource={props.BannerDataSource}
            imgSrc={props.imgSrc}
            isMobile={isMobile}
          />
          <div className="site-layout-content">{elements}</div>
        </Content>
        <Footer style={{ padding: "0" }}>
          <Footer1
            id="Footer1_0"
            key="Footer1_0"
            dataSource={Footer10DataSource}
            isMobile={isMobile}
          />
        </Footer>
      </Layout>
    </div>
  );
}
