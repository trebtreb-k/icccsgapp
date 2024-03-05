import { RootServer, current } from './api.config';

// :: +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ::

const ST_USER_PICTURE = 'https://iccapp-minio.icc.co.th:9000/salestools/profile';
const ST_SLIP_URL = 'https://webapp5.icc.co.th/hr/icccsgapp/main/csgslip';

const SALESTOOLS_ANNOUNCE: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7110,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7110,
  },
};

const SALESTOOLS_AUTHEN: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7111,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7111,
  },
};

const SALESTOOLS_DEVICE: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7111,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7111,
  },
};

const SALESTOOLS_CSG_PLAN: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7113,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7113,
  },
};

const SALESTOOLS_CUSTOMER: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7114,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7114,
  },
};

const SALESTOOLS_HISHER: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7115,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7115,
  },
};

const SALESTOOLS_INCOME: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7116,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7116,
  },
};

const SALESTOOLS_WORKFLOW: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7117,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7117,
  },
};

const SALESTOOLS_PRODUCT: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7118,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7118,
  },
};

const SALESTOOLS_STORES: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7120,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7120,
  },
};


const SALESTOOLS_CHECKIN: RootServer = {
  production: {
    protocol: 'https',
    domain: 'salestoolsapi.icc.co.th',
    port: 7112,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7112,
  },
};

const HISHER_LINE: RootServer = {
  production: {
    protocol: 'https',
    domain: ['webapi.icc.co.th', 'webapi2.icc.co.th', 'webapi3.icc.co.th'],
    port: ['7007', '7061', '7062', '7063', '7064', '7065', '7066', '7067', '7068', '7069'],
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7007,
  },
};

const HISHER_APP: RootServer = {
  production: {
    protocol: 'https',
    domain: ['webapi.icc.co.th', 'webapi2.icc.co.th', 'webapi3.icc.co.th'],
    port: 7005,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th',
    port: 7005,
  },
};

const FIREBASE_OTP: RootServer = {
  production: {
    protocol: 'https',
    domain: 'us-central1-otp-service-icc.cloudfunctions.net',
    port: null,
  },
  development: {
    protocol: 'https',
    domain: 'us-central1-otp-service-icc.cloudfunctions.net',
    port: null,
  },
};


const PDPA: RootServer = {
  production: {
    protocol: 'https',
    domain: 'webapi4.icc.co.th',
    port: 7201,
  },
  development: {
    protocol: 'https',
    domain: 'webapidev.icc.co.th:',
    port: 7201,
  },
};

const PDPA_WEB: RootServer = {
  production: {
    protocol: 'https',
    domain: 'webapp5.icc.co.th/pdpa/privacy',
    port: null,
  },
  development: {
    protocol: 'https',
    domain: 'webappdev.icc.co.th/pdpa/privacy',
    port: null,
  },
};


// :: +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ::

const ST_ROOT = {
  announce: current(SALESTOOLS_ANNOUNCE),
  authen: current(SALESTOOLS_AUTHEN),
  device: current(SALESTOOLS_DEVICE),
  customer: current(SALESTOOLS_CUSTOMER),
  product: current(SALESTOOLS_PRODUCT),
  stores: current(SALESTOOLS_STORES),
  checkin: current(SALESTOOLS_CHECKIN),
  csgplan: current(SALESTOOLS_CSG_PLAN),
  workflow: current(SALESTOOLS_WORKFLOW),
  income: current(SALESTOOLS_INCOME),
  hisher: current(SALESTOOLS_HISHER),
  pdpa: current(PDPA),
  pdpa_web: current(PDPA_WEB)
};

const HH_ROOT = {
  line: current(HISHER_LINE),
  app: current(HISHER_APP),
};

const FB_ROOT = {
  otp: current(FIREBASE_OTP),
};

// :: +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ::

export { ST_ROOT, HH_ROOT, FB_ROOT, ST_USER_PICTURE, ST_SLIP_URL};
