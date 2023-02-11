const REFILL_RATE = process.env.REFILL_RATE || 10000;
const CAPACITY = process.env.BUCKET_CAPACITY || 5;

// Map to store available token per IpAddress
let IPMap = {}

const getTokenCount = (ip) => {
  let count = IPMap[ip] // Token available for current ip
  if (count <1) return count; // 0 is counted as falsy value in next line
  IPMap[ip] = count ? count -1 : CAPACITY; // If there is a value, then decrement by 1 else set the value as max capacity from config file.
  return IPMap[ip]; // current remaining tokens
}

module.exports.refillTokenBucket = () => {
  console.log('Refilling tokens'); // Runs continuosly after REFILL_RATE milliseconds
  IPMap = {}; 
  setTimeout(() => {
    this.refillTokenBucket();
  }, REFILL_RATE);
};

module.exports.tokenBucketMiddleWare = (req, res, next) => {
  if(getTokenCount(req.ip) < 1) {
    return res.status(429).send({
      message: `Request throttled at ${new Date().toISOString()}`,
    });
  }
  next();
};
