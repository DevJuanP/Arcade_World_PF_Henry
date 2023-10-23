import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routes from './routes/index.js'

const server = express()

server.use(morgan('dev'))
server.use(cors({
  origin: '*',
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}))

server.use('/', routes)

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

export default server