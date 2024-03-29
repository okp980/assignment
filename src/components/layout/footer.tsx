import React from "react"
import Button from "../ui/button"
import { Values } from "../../types/form-types"
import { useFormikContext } from "formik"

type Props = {
  onGoBack: (values: Values) => void
  currentStep: number
}

const Footer = ({ onGoBack, currentStep }: Props) => {
  const { values } = useFormikContext()
  return (
    <footer className="fixed w-full right-0 bottom-0 h-20 lg:h-40 bg-white lg:bg-transparent lg:w-1/2 flex items-center lg:left-auto lg:right-40 px-5 justify-between shadow lg:shadow-none lg:z-0">
      <div>
        {currentStep > 1 && (
          <Button
            variant="back"
            type="button"
            className="text-sm lg:text-base px-5 py-4 mb-0"
            onClick={() => onGoBack(values as Values)}
          >
            Go Back
          </Button>
        )}
      </div>
      <Button
        type="submit"
        className="text-sm lg:text-base px-5 py-4  lg:px-10 mb-0"
      >
        Next step
      </Button>
    </footer>
  )
}

export default Footer
