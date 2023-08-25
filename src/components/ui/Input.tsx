import cn from "classnames"
import React, { InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  inputClassName?: string
  label?: string
  note?: string
  name: string
  error?: string
}

const classes = {
  root: "px-4 h-10 lg:h-14 flex items-center w-full rounded-md appearance-none transition duration-300 ease-in-out text-heading placeholder:text-cool-gray text-sm focus:outline-none focus:ring-0 bg-transparent border border-gray-300 focus:border-purplish-blue",
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      note,
      name,
      error,
      children,
      type = "text",
      inputClassName,
      disabled,
      ...rest
    },
    ref
  ) => {
    const rootClassName = cn(classes.root, inputClassName)

    return (
      <div className={className}>
        <div className="flex items-center justify-between mb-1 lg:mb-2">
          <label
            htmlFor={name}
            className=" block text-xs lg:text-base text-marine-blue leading-none "
          >
            {label}
          </label>
          {error && (
            <p className="text-xs lg:text-base text-strawberry-red text-start ">
              {error}
            </p>
          )}
        </div>

        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={rootClassName}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
      </div>
    )
  }
)

export default Input
