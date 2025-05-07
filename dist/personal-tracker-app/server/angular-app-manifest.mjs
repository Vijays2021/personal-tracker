
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/stats"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23572, hash: '916a66880568ba2a3dc179d1084769346d6abfb903feb7f5824d1b5b02ad4311', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17146, hash: 'c0d47c9ddacba06eaf028fe741dcbc0cc0488c322e9cabe732cf3a6395127a50', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28168, hash: 'fa84d7826beddb2d3b144d6d7ca9ed0042ea2da2ee5bddd24d604bc69f03adf8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'stats/index.html': {size: 29107, hash: '83d7b86f3d73ee2c5ac85929a76f041227500d79b3fc5f7b556d855031da6d6f', text: () => import('./assets-chunks/stats_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
