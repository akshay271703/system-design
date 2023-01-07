# Content Delivery Network

`CDN are geographically dispersed servers used to serve static content like images, videos, CSS, JS bundle etc `

### How does a CDN work

When a user visits a website, some static data needs to be fetched. This data will come from the server closest to the user geographically. If the data in that server is not present then it is fetched from the original source and then cached to this server.

When the data is fetched from the original source, HTTP metadata will be returned in headers along with TTL (time to live) after which this content will expire.

### Other mentions regarding a CDN

- These are run by third party network, and a client is charged for data transfers in and ouut. Infrequently access data therefore should be removed whenever possible.
- Setting appropraite TTL is important, it should neither be too short or too long because of the above mentioned reason.
- `CDN Fallback` - system should identify when CDN are down and the request should be made temporarily from the orignal source
- Static assets and bundles should be fetched from CDN instead of web servers for better performance
- Database load is greatly reduced if the traffic and high and muultiple requests are only for requesting static assets
