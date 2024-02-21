import eventSchema from "../schemas/event-schema.js"

export default {
  validateEvent: async (req, res, next) => {
    const rawEvents = req.body?.events
    if (!Array.isArray(rawEvents)) {
      return res.status(400).send("Events should be an array")
    }
    if (rawEvents.length === 0) {
      return res.status(400).send("No events to post")
    }
    try {
      for (let event of rawEvents) {
        event.timestamp = new Date(event.timestamp)
        await eventSchema.validate(event, { strict: true })
      }
    } catch (error) {
      return res.status(400).send(error.errors)
    }

    next()
  },
}
