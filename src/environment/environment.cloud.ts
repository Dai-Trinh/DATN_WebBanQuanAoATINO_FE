export const environment = {
  production: true,
  api_end_point: 'http://localhost:9092',
  api_end_point_preview: 'http://localhost:9092/assets',
  api_end_point_download: 'http://localhost:9092/api/assets',
  keycloak: {
    issuer: 'https://sso.xfactory.vn/auth/',
    realm: 'dev',
    clientId: 'angular-client',
  },
  BASE_API_URI: {
    NOTIFICATION_SERVICE: 'http://apiitc.xfactory.vn/',
  },
};
