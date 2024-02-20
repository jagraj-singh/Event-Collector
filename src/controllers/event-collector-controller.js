import { WinstonLogger } from "../logger/winston.js"
import eventCollectorService from "../services/event-collector-service.js"
import { v4 as uuidv4 } from "uuid"

const logger = WinstonLogger.getLogger()

export default {
  postEvent: async (req, res) => {
    const requestId = uuidv4()
    logger.debug(`Start to post event for requestId: ${requestId}`)
    const events = req.body.events
    try {
      const result = await eventCollectorService.postEvents(events, {
        requestId,
      })
      res.status(200).send(result)
      logger.debug(`events posted successfully for requestId: ${requestId}`)
    } catch (error) {
      logger.error(`error in posting events for requestId: ${requestId}`)
      res.status(400).send(error.message)
    }
  },

  getEvents: async (req, res) => {
    try {
      const result = await eventCollectorService.getEvents({ requestId }) //can be paginated
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error.message)
    }
  },
}
