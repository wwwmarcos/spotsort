import { Request, Response } from 'express'

export const Error = (req: Request, res: Response) => {
  const message = req.query.m

  const html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>spotsort</title>
    </head>
    <body style="background-color:red;">
      <center>
        <h1>error</h1>
        <h2>${message}</h2>
      </center>
    </body>
  </html>`

  res.send(html)
}
