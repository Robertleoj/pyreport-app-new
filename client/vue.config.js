const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        port: 8081
    }
    // outputDir: path.resolve(__dirname, "../public")
})
