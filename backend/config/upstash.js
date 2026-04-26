import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// hardcoding creds since .env read not working
const redis = new Redis({
  url: "https://infinite-tick-106117.upstash.io",
  token: "gQAAAAAAAZ6FAAIgcDJiZTE2OGVkMDM0OTQ0MTVkYjVlODdiY2M1ZGYzZjI4Yw" 
});

// limiter that allows 10 requests per 20 seconds
const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(4,"10 s")
});

export default ratelimit;