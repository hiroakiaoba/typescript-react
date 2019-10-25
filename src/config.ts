const commonConfig = {
  env: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  basename: process.env.PUBLIC_PATH,
  isBrowser: typeof window !== 'undefined',
  timeoutMsec: 7000,
  pageTitle: 'godspeed portal excel',
  localstrageTokenKey: '',
  apiUrl: '',
};

const developmentConfig = {
  apiUrl: 'http://localhost:3000/api',
  baseUrl: 'http://localhost:8000',
  localstrageTokenKey: 'godspeed-excel-dev',
};

const productionConfig = {
  apiUrl: '',
  baseUrl: '',
  localstrageTokenKey: 'godspeed-excel',
};

const testConfig = {};

type IEnv = 'development' | 'production' | 'test';

type IEnvConfig =
  | typeof developmentConfig
  | typeof productionConfig
  | typeof testConfig;

const getEnvConfig = (env: IEnv): IEnvConfig => {
  if (env === 'development') return developmentConfig;
  if (env === 'production') return productionConfig;
  if (env === 'test') return testConfig;

  return developmentConfig;
};

const envConfig = getEnvConfig(process.env.NODE_ENV || 'development');

export default { ...commonConfig, ...envConfig };
