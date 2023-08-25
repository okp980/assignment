import "react-toggle/style.css"
import ReactToggle from "react-toggle"

type Props = typeof ReactToggle

const Toggle = (props: any) => {
  return <ReactToggle icons={false} {...props} />
}

export default Toggle
