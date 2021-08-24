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
    USER_POOL_ID: "ap-southeast-1_1aLfo0IbC",
    APP_CLIENT_ID: "5ra0abetppv5pr23qekcdhjs1p",
    IDENTITY_POOL_ID: "ap-southeast-1:3807d865-1e4e-45ef-84fb-07e3e56a501a",
  },
};

export default config;
