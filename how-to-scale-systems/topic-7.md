# Database Scaling

Just like scaling mentioned like before, database can also be scaled vertically (increasing more compute power) and horizontally (adding more servers). 
Similar to previously mentioned drawbacks of vertical scaling

- A database cannot be vertically scaled infinitely
- More risk of single point of failure
- More database load / second
- Difficult to distribute data in a certain fashion

Horizontal scaling or adding up more server is also called `sharding`. Here the database is divided into multiple database called shards. Each shard shares the same schema but the data they hold might be different. How to keep & retrieve data from different shard is effectively handled by a hash function. A hash function keeps the data mapped according to shards. Example being if we want to keep a grouped data (X) in a shard (A) and another grouped data (Y) in another shard (B), we need to make sure whenever we need data (X) the shard A must be used in order to retrieve the data. 

| Shard Key | Shard Number | Data Grouped
| ----------- | ----------- | ---------- |
| 1    | Shard - X | Group 1
| 2    | Shard - X | Group 2
| 3    | Shard - X | Group 3
| 4    | Shard - X | Group 4
| 5    | Shard - Y | Group 5
| 6    | Shard - Y | Group 6
| 7    | Shard - Y | Group 7

As we can see data from groups (1-4) is kept in shard X while others are kep in shard Y. We can create a simple hash funcion to retrieve / store data effectively

STORE DATA ---- GROUP NUMBER % 4 ====> Shard Key
                [3 % 4] = 3
                        = Look for Shard Name with ID = 3
``` Group Data of Group-4 will be stored in Shard X. Similary we can use the same function to retrieve shard name from where we need to fetch data```

This is obviously a very oversimplified view of function, real functions are much more different (consistant hashing). 

The above identifier is known as shard key which might be a combination of multiple columns to uniquely identify the shard. 


Although this might seems to be a good option to scale database tier but there are several key problems that need to be addressed. 
- A single shard can contain all the frequently accessed data. This create load issue on a single shard. 
- Resharding is necessary when one of the shard is no longer available and we might need to update the hash function or other configuration to point the shard key to a new shard with the data replicated. 
- Joining tables between shards is a big issue with multiple shards, A common workout is to denormalize data