const express = require('express')
const morgan = require('morgan')
const PORT = 4455
const path = require('path')
const app = express()
module.exports = app


const createApp = () => {
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use('/api', require('./api'))
  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  app.listen(PORT, () =>
    console.log(`Launched on port ${PORT}`)
  )
}

async function bootApp() {
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}
