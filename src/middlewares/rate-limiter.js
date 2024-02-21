import { CacheProviders } from "../cache/cache-factory.js"

export const rateLimiter = async (req, res, next) => {
  const cacheClient = CacheProviders.Redis()
  const cacheKey = `events-${req.method}`.toLocaleLowerCase()
  const rate = Number(await cacheClient.get(cacheKey))
  if (rate) {
    if (rate >= process.env.RATE_LIMIT) {
      res.sendStatus(429)
      return
    }
    await cacheClient.incr(cacheKey)
  } else {
    await cacheClient.set(cacheKey, 1, "EX", process.env.RATE_DURATION)
  }
  next()
}
