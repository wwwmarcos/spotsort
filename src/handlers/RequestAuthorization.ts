import { Request, Response } from 'express'
import SpotifyWebApi from 'spotify-web-api-node'
import { getConfig } from '../config'

const config = getConfig()

export const  RequestAuthorization = (req: Request, res: Response) => {
  const scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'playlist-modify-public'
  ]

  const state = req.query.p as string
  const spotify = new SpotifyWebApi(config.spotify)
  res.redirect(spotify.createAuthorizeURL(scopes, state))
}