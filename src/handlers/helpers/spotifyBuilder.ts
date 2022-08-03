import SpotifyWebApi from 'spotify-web-api-node'
import { getConfig } from '../../config'

const config = getConfig()

export const buildSpotfyUserSession = async (code: string): Promise<SpotifyWebApi> => {
  const spotify = new SpotifyWebApi(config.spotify)
  const data = await spotify.authorizationCodeGrant(code)
  const accessToken = data.body.access_token
  const refreshToken = data.body.refresh_token
  spotify.setAccessToken(accessToken)
  spotify.setRefreshToken(refreshToken)

  return spotify
}