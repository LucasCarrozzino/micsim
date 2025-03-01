
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/micsim/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 672, hash: '2e42ea4454edec89f41ee684aa2792ca7bd9f39b6efc3ee7a8021b2925af7b8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '5d7e6375f143c78e5c922776ba255da40fc36967fd0387815b6af3a3a781bea2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NOQKB7TT.css': {size: 23913, hash: 'aOxA0/QGZn0', text: () => import('./assets-chunks/styles-NOQKB7TT_css.mjs').then(m => m.default)}
  },
};
