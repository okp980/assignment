import React from "react"
import addOnsData from "../../data/add-ons.json"
import { ErrorMessage, Field, useFormikContext } from "formik"
import AddOnCard from "../ui/add-ons-card"
import { Values } from "../../types/form-types"

type Props = {}

const AddOnsFormStep = (props: Props) => {
  const { values } = useFormikContext<Values>()
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {addOnsData.add_ons.map((p: any, index: number) => (
        <Field
          key={index}
          component={AddOnCard}
          title={p.title}
          description={p.description}
          cost={values.duration === "monthly" ? p.cost.month : p.cost.year}
          name={p.name}
          type="checkbox"
        />
      ))}
      <ErrorMessage
        name="add_ons"
        render={(error: string) => (
          <p className="my-2 text-xs text-strawberry-red text-start">{error}</p>
        )}
      />
    </div>
  )
}

export default AddOnsFormStep
