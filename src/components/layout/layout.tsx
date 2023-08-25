import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import LayoutCard from "../ui/layout-card"
import { getHeaderInfo } from "../../util/helpers"
import { Values } from "../../types/form-types"

type Props = {
  children: React.ReactElement
  isSubmitting: boolean
  currentStep: number
  onGoBack: (values: Values) => void
}

const Layout = ({ children, isSubmitting, currentStep, onGoBack }: Props) => {
  const headingInfo = getHeaderInfo(currentStep)
  return (
    <div className="bg-labaster h-full font-ubuntu">
      <Navigation currentStep={currentStep} />
      <div className="w-full fixed top-24 left-0 h-[450px] overflow-y-scroll">
        <LayoutCard
          title={headingInfo.title}
          description={headingInfo.description}
          onSubmit={isSubmitting}
        >
          {children}
        </LayoutCard>
      </div>
      {!isSubmitting && (
        <Footer onGoBack={onGoBack} currentStep={currentStep} />
      )}
    </div>
  )
}

export default Layout
