# Token Bucket Algorithm

- A token bucket is a fixed capacity bucket. Tokens are refreshed in this bucket periodically.
- Each request consumes 1 token
- When a request arrives we check if there are enough tokens in the bucket
- If yes then we reduce the available token by 1 and the request goes through.
- If not then the request is dropped with proper message.


# Pros

- Easy to implement
- Memory efficient

# Cons

- Difficult to tune the bucket size and token refilling rate.