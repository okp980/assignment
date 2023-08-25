import React from "react"

type Props = {
  title: string
  description: string
  onSubmit: boolean
}

const LayoutCard = ({
  title,
  description,
  onSubmit,
  children,
}: Props & React.PropsWithChildren) => {
  return (
    <div className=" w-[90vw] rounded-lg bg-white shadow mx-auto px-5 pt-10 pb-5">
      {!onSubmit && (
        <>
          <h1 className="font-bold text-2xl capitalize text-marine-blue mb-2">
            {title}
          </h1>
          <p className="text-cool-gray font-normal mb-8">{description}</p>
        </>
      )}
      {children}
    </div>
  )
}

export default LayoutCard
