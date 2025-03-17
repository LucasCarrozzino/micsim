
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/micsim/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 672, hash: 'c3f43955b99d127180934b8e8c718675a4bb59e7600d69b0fbd4c3a5aae1f5bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '9b82cc00ef1122dfe8a8b135f8c0e94e58fcffaf9a2c86fc2fda055a81c9e5d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NOQKB7TT.css': {size: 23913, hash: 'aOxA0/QGZn0', text: () => import('./assets-chunks/styles-NOQKB7TT_css.mjs').then(m => m.default)}
  },
};
