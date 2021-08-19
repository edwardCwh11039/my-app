import React from "react";
export const Nav00DataSource = {
  wrapper: { className: "header0 home-page-wrapper" },
  page: { className: "home-page" },
  logo: {
    className: "header0-logo",
    children: "/logo/png/WhiteNoBackground.png",
    link: "/",
  },
  Menu: {
    className: "header0-menu",
    children: [
      {
        name: "item0",
        className: "header0-item",
        children: {
          href: "/about",
          children: [{ children: "About Us", name: "text" }],
        },
      },
      {
        name: "item1",
        className: "header0-item",
        children: {
          href: "/vehicle",
          children: [{ children: "Services", name: "text" }],
        },
        subItem: [
          {
            name: "sub0",
            className: "item-sub",
            children: {
              className: "item-sub-item",
              children: [
                {
                  name: "title",
                  href: "/vehicle",
                  className: "item-title",
                  children: "Our Truck",
                },
              ],
            },
          },
        ],
      },
      {
        name: "item2",
        className: "header0-item",
        children: {
          href: "/contact",
          children: [{ children: "Contact Us", name: "text" }],
        },
      },
    ],
  },
  mobileMenu: { className: "header0-mobile-menu" },
};
export const Banner00DataSource = {
  wrapper: { className: "banner0" },
  textWrapper: { className: "banner0-text-wrapper" },
  title: {
    className: "banner0-title",
    children: "Welcome to Kinta",
  },
  content: {
    className: "banner0-content",
    children: "一个高效的页面动画解决方案",
  },
  button: { className: "banner0-button", children: "Check our Truck" },
};
export const AboutBannerDataSource = {
  wrapper: { className: "banner1" },
  textWrapper: { className: "banner1-text-wrapper" },
  title: {
    className: "banner1-title",
    children: "About Us",
  },
};
export const ContactBannerDataSource = {
  wrapper: { className: "banner1" },
  textWrapper: { className: "banner1-text-wrapper" },
  title: {
    className: "banner1-title",
    children: "Contact Us",
  },
};
export const VehiclesBanner03DataSource = {
  wrapper: { className: "banner1" },
  textWrapper: { className: "banner1-text-wrapper" },
  title: {
    className: "banner1-title",
    children: "Our Vehicles",
  },
};
export const Feature10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children: "/images/about.jpg",
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: { className: "content1-title", children: "About Us" },
  content: {
    className: "content1-content",
    children:
      "Kinta Auto Supply is a Malaysian family owned company, operating since 1996. We offer high quality Japan and China Trucks Including Hino, Mercedes-Benz, Fuso, Isuzu and  etc... Quality is our passion at Kinta Auto Supply.\n We're local, with a global reach - supplying vehicles into Asia.",
  },
};
export const Feature20DataSource = {
  wrapper: { className: "home-page-wrapper content2-wrapper" },
  OverPack: { className: "home-page content2", playScale: 0.3 },
  imgWrapper: { className: "content2-img", md: 10, xs: 24 },
  img: {
    children: "https://zos.alipayobjects.com/rmsportal/tvQTfCupGUFKSfQ.png",
  },
  textWrapper: { className: "content2-text", md: 14, xs: 24 },
  title: { className: "content2-title", children: "分布式中间件" },
  content: {
    className: "content2-content",
    children:
      "金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。",
  },
};
export const Feature70DataSource = {
  wrapper: { className: "home-page-wrapper feature7-wrapper" },
  page: { className: "home-page feature7" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature7-title-wrapper",
    children: [
      {
        name: "title",
        className: "feature7-title-h1",
        children: "Our Vehicles",
      },
      {
        name: "content",
        className: "feature7-title-content",
        children: "You can click and join the card below.",
      },
    ],
  },
  blockWrapper: {
    className: "feature7-block-wrapper",
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: "block0",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          href: "/vehicles",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "Our Truck",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "Click to check all available truck.",
            },
          ],
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 6,
        className: "block",
        title: {
          className: "logo",
          children: "/logo/png/WhiteNoBackground.png",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: "Animation specification and components of Ant Design.",
            },
          ],
        },
      },
      {
        name: "block1",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "Services" },
        childWrapper: {
          children: [
            { name: "link0", href: "#", children: "Vehicles on Sale" },
            { name: "link1", href: "#", children: "Admin Login" },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 6,
        className: "block",
        title: { children: "About" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "About Us" },
            { href: "#", name: "link1", children: "Contact Us" },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <span>
        ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
export const Content130DataSource = {
  OverPack: {
    className: "home-page-wrapper content13-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      { name: "title", children: "Our Story", className: "title-h1" },
      {
        name: "content",
        children: (
          <p>
            "Kinta offers an extensive range of pre-owned quality Used Trucks
            for sale in Melbourne, Sydney, Brisbane, Adelaide & Perth. We have
            one of the largest ranges of Used Trucks to select from combined
            with multiple locations around Australia, to make purchasing your
            next truck an effortless experience. Our experienced Used Truck team
            have a well-earned reputation of providing quality pre- owned trucks
            that have been sourced to meet our customer's need. The purchasing
            of Used Trucks is a serious business and our experienced team source
            our vehicles from a range of truck makes and models to suit a
            variety of needs and budgets. Our trucks are sourced with checks in
            place to ensure that only quality trucks are offered for sale, we
            take safety and customer satisfaction seriously.Our Used Truck
            Division has gone from strength to strength over the years and now
            offers one of the largest selections of pre-owned trucks in the
            country. With dealerships in Victoria, New South Wales, Queensland,
            Western Australia and South Australia we offer a wide range of
            brands including Mercedes Benz, Freightliner, Fuso, Hino, Kenworth,
            Western Star, Man, Volvo, Mack, Iveco, International and many more.
            Talk to one of our team about your transport needs and we will be
            happy to provide options and solutions for your business
            requirements."
          </p>
        ),
        className: "title-content",
      },
    ],
  },
};
export const Contact00DataSource = {
  wrapper: { className: "home-page-wrapper content10-wrapper" },
  Content: {
    className: "icon-wrapper",
    children: {
      icon: {
        className: "icon",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg",
        name: "主要图标",
      },
      iconShadow: {
        className: "icon-shadow",
        children:
          "https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg",
        name: "图标影阴",
      },
      url: { children: "https://gaode.com/place/B0FFH3KPBX", name: "跳转地址" },
      title: { children: "大会地址", name: "弹框标题" },
      content: {
        children: "蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号",
        name: "弹框内容",
      },
    },
  },
};
export const MapConfig = {
  apiKey: "AIzaSyCJyOQu2VayURTvT45-Y-7ycD_ezklWTk4",
  LatLng: { lat: 3.2398415560878973, lng: 101.69658654026452 },
  zoom: 17,
  mapId: "c5d6fedefdd93979",
};
export const ContactConfig = {
  wrapper: "contact-wrapper",
  content: [
    {
      wrapper: "contact-wrapper-detail",
      title: "Get In Touch",
      content: [
        {
          title: "Address",
          data: "No 19 Jalan Tib 1/2 Taman Industri Bolton, 68100 Batu caves Selangor",
        },
        {
          title: "Phone",
          data: "0361895519",
        },
        {
          title: "Email",
          data: "-",
        },
      ],
    },
    {
      wrapper: "contact-wrapper-detail",
      title: "Business Hours",
      content: [
        { title: "Mon", data: "9:00AM - 5:30PM" },
        { title: "Tue", data: "9:00AM - 5:30PM" },
        { title: "Wed", data: "9:00AM - 5:30PM" },
        { title: "Thu", data: "9:00AM - 12:00AM" },
        { title: "Fri", data: "9:00AM - 5:30PM" },
        { title: "Sat", data: "9:00AM - 1:00PM" },
        { title: "Sun", data: "Closed" },
      ],
    },
  ],
};
