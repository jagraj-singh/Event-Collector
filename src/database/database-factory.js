import { MySql } from "./provider/mysql.js"
const dbobjects = {}

export const databaseProviders = {
  MYSQL: () => {
    if (dbobjects["MYSQL"] === undefined) {
      dbobjects["MYSQL"] = new MySql()
    }
    return dbobjects["MYSQL"]
  },
}
