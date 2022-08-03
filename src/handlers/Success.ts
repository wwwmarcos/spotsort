import { Request, Response } from 'express'

export const Success = (req: Request, res: Response) => {
  const playlistURL = req.query.url

  const html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>spotsort</title>
    </head>
    <body>
      <center>
        <h1><a href=${playlistURL}>${playlistURL}</a></h1>
      </center>
    </body>
  </html>`

  res.send(html)
}
