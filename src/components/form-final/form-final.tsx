import { useFormikContext } from "formik"
import { Values } from "../../types/form-types"
import plansData from "../../data/plan.json"
import addOnsData from "../../data/add-ons.json"
import { getNumber } from "../../util/helpers"

type Props = {}

const FormFinal = (props: Props) => {
  const { values } = useFormikContext<Values>()

  const getCost = () => {
    const plan = plansData.plans.find(
      (plan) => plan.plan.toLowerCase() === values.plan.toLowerCase()
    )
    const cost =
      values.duration === "monthly"
        ? plan?.cost.month
        : values.duration === "yearly"
        ? plan?.cost.year
        : null

    return cost
  }

  const getAddOns = () => {
    const fields = {
      customizable_profile: values.customizable_profile,
      larger_storage: values.larger_storage,
      online_service: values.online_service,
    } as any

    const selectedAddOns = Object.keys(fields).filter((field) => fields[field])

    return addOnsData.add_ons
      .filter((f: any) => selectedAddOns.some((field: any) => f.name === field))
      .reduce((prevValue: any, currValue) => {
        return {
          ...prevValue,
          [currValue.title]:
            values.duration === "monthly"
              ? currValue.cost.month
              : currValue.cost.year,
        }
      }, {})
  }

  const cost = getCost()
  const userAddOns = getAddOns()

  const TOTAL = Object.values(userAddOns).reduce(
    (prevValue: number, currValue: any) => {
      return prevValue + getNumber(currValue)
    },
    getNumber(cost as string)
  )

  return (
    <div className="text-base lg:text-lg">
      <div>
        <ul className="flex flex-col gap-2 p-4 bg-labaster rounded-xl">
          <li className="flex justify-between items-center py-3  border-b border-gray-200">
            <div>
              <p className="text-heading capitalize">
                Arcade({values.duration})
              </p>
              <p className="text-body text-sm lg:text-base underline cursor-pointer hover:text-marine-blue">
                Change
              </p>
            </div>
            <div>{cost}</div>
          </li>

          {Object.keys(userAddOns).map((item: any, index: number) => (
            <li
              className="flex justify-between items-center text-sm lg:text-base py-3"
              key={index}
            >
              <div className="text-body">{item}</div>
              <div>{userAddOns[item]}</div>
            </li>
          ))}
        </ul>
        <ul className="my-8">
          <li className="flex justify-between items-center text-sm lg:text-base">
            <div className="text-body ">
              Total ({values.duration === "monthly" ? "per month" : "per year"})
            </div>
            <div className="text-purplish-blue font-bold text:lg lg:text-xl">
              +${TOTAL}/mo
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FormFinal
