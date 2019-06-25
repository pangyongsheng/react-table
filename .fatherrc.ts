import { IBundleOptions } from 'father';
import path from 'path';

const env = process.env.NODE_ENV;

// @ts-ignore
const options: IBundleOptions = {
  esm: {
    type: 'rollup',
    importLibToEs: true
  },
  cjs: 'rollup',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', style: true }]
  ],
  // @ts-ignore
  doc: {
    base: '/react-table',
    propsParser: false,
    modifyBundlerConfig: (config) => {
      config['resolve'].alias = Object.assign({}, config['resolve'].alias, {
        '@charts': path.resolve(__dirname, 'src'),
      });
      return config;
    },
    // @ts-ignore
    htmlContext: {
      favicon: env === 'development'
        ? '/public/favicon.png'
        : '/rc-charts/public/favicon.png'
    },
    public: 'docs/public',
    indexHtml: 'docs/index.html',
    themeConfig: {
      logo: {
        src: env === 'development'
          ? '/public/logo.svg'
          : '/rc-charts/public/logo.svg',
        width: '60px',
      },
    },
    title: 'React Table',
    repository: 'https://github.com/ts-react/react-table',
    description: 'react table component',
  }
};

export default options;
