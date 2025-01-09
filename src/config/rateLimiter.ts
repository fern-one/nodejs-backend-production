import { Connection } from 'mongoose'
import { RateLimiterMongo } from 'rate-limiter-flexible'

export let rateLimiterMogo: null | RateLimiterMongo = null

const DURATION = 60
const POINTS = 10

export const initRateLimiter = (mongooseConnection: Connection) => {
    rateLimiterMogo = new RateLimiterMongo({
        storeClient: mongooseConnection,
        points: POINTS,
        duration: DURATION
    })
}