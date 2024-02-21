import { WinstonLogger } from "../logger/winston.js"
import eventCollectorService from "../services/event-collector-service.js"
import { v4 as uuidv4 } from "uuid"

const logger = WinstonLogger.getLogger()

export default {
  postEvent: async (req, res) => {
    const requestId = uuidv4()
    logger.info(`Start to post event for requestId: ${requestId}`)
    const events = req.body.events
    logger.debug(
      `Events to be posted ${JSON.stringify(
        events
      )} for requestId : ${requestId}`
    )
    try {
      const result = await eventCollectorService.postEvents(events, {
        requestId,
      })
      res.status(200).send(result)
      logger.info(`events posted successfully for requestId: ${requestId}`)
    } catch (error) {
      logger.error(`error in posting events for requestId: ${requestId}`)
      res.status(400).send(error.message)
    }
  },

  getEvents: async (req, res) => {
    try {
      const requestId = uuidv4()
      logger.info(`Start to get events for requestId: ${requestId}`)
      const result = await eventCollectorService.getEvents({ requestId }) //can be paginated
      logger.info(`Successfully got events for requestId: ${requestId}`)
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error.message)
    }
  },
}
