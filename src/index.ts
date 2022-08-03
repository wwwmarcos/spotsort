import express from 'express'
import { getConfig } from './config'
import { RequestAuthorization } from './handlers/RequestAuthorization'
import { Callback } from './handlers/Callback'
import { Index } from './handlers/Index'
import { Success } from './handlers/Success'

const config = getConfig()
const app = express()

app.get('/', Index)
app.get('/auth', RequestAuthorization)
app.get('/callback', Callback)
app.get('/success', Success)

app.listen(config.appPort,
  () => console.log(`running at ${config.appPort}`))
