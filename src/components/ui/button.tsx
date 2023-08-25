import cn from "classnames"
import React, { ButtonHTMLAttributes } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: "normal" | "confirm" | "back"
  active?: boolean
  disabled?: boolean
}

const classes = {
  root: "inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded-md capitalize font-ubuntu font-normal outline-none transition duration-300 ease-in-out ",
  normal:
    "bg-marine-blue text-white border border-transparent hover:opacity-25",
  confirm:
    "purplish-blue text-white border border-transparent hover:opacity-25",
  back: "text-cool-gray hover:text-marine-blue",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = "normal",
      children,
      active,
      disabled = false,
      ...rest
    } = props
    const classesName = cn(
      classes.root,
      {
        [classes.normal]: variant === "normal",

        [classes.confirm]: variant === "confirm",
        [classes.back]: variant === "back",
      },
      className
    )

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className={classesName}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

export default Button
