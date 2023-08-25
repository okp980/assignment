import React, { useState } from "react"
import { FormStepperProps, Values } from "../../types/form-types"
import { Form, Formik, FormikHelpers } from "formik"
import Layout from "../layout/layout"
import Success from "../success/success"

const FormStepper = ({
  children,
  initialValues,
  onSubmit,
}: FormStepperProps) => {
  const [stepNumber, setStepNumber] = useState<number>(0)
  const steps = React.Children.toArray(children) as any[]
  const [snapshot, setSnapshot] = useState(initialValues)
  const [submitForm, setSubmitForm] = useState(false)

  const step = steps[stepNumber]
  const totalSteps = steps.length
  const isLastStep = stepNumber === totalSteps - 1

  const next = (values: Values) => {
    setSnapshot(values)
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1))
  }

  const previous = (values: Values) => {
    setSnapshot(values)
    setStepNumber(Math.max(stepNumber - 1, 0))
  }

  const handleSubmit = async (values: Values, bag: FormikHelpers<Values>) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag)
    }
    if (isLastStep) {
      setSubmitForm(true)
      return onSubmit(values, bag)
    } else {
      bag.setTouched({})
      next(values)
    }
  }
  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <Layout
            isSubmitting={submitForm}
            currentStep={stepNumber + 1}
            onGoBack={previous}
          >
            <>{submitForm ? <Success /> : step}</>
          </Layout>
        </Form>
      )}
    </Formik>
  )
}

export default FormStepper
