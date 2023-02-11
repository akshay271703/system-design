const app = require('express')();
const PORT = process.env.PORT || 3000;
const { refillTokenBucket, tokenBucketMiddleWare } = require('./token-bucket');

app.get('/token-bucket', tokenBucketMiddleWare,  (req, res) => {
  res.send({ message: 'Successful' })
})

app.listen(PORT, () => {
  console.log('Rate limiter running at port ', PORT);
  refillTokenBucket(); // Initiate fir load for token bucket algorithm
})