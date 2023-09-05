import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import PublicRouter from './routers/PublicRouter'

const app: express.Application = express()
const env = process.env

app.use(express.json())

app.use(PublicRouter)

app.listen(env.SERVER_PORT, () => {
    console.log('server started');
})