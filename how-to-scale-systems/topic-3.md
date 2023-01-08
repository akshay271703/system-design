# Cache

Cache is a temporary data layer, multiple times faster than a traditional database and data in cache is stored usually in memory (RAM).
Implementation of a cache layer greatly improves the system performance as it reduces database operations / workloads.

Having a separate layer of cache can help in scaling it independently .

### How Caching works ?

Whwnever a reqest to fetch data is made, before going to database layer it checks if the data is available in cache layer or not. If the data is present is cache layer then it returns the data to the client request simply. If not then it fecth the data from the database, stores in the cache layer and then return the data back. This caching strategy is called `read-through cache`

### When to use cache

Idealy scenario to implement a cache layer is when you are working with data that is `access frequently` and `modified infrequently`. The data is relatively repititive and not too large in size.

### Points to remember when using cache

1. Keep the expiration longer to avoid refecthing data too frequently, but meanwhile not too long as the data can get inconsistent due to data modifying operations.
2. To avoid single point of failure, multiple cache servers should be available at different availability zones.
3. Make a plan to avoid the cache getting completely full. Some of the approaches (eviction policies) can be
   1. LRU (Least-recently used)
   2. LFU (Least-frequently used)
   3. FIFO (First in first out)
