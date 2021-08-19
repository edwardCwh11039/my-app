import React from "react";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";

class Banner extends React.PureComponent {
  render() {
    const { ...currentProps } = this.props;
    const { dataSource, imgSrc } = currentProps;
    delete currentProps.dataSource;
    delete currentProps.isMobile;
    delete currentProps.imgSrc;
    return (
      <div
        {...currentProps}
        {...dataSource.wrapper}
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div {...dataSource.textWrapper}>
          <div key="title" {...dataSource.title}>
            <h1 style={{ color: "#fff" }}>{dataSource.title.children}</h1>
          </div>
          {dataSource.button && (
            <Button ghost key="button" {...dataSource.button}>
              {dataSource.button.children}
            </Button>
          )}
        </div>
        {dataSource.button && (
          <TweenOne
            animation={{ y: "-=20", yoyo: true, repeat: -1, duration: 1000 }}
            className="banner0-icon"
            key="icon"
          >
            <DownOutlined />
          </TweenOne>
        )}
      </div>
    );
  }
}
export default Banner;
