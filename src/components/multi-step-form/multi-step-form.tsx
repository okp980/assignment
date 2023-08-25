import React from "react"
import FormStepper from "../form-stepper.tsx/form-stepper"
import FormStep from "../form-step/form-step"
import * as Yup from "yup"
import CustomInput from "../custom-input/custom-input"
import personalInfoData from "../../data/personal-information.json"
import FormFinal from "../form-final/form-final"
import { PersonalInfo } from "../../types/form-types"
import PlanFormStep from "../form-step/plaf-form-step"
import AddOnsFormStep from "../form-step/add-ons-form-step"

type Props = {}

const MultiStepForm = (props: Props) => {
  return (
    // @ts-ignore
    <FormStepper
      initialValues={{
        name: "",
        email: "",
        phone_number: "",
        plan: "",
        online_service: false,
        larger_storage: false,
        customizable_profile: false,
        duration: "monthly",
      }}
      onSubmit={(values) => {
        console.log("submit", values)
      }}
    >
      <FormStep
        onSubmit={() => console.log("Step1 onSubmit")}
        validationSchema={Yup.object({
          name: Yup.string().required("This field is required"),
          email: Yup.string().required("This field is required"),
          phone_number: Yup.string().required("This field is required"),
        })}
      >
        <div>
          {personalInfoData.fields.map((field: PersonalInfo, index: number) => (
            <CustomInput
              key={index}
              name={field.name}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
              className="mb-5"
            />
          ))}
        </div>
      </FormStep>
      <FormStep
        onSubmit={() => console.log("Step2 onSubmit")}
        validationSchema={Yup.object({
          plan: Yup.string().required("You must select a plan"),
        })}
      >
        <PlanFormStep />
      </FormStep>
      <FormStep onSubmit={() => console.log("Step3 onSubmit")}>
        <AddOnsFormStep />
      </FormStep>
      <FormStep onSubmit={() => console.log("Step4 onSubmit")}>
        <FormFinal />
      </FormStep>
    </FormStepper>
  )
}

export default MultiStepForm
