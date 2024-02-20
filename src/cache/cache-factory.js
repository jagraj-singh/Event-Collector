import { RedisClient } from "./provider/redis.js"

export const cacheProviders = {
  Redis: () => {
    return RedisClient.getClient()
  },
}
