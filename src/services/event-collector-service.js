import dotenv from "dotenv"
import { databaseProviders } from "../database/database-factory.js"
import { cacheProviders } from "../cache/cache-factory.js"

dotenv.config()
export default {
  postEvents: async (events) => {
    const dbObject = databaseProviders[process.env.DB_PROVIDER]()
    await dbObject.connect()

    let insertQuery = `INSERT INTO event (type, item, timestamp) VALUES`
    for (let event of events) {
      insertQuery += `('${event.type}','${event.item}','${event.timestamp}'),`
    }
    insertQuery = insertQuery.slice(0, -1)
    let rows
    try {
      rows = await dbObject.query(insertQuery)
    } catch (error) {
      if (error.code === "ER_NO_REFERENCED_ROW_2") {
        throw new Error("Invalid item or type supplied in input.")
      }
    }
    return rows
  },

  getEvents: async () => {
    const dbObject = databaseProviders[process.env.DB_PROVIDER]()
    await dbObject.connect()
    let rows

    let insertQuery = `select * from event` //we need to use pagination
    try {
      rows = await dbObject.query(insertQuery)
    } catch (error) {
      throw new Error("Error retrieving events.")
    }
    return rows
  },
}
