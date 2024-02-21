import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import EventCollectorRoutes from "./routers/event-collector-router.js"

dotenv.config()

const app = express()
const defaultPort = 7007
const port = process.env.PORT || defaultPort

app.use(bodyParser.json())
app.use("/event", EventCollectorRoutes)

app.listen(port, () => {
  console.log(`Event Collector is running at http://localhost:${port}`)
})

export { app }
