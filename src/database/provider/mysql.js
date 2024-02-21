import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()
export class MySql {
  static db
  async connect() {
    // if (MySql.db === undefined) {
    MySql.db = await mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DATABASE,
      password: process.env.MYSQL_PASSWORD,
    })
    // }
    return 0
  }

  async query(query) {
    const [result] = await MySql.db.query(query)
    return result
  }

  async execute(query, values) {
    const [result] = await MySql.db.execute({ query, values })
    return result
  }

  close() {
    MySql.db.close()
  }
}
