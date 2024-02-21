import dotenv from "dotenv"
import { databaseProviders } from "../database/database-factory.js"
import { WinstonLogger } from "../logger/winston.js"
const logger = WinstonLogger.getLogger()

dotenv.config()
export default {
  postEvents: async (events, options) => {
    const dbObject = databaseProviders[process.env.DB_PROVIDER]()
    await dbObject.connect()
    logger.info(`Starting to save events for requestId : ${options.requestId}`)
    let insertQuery = `INSERT INTO event (type, item, timestamp) VALUES`
    for (let event of events) {
      insertQuery += `('${event.type}','${event.item}','${event.timestamp}'),`
    }
    insertQuery = insertQuery.slice(0, -1)
    let rows
    try {
      rows = await dbObject.query(insertQuery)
      logger.info(
        `Saved events successfully for requestId ${options.requestId}`
      )
    } catch (error) {
      logger.error(
        `Error saving events ${error.message} for requestId : ${options.requestId}`
      )
      if (error.code === "ER_NO_REFERENCED_ROW_2") {
        throw new Error("Invalid item or type supplied in input.")
      }
      throw new Error(error.message)
    }
    return rows
  },

  getEvents: async (options) => {
    const dbObject = databaseProviders[process.env.DB_PROVIDER]()
    await dbObject.connect()
    let rows

    let insertQuery = `select type,item,timestamp from event` //we need to use pagination
    try {
      rows = await dbObject.query(insertQuery)
    } catch (error) {
      logger.error(
        `Error in getting events ${error.message} for requestId: ${options.requestId}`
      )
      throw new Error("Error retrieving events.")
    }
    return rows
  },
}
