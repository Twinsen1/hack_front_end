function getStyledJSXPlugin() {
  return {
    plugin: {
      overrideCracoConfig({cracoConfig}) {
        cracoConfig.babel = {}
        cracoConfig.babel.plugins = []
        cracoConfig.babel.plugins.push("styled-jsx/babel")

        return cracoConfig
      }
    }
  }
}

module.exports = {
  plugins: [getStyledJSXPlugin()]
}
