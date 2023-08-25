import { useField } from "formik"
import React from "react"
import Input, { InputProps } from "../ui/Input"

type Props = {}

const CustomInput = ({ label, ...props }: InputProps) => {
  const [field, meta, helpers] = useField(props)
  return (
    <Input
      label={label}
      {...field}
      {...props}
      error={meta.touched && meta.error ? meta.error : undefined}
    />
  )
}

export default CustomInput
