/* eslint-disable @typescript-eslint/no-var-requires */
// craco typescript config  
const CracoSwcPlugin = require('craco-swc');

export default {
  plugins: [
    {
      plugin: CracoSwcPlugin,
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: 'es2017',
            parser: {
            syntax: "typescript",
              tsx: true,
              decorators: true,
              dynamicImport: true,
            }
          }
        }
      }
    }
  ]
}
