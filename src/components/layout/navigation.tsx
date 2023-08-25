import cn from "classnames"

type Props = {
  currentStep: number
}

const classes = {
  root: "text-labaster border-labaster border h-9 w-9 rounded-full flex items-center justify-center font-medium",
  normal: "bg-transparent text-white",
  active: "bg-light-blue text-marine-blue",
}

const Navigation = ({ currentStep }: Props) => {
  return (
    <div className="bg-purplish-blue h-40">
      <div className="flex justify-center">
        <ul className="flex gap-5 mt-6">
          {Array.from(Array(4)).map((item: any, index: number) => (
            <li key={index}>
              <div
                className={cn(classes.root, {
                  [classes.normal]: index + 1 !== currentStep,
                  [classes.active]: index + 1 === currentStep,
                })}
              >
                {index + 1}
              </div>
              <div className="hidden desktop:block">
                <h4 className="uppercase">step {index + 1}</h4>
                <p className="uppercase"> Your info</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navigation
