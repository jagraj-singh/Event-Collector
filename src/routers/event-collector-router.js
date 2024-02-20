import { Router } from "express"
import bodyParser from "body-parser"
import EventCollectorController from "../controllers/event-collector-controller.js"
import EventValidator from "../middlewares/event-validator.js"

const router = Router()

router.use("/event", bodyParser.json())
router.post(
  "/event",
  EventValidator.validateEvent,
  EventCollectorController.postEvent
)

router.get("/event", EventCollectorController.getEvents)

export default router
