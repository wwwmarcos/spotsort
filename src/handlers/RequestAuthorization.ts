import { Request, Response } from 'express'
import SpotifyWebApi from 'spotify-web-api-node'
import { getConfig } from '../config'

const config = getConfig()


const getIdFromUrl = (playlistUrl: string): string | undefined => {
  try {
    const url = new URL(playlistUrl)
    const { pathname } = url
    return pathname.split('/').pop() 
  } catch (error) {
    return undefined
  }
}

export const RequestAuthorization = (req: Request, res: Response) => {
  const playlistUrl = req.query.p as string
  const playlistId = getIdFromUrl(playlistUrl)

  if (!playlistId) {
    return res.redirect('/error?m=could not get id from playlist url')
  }

  const scopes = [
    'playlist-read-collaborative', 
    'playlist-modify-public', 
    'playlist-read-private',
    'playlist-modify-private'
  ]

  const spotify = new SpotifyWebApi(config.spotify)
  res.redirect(spotify.createAuthorizeURL(scopes, playlistId))
}