import React, { useEffect, useState } from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import { getChildrenToRender } from "../../lib/util/landing";
import { isImg } from "../../lib/util/landing";

export default function Footer(props) {
  const { dataSource, isMobile, ...otherProps } = props;
  const [children, setChildren] = useState([]);
  useEffect(() => {
    const data = dataSource.block.children.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === "string" &&
            title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });
    setChildren(data);
  }, [props]);

  return (
    <div {...otherProps} {...dataSource.wrapper}>
      <OverPack {...dataSource.OverPack}>

        <TweenOne
          animation={{ y: "+=30", opacity: 0, type: "from" }}
          key="copyright"
          {...dataSource.copyrightWrapper}
        >
          <div {...dataSource.copyrightPage}>
            <div {...dataSource.copyright}>{dataSource.copyright.children}</div>
          </div>
        </TweenOne>
      </OverPack>
    </div>
  );
}
