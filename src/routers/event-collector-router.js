import { Router } from "express"
import EventCollectorController from "../controllers/event-collector-controller.js"
import EventValidator from "../middlewares/event-validator.js"

const router = Router()

router.post(
  "/",
  EventValidator.validateEvent,
  EventCollectorController.postEvent
)

router.get("/", EventCollectorController.getEvents)

export default router
