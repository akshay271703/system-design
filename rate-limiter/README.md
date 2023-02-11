# Rate limiter

A rate limiter is used to control or rate the amount of client request sent. This mechanism can be implemented on both client as well as server side. 
Implementing on the client side is not advisable as it can be forged as well as we loose the amount of flexibility available on the client machine. It will be best to implement it on server side and more probably using an API gateway. 

# Benefits of Rate limiter

- Prevents startvation of resource caused by a denial of service (DOS) attack.
- Reduces cost as excessive request are not allowed to route / sent to the server to process. 
- Prevents server from overloading. 

## Algorithms for rate limiting

1. Token Bucket
2. Leaking bucket
3. Fixed window counter
4. Sliding window log
5. Sliding window counter