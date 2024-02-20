import express from "express"
import dotenv from "dotenv"
import EventCollectorRoutes from "./routers/event-collector-router.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 7007

app.use(EventCollectorRoutes)

app.listen(port, () => {
  console.log(`Event Collector is running at http://localhost:${port}`)
})

export { app }
