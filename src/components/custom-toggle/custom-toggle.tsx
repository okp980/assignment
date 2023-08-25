import React from "react"
import Toggle from "../ui/toggle"
import { useFormikContext } from "formik"
import cn from "classnames"
import { Values } from "../../types/form-types"

type Props = any

const classes = {
  root: "text-sm text-cool-gray",
  normal: "",
  active: "text-marine-blue",
}

const CustomToggle = (props: Props) => {
  const { setFieldValue, values } = useFormikContext<Values>()
  return (
    <div className="flex gap-8 items-center justify-center py-3 rounded-md bg-agnolia">
      <p
        className={cn(classes.root, {
          [classes.active]: values.duration === "monthly",
        })}
      >
        Monthly
      </p>
      <Toggle
        checked={values.duration === "yearly"}
        onChange={(event: any) => {
          setFieldValue("duration", event.target.checked ? "yearly" : "monthly")
          setFieldValue("plan", "")
        }}
      />
      <p
        className={cn(classes.root, {
          [classes.active]: values.duration === "yearly",
        })}
      >
        Yearly
      </p>
    </div>
  )
}

export default CustomToggle
