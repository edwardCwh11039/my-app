const config = {
  s3: {
    NAME: "myappCMS",
    REGION: "ap-southeast-1",
    BUCKET: "kinta-bucket152150-dev",
  },
  apiGateway: {
    NAME: "cmsAmplify",
    URL: "https://tfnnrq95zk.execute-api.ap-southeast-1.amazonaws.com/dev",
    REGION: "ap-southeast-1",
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_noTeGaeEv",
    APP_CLIENT_ID: "4gm37koq8gbh35ab27g4c20k3v",
    IDENTITY_POOL_ID: "ap-southeast-1:926505e3-fee5-493c-a441-10054156bb66",
  },
};

export default config;
