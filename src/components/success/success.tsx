import React from "react"

type Props = {}

const Success = (props: Props) => {
  return (
    <div>
      <h1 className="text-heading text-2xl font-bold text-center mb-4">
        Thank you
      </h1>
      <p className="text-body text-center">
        Thanks for confirming your subcription! We hope you have fun using our
        platform. If ou ever need support, please feel free to email us at
        support@oremgaming.com
      </p>
    </div>
  )
}

export default Success
