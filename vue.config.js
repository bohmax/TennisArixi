module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/TennisArixi/'
        : '/',

    transpileDependencies: [
      'vuetify'
    ]
}
