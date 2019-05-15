const router = require('express').Router()
module.exports = router

router.get('/invite', (req, res, next) => {
  try {
    res.send('../../client/components/invite.js')
  } catch (err) {
    next(err)
  }
})

router.get('/rsvp', (req, res, next) => {
  try {
    res.send('../../client/components/rsvp.js')
  } catch (err) {
    next(err)
  }
})

router.get('/attend', (req, res, next) => {
  try {
    res.send('../../client/components/attend.js')
  } catch (err) {
    next(err)
  }
})

router.get('/decline', (req, res, next) => {
  try {
    res.send('../../client/components/decline.js')
  } catch (err) {
    next(err)
  }
})



router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
