import { WinstonLogger } from "../logger/winston.js"
import eventCollectorService from "../services/event-collector-service.js"

const logger = WinstonLogger.getLogger()

export default {
  postEvent: async (req, res) => {
    logger.debug("Start to post event")
    const events = req.body.events
    try {
      const result = await eventCollectorService.postEvents(events)
      res.status(200).send(result)
      logger.debug("events posted successfully")
    } catch (error) {
      logger.error("error in posting events")
      res.status(400).send(error.message)
    }
  },

  getEvents: async (req, res) => {
    try {
      const result = await eventCollectorService.getEvents() //can be paginated
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error.message)
    }
  },
}
