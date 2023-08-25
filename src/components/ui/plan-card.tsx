import cn from "classnames"
import { useFormikContext } from "formik"
import React from "react"
import arcade_icon from "../../assets/images/icon-arcade.svg"
import advanced_icon from "../../assets/images/icon-advanced.svg"
import pro_icon from "../../assets/images/icon-pro.svg"
import { Values } from "../../types/form-types"

type Props = {
  plan: string
  cost: string
  duration: string
}

const PlanCard = ({ plan, cost, duration }: Props) => {
  const { values, setFieldValue } = useFormikContext<Values>()
  const icon =
    plan === "Arcade"
      ? arcade_icon
      : plan === "Advanced"
      ? advanced_icon
      : pro_icon
  const customClass = {
    root: "p-3 lg:pt-6 border border-gray-300 rounded-lg lg:w-1/3 lg:h-52 cursor-pointer hover:border-purplish-blue hover:bg-agnolia flex gap-4 lg:flex-col lg:justify-between",
    active: "border-purplish-blue bg-agnolia",
  }

  return (
    <div
      className={cn(customClass.root, {
        [customClass.active]: values.plan === plan,
      })}
      onClick={() => {
        setFieldValue("plan", plan)
      }}
    >
      <div>
        <img src={icon} alt="plan" />
      </div>

      <div>
        <p className=" text-heading mb-1">{plan}</p>
        <p className="text-body text-sm mb-1 ">{cost}</p>
        {duration === "yearly" && (
          <p className="text-xs mb-1 ">2 months free</p>
        )}
      </div>
    </div>
  )
}

export default PlanCard
