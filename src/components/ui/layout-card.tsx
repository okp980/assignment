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
    <div className=" w-[90vw] lg:w-1/2 rounded-lg bg-white lg:bg-transparent shadow mx-auto px-5 pt-10 pb-5 lg:shadow-none lg:mt-20">
      {!onSubmit && (
        <>
          <h1 className="font-bold text-2xl capitalize text-marine-blue mb-2 lg:text-3xl">
            {title}
          </h1>
          <p className="text-cool-gray font-normal mb-8 lg:text-lg">
            {description}
          </p>
        </>
      )}
      {children}
    </div>
  )
}

export default LayoutCard
