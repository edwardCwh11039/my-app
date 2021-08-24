const config = {
  s3: {
    NAME: "myappCMS",
    REGION: "ap-southeast-1",
    BUCKET: "kinta-bucket152150-dev",
  },
  apiGateway: {
    NAME: "cmsAmplify",
    URL: "https://tfnnrq95zk.execute-api.ap-southeast-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "YOUR_COGNITO_REGION",
    USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID",
  },
};

export default config;
