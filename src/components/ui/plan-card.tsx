import cn from "classnames"
import { useFormikContext } from "formik"
import React from "react"

type Props = {
  image?: any
  plan: string
  cost: string
  duration: string
}

const PlanCard = ({ image, plan, cost, duration }: Props) => {
  const { setFieldValue } = useFormikContext()
  const customClass = {
    root: "p-3 border border-gray-300 rounded-lg lg:w-1/3 lg:h-52",
    active: "border-marine-blue bg:light-blue",
  }

  return (
    <div
      className={cn(customClass.root)}
      onClick={() => {
        setFieldValue("plan", plan)
      }}
    >
      {image && (
        <div>
          <img src={image} alt="plan" />
        </div>
      )}
      <div>
        <p className="text-heading mb-1">{plan}</p>
        <p className="text-body text-sm mb-1 ">{cost}</p>
        {duration === "yearly" && (
          <p className="text-xs mb-1 ">2 months free</p>
        )}
      </div>
    </div>
  )
}

export default PlanCard
