const appPort = process.env.PORT || 3000
const currentHost = process.env.APP_HOST || `http://localhost:${appPort}`

export const getConfig = () => ({
  appPort,
  spotify: {
    redirectUri: `${currentHost}/callback`,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  }
})
