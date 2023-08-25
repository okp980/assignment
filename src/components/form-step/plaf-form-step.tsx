import React from "react"
import planData from "../../data/plan.json"
import PlanCard from "../ui/plan-card"
import { ErrorMessage, Field, useFormikContext } from "formik"
import CustomToggle from "../custom-toggle/custom-toggle"
import { Values } from "../../types/form-types"

type Props = {}

const PlanFormStep = (props: Props) => {
  const { values } = useFormikContext<Values>()
  return (
    <>
      <ErrorMessage
        name="plan"
        render={(error: string) => (
          <p className="my-2 text-xs lg:text-base text-strawberry-red text-start">
            {error}
          </p>
        )}
      />
      <div className="flex flex-col gap-4 lg:gap-10">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
          {planData.plans.map((p: any, index: number) => (
            <PlanCard
              key={index}
              plan={p.plan}
              cost={values.duration === "monthly" ? p.cost.month : p.cost.year}
              duration={values.duration}
            />
          ))}
        </div>
        <Field component={CustomToggle} name="duration" />
      </div>
    </>
  )
}

export default PlanFormStep
