import cn from "classnames"
import { useField } from "formik"
import React, { InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  label?: string
  note?: string
  name: string
  error?: string
  title: string
  description: string
  cost: string
  field: any
}

const labelClasses = {
  root: "flex items-center gap-4 border p-3 rounded-lg",
  normal: "border-gray-300",
  checked: "border border-purplish-blue",
}

const AddOnCard = ({
  title,
  description,
  cost,
  field,
  ...props
}: InputProps) => {
  return (
    <label
      htmlFor={props.name}
      className={cn(labelClasses.root, {
        [labelClasses.normal]: !field.checked,
        [labelClasses.checked]: field.checked,
      })}
    >
      <input type="checkbox" {...field} />
      <div className="flex-1">
        <h5 className="text-heading text-sm">{title}</h5>
        <h5 className=" text-body text-xs">{description}</h5>
      </div>

      <p className="text-purplish-blue text-xs">{cost}</p>
    </label>
  )
}

export default AddOnCard
