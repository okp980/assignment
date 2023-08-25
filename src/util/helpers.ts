import { HeaderInfoType } from "../types/form-types"
import personalInfo from "../data/personal-information.json"
import planData from "../data/plan.json"
import addOnsData from "../data/add-ons.json"

export const getHeaderInfo = (step: number): HeaderInfoType => {
  const header = { title: "", description: "" }

  switch (step) {
    case 1:
      header.title = personalInfo.title
      header.description = personalInfo.description
      break
    case 2:
      header.title = planData.title
      header.description = planData.description
      break
    case 3:
      header.title = addOnsData.title
      header.description = addOnsData.description
      break
    case 4:
      header.title = "Finishing up"
      header.description = "Double check everything looks OK before confirming."
      break

    default:
      break
  }

  return header
}

export const getNumber = (value: string) => {
  let matches = value.match(/(\d+)/)

  if (matches) {
    return parseInt(matches[0])
  }
  return 0
}
