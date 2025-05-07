
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/personal-tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/personal-tracker"
  },
  {
    "renderMode": 2,
    "route": "/personal-tracker/stats"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23589, hash: 'be3f25e938fe5574136db3888ceef5fe5e581464797d369729778a50e98cb878', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17163, hash: 'b32b025e9cfb521efadd99430d69b86f9fa4d55eddcefefdf8bc6c8d8e526def', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28185, hash: 'd241544b424afb5197162431d127fdb709c8786f7e52e4ce8609c76791b7e971', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'stats/index.html': {size: 29124, hash: '2d172a5c7e5fd88dfda572716a5a27967760ea46da7c8b0115f8be3968d92c9a', text: () => import('./assets-chunks/stats_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
