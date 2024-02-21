import { object, string, date } from "yup"

const eventSchema = object({
  type: string().required(),
  item: string().required(),
  timestamp: date().required(),
})

export default eventSchema
