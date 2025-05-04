
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Vijays2021.github.io/personal-tracker/',
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
    'index.csr.html': {size: 23617, hash: 'a0290133cc30ccb8626941f117c56643dd62ca604c2aa09105a4c243065d3f1c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17191, hash: 'fb05ecf49e9c2bda852859cfc34133ed7c1324217651f996040f20a78cf6caf0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28213, hash: 'cd4803a4f91b9b0643e41f942f7b8c06098327a320f6ac9f8ba4ba8782e5ab3f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'stats/index.html': {size: 29152, hash: '99f2cee3bb8eac9ff574f2c3444c5c2d39f0a2e290c724aa7f6e8960ae2aa067', text: () => import('./assets-chunks/stats_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
