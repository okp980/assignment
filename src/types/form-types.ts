import React from "react"
import { FormikHelpers, FormikValues } from "formik"

export type Values = {
  name: string
  email: string
  phone_number: string
  plan: string
  online_service: boolean
  larger_storage: boolean
  customizable_profile: boolean
  duration: string
}

export type FormStepperProps = {
  children: React.ReactElement
  initialValues: any
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void
}

export type PersonalInfo = {
  name: string
  label: string
  placeholder: string
  type: string
}

export type HeaderInfoType = {
  title: string
  description: string
}
