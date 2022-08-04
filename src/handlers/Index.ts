import { Request, Response } from 'express'

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
      <h1>create a new playlist organized by bpm</h1>
      <form action="/auth" method="get">
        <input type="text" name="p" id="p" placeholder="playlist url" autofocus />
        <button type="submit" aria-label="generate new playlist">generate</button>
      </form>
    </center>
  </body>
</html>`

export const Index = (req: Request, res: Response) => {
  res.send(html)
}
