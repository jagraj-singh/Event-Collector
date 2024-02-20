import { object, string, date } from "yup"

const eventSchema = object({
  type: string().required(),
  item: string().required(),
  timestamp: string().required(), //need transformation later. as it can allow any string
})

export default eventSchema
