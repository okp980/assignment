import cn from "classnames"

type Props = {
  currentStep: number
}

const classes = {
  root: "text-labaster border-labaster border h-9 w-9 lg:h-12 lg:w-12 rounded-full flex items-center justify-center font-medium",
  normal: "bg-transparent text-white",
  active: "bg-light-blue text-marine-blue",
}

const Navigation = ({ currentStep }: Props) => {
  return (
    <div className="bg-purplish-blue h-40 fixed top-0 left-0 w-full lg:z-10 lg:bottom-0 lg:w-1/4 lg:h-auto lg:m-4 lg:rounded-lg">
      <div className="flex justify-center lg:mt-20 ">
        <ul className="flex gap-5 mt-6 lg:flex-col lg:gap-9">
          {Array.from(Array(4)).map((item: any, index: number) => (
            <li key={index} className="flex items-center gap-5">
              <div
                className={cn(classes.root, {
                  [classes.normal]: index + 1 !== currentStep,
                  [classes.active]: index + 1 === currentStep,
                })}
              >
                {index + 1}
              </div>
              <div className="hidden lg:block">
                <h4 className="uppercase text-cool-gray text-sm">
                  step {index + 1}
                </h4>
                <p className="uppercase text-white text-base"> Your info</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navigation
