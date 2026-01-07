import { _ } from './../utils/lodash/lodash.service';
import { environment as env } from '../../../environments/environment';

interface RootUrl {
  protocol: string;
  domain: string[] | string;
  port: string | number | string[] | number[] | null | undefined;
}

interface RootServer {
  production: RootUrl;
  development: RootUrl;
}

const combine = (req: RootUrl): string => {
  const { protocol, domain, port } = req;

  const random = (param: string[]): string => param[Math.floor(Math.random() * param.length)];
  const convert = (param: any[]) => param.map((res: string | number) => `${res}`);

  const response = (param: any) => (_.isString(param) || _.isNumber(param) ? [`${param}`] : _.isArray(param) ? convert(param) : []);

  return !response(port).length
    ? `${protocol}://${random(response(domain))}`
    : `${protocol}://${random(response(domain))}:${random(response(port))}`;
};

let alertShown = false;
const current = (param: RootServer): string => {
  const mode = env.production ? 'production' : 'development';
  const url = env.production ? combine(param.production) : combine(param.development);
  console.log(`[API Config] Mode: ${mode}, URL: ${url}`);
  console.warn(`🔥 API Mode: ${mode}`);
  console.error(`🌐 API URL: ${url}`);

  if (!alertShown) {
    alert(`API Mode: ${mode}\nURL: ${url}`);
    alertShown = true;
  }

  return url;
};

// :: ++++++++++++++++++++++++++++++++++++ ::

export { RootUrl, RootServer, current };
