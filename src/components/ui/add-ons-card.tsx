import cn from "classnames"
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
  root: "flex items-center gap-4 border p-3 rounded-lg lg:p-8 cursor-pointer hover:border hover:border-purplish-blue",
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
        <h5 className="text-heading text-sm lg:text-lg">{title}</h5>
        <h5 className=" text-body text-xs lg:text-base">{description}</h5>
      </div>

      <p className="text-purplish-blue text-xs lg:text-base">{cost}</p>
    </label>
  )
}

export default AddOnCard
