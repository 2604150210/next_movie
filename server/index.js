const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})

const handler = app.getRequestHandler()

// prepare 方法是准备一下 next 应用
app.prepare().then(() => {
  const server = express()

  server.get('/hello', (req, res) => {
     res.send('Hello Next.js')
  })

  server.get('*', (req, res) => {
    handler(req, res)
  })

  server.listen(3000, () => console.log('服务器启动成功，请访问: http://localhost:3000'))
})