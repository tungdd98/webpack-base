const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  src: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  pages: path.join(__dirname, 'src/pages'),
}

const entry = ['main', 'about'].reduce(
  (act, entry) => ({ ...act, [entry]: `${paths.src}/js/${entry}.js` }),
  {}
)

const infoPages = [
  { title: 'Dashboard', filename: 'index.html', chunks: ['main'] },
  { title: 'About', filename: 'about.html', chunks: ['about'] },
]

const htmlWebpackPlugins = infoPages.map(
  (page) =>
    new HtmlWebpackPlugin({
      title: page.title,
      template: `${paths.src}/pages/${page.filename}`,
      filename: page.filename,
      chunks: page.chunks,
      publicPath: './',
    })
)

module.exports = {
  paths,
  entry,
  infoPages,
  htmlWebpackPlugins,
}
