require("dotenv").config({ path: '.env' });

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
      ? require('next/constants') // Get values from `next` package when building locally
      : require('next-server/constants') // Get values from `next-server` package when building on now v2

module.exports = {
    PHASE_PRODUCTION_SERVER,
    // distDir: "_next", 
    pageExtensions: ['jsx', 'js'],
    target: 'serverless',
    generateBuildId: async() => {
        if(process.env.BUILD_ID){
            return process.env.BUILD_ID
        } else {
            return `${new Date().getTime()}`
        }
    },
    env: {
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        MONGODB_URI: process.env.MONGODB_URI,
        DEPLOY_ENV: process.env.DEPLOY_ENV,
        WEB_URL: process.env.WEB_URL,
        USE_COGNITO: process.env.USE_COGNITO
    }
    // publicRuntimeConfig: {
    //     DEPLOY_ENV: process.env.DEPLOY_ENV,
    //     WEB_URL: process.env.WEB_URL,
    //     USE_COGNITO: process.env.USE_COGNITO
    // }
}