
export default {
  basePath: 'https://Vijays2021.github.io/personal-tracker',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
