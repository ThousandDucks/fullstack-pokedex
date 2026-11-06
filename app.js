const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

// test 3
const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
