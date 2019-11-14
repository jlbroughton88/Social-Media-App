import { initAuth0 } from "@auth0/nextjs-auth0";
require(dotenv).config()

export default initAuth0({
    domain: process.env.AUTH0_DOMAIN,
    client: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET, 
    scope: "openid profile",
    redirectUri: "http://localhost:5000/api/callback",
    postLogoutRedirectUri: "http://localhost:5000",
    session: {
        cookieSecret: process.env.cookieSecret,
        cookieLifetime: process.env.cookieLifetime,
        // Store id_token in session, defaults to false
        storeIdToken: false,
        // Store access_token in session, defaults to false
        storeAccessToken: false,
        // Store the refresh_token in the session, defaults to false
        storeRefreshToken: false
    }
})