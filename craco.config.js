const CracoLessPlugin = require('craco-less')
const { DefinePlugin } = require('webpack')
const path = require('path')
const pathResolve = str => {
  return path.resolve(__dirname, str)
}

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': pathResolve('src'),
      components: pathResolve('src/components'),
      utils: pathResolve('src/utils')
    },
    plugins: [
      new DefinePlugin({
        TITLE: '"Airbnb爱彼迎 - 全球民宿_公寓_短租_住宿_预订平台"'
      })
    ]
  }
}
